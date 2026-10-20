/**
 * 小学校社会科 定着＆記述マスター メインアプリケーションロジック
 * 外部API・課金一切なし（完全無料・ブラウザ標準機能のみで動作）
 */

(function () {
  "use strict";

  const STORAGE_KEY = "shakai_study_progress_v1";

  // アプリ状態管理
  const state = {
    currentUnit: null,
    currentStep: 1, // 1 | 2 | 3

    // Step 1 状態
    s1Questions: [],
    s1Index: 0,
    s1Score: 0,
    s1WrongQuestions: [],
    s1Answered: false,

    // Step 2 状態
    s2Questions: [],
    s2Index: 0,
    s2Score: 0,
    s2Pool: [],     // { id, text, used }
    s2Selected: [], // 選択順の pool アイテム参照
    s2Answered: false,

    // Step 3 状態
    s3Questions: [],
    s3Index: 0,
    s3Score: 0,
    s3PerfectCount: 0,
    s3Graded: false,

    // 音声認識
    recognition: null,
    isListening: false
  };

  // ==========================================
  // ローカルストレージ管理
  // ==========================================
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUnitStepProgress(unitId, stepNum, isCleared, bestScoreText) {
    const progress = loadProgress();
    if (!progress[unitId]) {
      progress[unitId] = {};
    }
    const prev = progress[unitId]["step" + stepNum] || {};
    progress[unitId]["step" + stepNum] = {
      cleared: prev.cleared || isCleared,
      bestScoreText: bestScoreText || prev.bestScoreText || ""
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      // ignore storage quota errors
    }
    updateHeaderCrowns();
  }

  function updateHeaderCrowns() {
    const progress = loadProgress();
    let count = 0;
    Object.values(progress).forEach((u) => {
      if (u.step1 && u.step1.cleared) count++;
      if (u.step2 && u.step2.cleared) count++;
      if (u.step3 && u.step3.cleared) count++;
    });
    const el = document.getElementById("total-crowns");
    if (el) el.textContent = String(count);
  }

  // ==========================================
  // 音声読み上げ（Web Speech API: speechSynthesis）
  // ==========================================
  function speakText(text) {
    if (!("speechSynthesis" in window)) {
      alert("お使いのブラウザは音声読み上げに対応していません。");
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    utter.rate = 1.0;
    window.speechSynthesis.speak(utter);
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  // ==========================================
  // 音声認識（Web Speech API: SpeechRecognition）
  // ==========================================
  function initSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const micBtn = document.getElementById("btn-s3-mic");
    const micStatus = document.getElementById("mic-status");

    if (!SpeechRec) {
      if (micBtn) {
        micBtn.disabled = true;
        micBtn.style.opacity = "0.5";
      }
      if (micStatus) {
        micStatus.textContent = "※このブラウザは音声入力に未対応です。キーボードで入力してください。";
      }
      return;
    }

    const rec = new SpeechRec();
    rec.lang = "ja-JP";
    rec.interimResults = true;
    rec.continuous = false;

    rec.onstart = function () {
      state.isListening = true;
      micBtn.classList.add("listening");
      document.getElementById("mic-btn-label").textContent = "聞いています…（おわったらタップ）";
      micStatus.textContent = "🎤 マイクに向かって理由や工夫を話してみよう！";
    };

    rec.onresult = function (event) {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      const textarea = document.getElementById("s3-textarea");
      if (textarea) {
        // 確定結果のときに句点を補う
        const isFinal = event.results[event.results.length - 1].isFinal;
        let cleaned = transcript.trim();
        if (isFinal && cleaned && !cleaned.endsWith("。")) {
          cleaned += "。";
        }
        textarea.value = cleaned;
        updateStep3RealtimeBadges();
      }
    };

    rec.onerror = function () {
      stopListeningUI();
      micStatus.textContent = "うまく聞き取れませんでした。もう一度🎤をおすか、キーボードで入力してね。";
    };

    rec.onend = function () {
      stopListeningUI();
    };

    state.recognition = rec;
  }

  function stopListeningUI() {
    state.isListening = false;
    const micBtn = document.getElementById("btn-s3-mic");
    const label = document.getElementById("mic-btn-label");
    const micStatus = document.getElementById("mic-status");
    if (micBtn) micBtn.classList.remove("listening");
    if (label) label.textContent = "マイクをおして「声」で説明する";
    if (micStatus) micStatus.textContent = "声で入った文字をキーボードで手直ししてもOKです！";
  }

  function toggleMic() {
    if (!state.recognition) return;
    if (state.isListening) {
      state.recognition.stop();
    } else {
      stopSpeaking();
      try {
        state.recognition.start();
      } catch (e) {
        state.recognition.stop();
      }
    }
  }

  // ==========================================
  // ユーティリティ（シャッフル）
  // ==========================================
  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  // ==========================================
  // 画面切り替え
  // ==========================================
  function showView(viewId) {
    stopSpeaking();
    if (state.isListening && state.recognition) {
      state.recognition.stop();
    }

    document.querySelectorAll(".view").forEach((el) => {
      el.classList.remove("active");
    });
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");
    if (window.Game) Game.onView(viewId);

    const studyNav = document.getElementById("study-nav");
    if (viewId === "view-home") {
      studyNav.classList.add("hidden");
      renderHomeUnits();
    } else {
      studyNav.classList.remove("hidden");
      updateStepTabs();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateStepTabs() {
    document.querySelectorAll(".step-tab").forEach((btn) => {
      const s = Number(btn.getAttribute("data-step"));
      btn.classList.toggle("active", s === state.currentStep);
    });
  }

  // ==========================================
  // ホーム画面（単元カード描画）
  // ==========================================
  function renderHomeUnits() {
    updateHeaderCrowns();
    const container = document.getElementById("units-container");
    container.innerHTML = "";
    const progress = loadProgress();

    UNITS.forEach((unit) => {
      const uProg = progress[unit.id] || {};
      const s1Prog = uProg.step1 || {};
      const s2Prog = uProg.step2 || {};
      const s3Prog = uProg.step3 || {};

      const card = document.createElement("div");
      card.className = "unit-card";
      card.innerHTML = `
        <div class="unit-header">
          <div class="unit-title-group">
            <div class="unit-icon">${unit.icon}</div>
            <div>
              <div class="unit-meta">
                <span class="unit-tag">${unit.grade}</span>
                <span class="unit-pages">教科書 ${unit.pages}</span>
              </div>
              <h2 class="unit-title">${unit.title}</h2>
              <p class="unit-subtitle">${unit.subtitle}</p>
            </div>
          </div>
        </div>

        <div class="steps-grid">
          <!-- Step 1 -->
          <div class="step-launch-card step-1">
            <img class="quest-thumb" src="css/img/e01.webp" alt="">
            <div class="quest-body">
              <div class="step-card-top">
                <span class="step-label-pill">Step 1（基礎・再認）</span>
                <span class="crown-status ${s1Prog.cleared ? "cleared" : ""}">
                  ${s1Prog.cleared ? "👑 クリア！" : "未クリア"}
                </span>
              </div>
              <h3 class="step-card-title">じっくり4択クイズ（全${unit.step1_quiz.length}問）</h3>
              <p class="step-card-desc">スピード勝負ではなく、解説の「重要キーワード」を確かめながら解こう！</p>
            </div>
            <button class="btn-primary" data-action="start-step" data-unit="${unit.id}" data-step="1" style="background: var(--step1-color);">
              Step 1 をはじめる ➔
            </button>
          </div>

          <!-- Step 2 -->
          <div class="step-launch-card step-2">
            <img class="quest-thumb" src="css/img/f01.webp" alt="">
            <div class="quest-body">
              <div class="step-card-top">
                <span class="step-label-pill">Step 2（文の組み立て）</span>
                <span class="crown-status ${s2Prog.cleared ? "cleared" : ""}">
                  ${s2Prog.cleared ? "👑 クリア！" : "未クリア"}
                </span>
              </div>
              <h3 class="step-card-title">語句ブロック並び替え（全${unit.step2_puzzle.length}問）</h3>
              <p class="step-card-desc">バラバラのブロックを並び替えて、「なぜ〜なのか」を説明する文の型をつくろう！</p>
            </div>
            <button class="btn-primary" data-action="start-step" data-unit="${unit.id}" data-step="2" style="background: var(--step2-color);">
              Step 2 をはじめる ➔
            </button>
          </div>

          <!-- Step 3 -->
          <div class="step-launch-card step-3">
            <img class="quest-thumb" src="css/img/g01.webp" alt="">
            <div class="quest-body">
              <div class="step-card-top">
                <span class="step-label-pill">Step 3（記述・自己説明）</span>
                <span class="crown-status ${s3Prog.cleared ? "cleared" : ""}">
                  ${s3Prog.cleared ? "👑 クリア！" : "未クリア"}
                </span>
              </div>
              <h3 class="step-card-title">キーワード1行記述（全${unit.step3_descriptive.length}問）</h3>
              <p class="step-card-desc">2つのキーワードを使って、🎤声で話すか⌨️タイピングで1行記述にチャレンジ！</p>
            </div>
            <button class="btn-primary" data-action="start-step" data-unit="${unit.id}" data-step="3" style="background: var(--step3-color);">
              Step 3 をはじめる ➔
            </button>
          </div>
        </div>

        <div class="unit-footer-bar">
          <span style="font-size: 0.88rem; font-weight: 700; color: #475569;">
            💡 テスト前のおさらいや音読練習には「重要記述＆キーワードまとめ」を使おう！
          </span>
          <button class="btn-secondary" data-action="open-summary" data-unit="${unit.id}">
            📖 重要記述＆キーワードまとめを見る
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================
  // Step 1: じっくり4択クイズ
  // ==========================================
  function startStep1(unit, customQuestions) {
    state.currentUnit = unit;
    state.currentStep = 1;
    state.s1Questions = customQuestions ? customQuestions.slice() : unit.step1_quiz.slice();
    state.s1Index = 0;
    state.s1Score = 0;
    state.s1WrongQuestions = [];
    showView("view-step1");
    if (window.Game) Game.startStep(1, unit);
    renderStep1Question();
  }

  function renderStep1Question() {
    const q = state.s1Questions[state.s1Index];
    const total = state.s1Questions.length;
    state.s1Answered = false;

    document.getElementById("s1-q-type").textContent = q.type;
    document.getElementById("s1-q-page").textContent = q.page;
    document.getElementById("s1-progress-text").textContent = `第 ${state.s1Index + 1} / ${total} 問`;
    document.getElementById("s1-progress-bar").style.width = `${((state.s1Index + 1) / total) * 100}%`;
    document.getElementById("s1-question").textContent = q.question;
    if (window.Game) Game.showEnemy(1, q, state.s1Index, total);

    const choicesEl = document.getElementById("s1-choices");
    choicesEl.innerHTML = "";
    const shuffled = shuffleArray(q.choices);

    shuffled.forEach((choiceText, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.innerHTML = `
        <span class="choice-num">${idx + 1}</span>
        <span>${choiceText}</span>
      `;
      btn.addEventListener("click", () => handleStep1Answer(btn, choiceText, q));
      choicesEl.appendChild(btn);
    });

    const fb = document.getElementById("s1-feedback");
    fb.classList.add("hidden");
    fb.classList.remove("is-correct", "is-wrong");
  }

  function handleStep1Answer(clickedBtn, selectedText, q) {
    if (state.s1Answered) return;
    state.s1Answered = true;

    const isCorrect = selectedText === q.answer;
    if (isCorrect) {
      state.s1Score++;
      if (window.Game) Game.hitNormal();
    } else {
      state.s1WrongQuestions.push(q);
      if (window.Game) Game.missNormal();
    }

    const buttons = document.querySelectorAll("#s1-choices .choice-btn");
    buttons.forEach((btn) => {
      btn.disabled = true;
      const text = btn.querySelector("span:last-child").textContent;
      if (text === q.answer) {
        btn.classList.add("correct");
      } else if (btn === clickedBtn && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    const fb = document.getElementById("s1-feedback");
    const fbHeader = document.getElementById("s1-feedback-header");
    const kwContainer = document.getElementById("s1-keywords");
    const expEl = document.getElementById("s1-explanation");
    const nextBtn = document.getElementById("btn-s1-next");

    fb.classList.remove("hidden", "is-correct", "is-wrong");
    fb.classList.add(isCorrect ? "is-correct" : "is-wrong");

    fbHeader.textContent = isCorrect
      ? "⭕ 大正解！ 下の重要キーワードも声に出して確かめよう"
      : `❌ おしい！ 正解は「${q.answer}」です`;

    kwContainer.innerHTML = "";
    (q.keywords || [q.answer]).forEach((kw) => {
      const chip = document.createElement("span");
      chip.className = "kw-chip";
      chip.textContent = kw;
      kwContainer.appendChild(chip);
    });

    expEl.textContent = q.explanation;
    nextBtn.textContent =
      state.s1Index + 1 < state.s1Questions.length
        ? "つぎの問題へ ➔"
        : "Step 1 の結果を見る ➔";
  }

  function finishStep1() {
    const total = state.s1Questions.length;
    const score = state.s1Score;
    const isCleared = score >= Math.ceil(total * 0.8);

    saveUnitStepProgress(
      state.currentUnit.id,
      1,
      isCleared,
      `${score} / ${total} 問正解`
    );
    if (window.Game && isCleared) Game.reward(1);

    showResultScreen({
      icon: score === total ? "👑" : isCleared ? "🎉" : "💪",
      title:
        score === total
          ? "Step 1 パーフェクトクリア！"
          : isCleared
          ? "Step 1 クリア！"
          : "あと少しでクリア！",
      scoreText: `${total}問中 ${score}問 正解`,
      message:
        state.s1WrongQuestions.length > 0
          ? `まちがえた問題が ${state.s1WrongQuestions.length}問 あります。今すぐ解き直して100%にしてから、Step 2の並び替えパズルへ進もう！`
          : "基礎知識と理由の選択肢はバッチリです！次はStep 2「語句ブロック並び替えパズル」で記述の文をつくる練習に進みましょう。",
      actions: [
        ...(state.s1WrongQuestions.length > 0
          ? [
              {
                label: `🔥 まちがえた ${state.s1WrongQuestions.length}問 だけ解き直す`,
                className: "btn-primary btn-lg",
                style: "background: #dc2626;",
                onClick: () => startStep1(state.currentUnit, state.s1WrongQuestions)
              }
            ]
          : []),
        {
          label: "🧩 Step 2：並び替えパズルへ進む ➔",
          className: "btn-primary btn-lg",
          style: "background: var(--step2-color);",
          onClick: () => startStep2(state.currentUnit)
        },
        {
          label: "もう一度全問解く",
          className: "btn-secondary",
          onClick: () => startStep1(state.currentUnit)
        }
      ]
    });
  }

  // ==========================================
  // Step 2: 語句ブロック並び替えパズル
  // ==========================================
  function startStep2(unit) {
    state.currentUnit = unit;
    state.currentStep = 2;
    state.s2Questions = unit.step2_puzzle.slice();
    state.s2Index = 0;
    state.s2Score = 0;
    showView("view-step2");
    if (window.Game) Game.startStep(2, unit);
    renderStep2Question();
  }

  function renderStep2Question() {
    const q = state.s2Questions[state.s2Index];
    const total = state.s2Questions.length;
    state.s2Answered = false;

    document.getElementById("s2-q-category").textContent = q.category;
    document.getElementById("s2-q-page").textContent = q.page;
    document.getElementById("s2-progress-text").textContent = `第 ${state.s2Index + 1} / ${total} 問`;
    document.getElementById("s2-progress-bar").style.width = `${((state.s2Index + 1) / total) * 100}%`;
    document.getElementById("s2-question").textContent = q.question;
    if (window.Game) Game.showEnemy(2, q, state.s2Index, total);

    // ブロックをシャッフル（最初から正解順にならないようにする）
    let indices = q.blocks.map((_, i) => i);
    for (let attempt = 0; attempt < 5; attempt++) {
      indices = shuffleArray(indices);
      const isSameOrder = indices.every((val, idx) => val === idx);
      if (!isSameOrder) break;
    }

    state.s2Pool = indices.map((origIdx, poolIdx) => ({
      poolId: poolIdx,
      origIdx: origIdx,
      text: q.blocks[origIdx],
      used: false
    }));
    state.s2Selected = [];

    const fb = document.getElementById("s2-feedback");
    fb.classList.add("hidden");
    fb.classList.remove("is-correct", "is-wrong");

    renderStep2BlocksUI();
  }

  function renderStep2BlocksUI() {
    const slotsEl = document.getElementById("s2-answer-slots");
    const poolEl = document.getElementById("s2-pool-blocks");
    const checkBtn = document.getElementById("btn-s2-check");

    slotsEl.innerHTML = "";
    if (state.s2Selected.length === 0) {
      slotsEl.classList.add("empty");
      slotsEl.innerHTML = `<span class="placeholder-msg">下のブロックをタップしてここに並べよう</span>`;
    } else {
      slotsEl.classList.remove("empty");
      state.s2Selected.forEach((item, selIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "word-block in-slot";
        btn.textContent = item.text;
        btn.disabled = state.s2Answered;
        btn.addEventListener("click", () => {
          if (state.s2Answered) return;
          item.used = false;
          state.s2Selected.splice(selIdx, 1);
          renderStep2BlocksUI();
        });
        slotsEl.appendChild(btn);
      });
    }

    poolEl.innerHTML = "";
    state.s2Pool.forEach((item) => {
      if (item.used) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "word-block";
      btn.textContent = item.text;
      btn.disabled = state.s2Answered;
      btn.addEventListener("click", () => {
        if (state.s2Answered) return;
        item.used = true;
        state.s2Selected.push(item);
        renderStep2BlocksUI();
      });
      poolEl.appendChild(btn);
    });

    checkBtn.disabled =
      state.s2Answered || state.s2Selected.length !== state.s2Pool.length;
  }

  function handleStep2Check() {
    if (state.s2Answered) return;
    const q = state.s2Questions[state.s2Index];
    const userSentence = state.s2Selected.map((it) => it.text).join("");
    const correctSentence = q.blocks.join("");
    const isCorrect = userSentence === correctSentence;

    const fb = document.getElementById("s2-feedback");
    const fbHeader = document.getElementById("s2-feedback-header");
    const compEl = document.getElementById("s2-completed-sentence");
    const pointEl = document.getElementById("s2-point");
    const nextBtn = document.getElementById("btn-s2-next");

    if (isCorrect) {
      state.s2Answered = true;
      state.s2Score++;
      renderStep2BlocksUI();
      if (window.Game) Game.breakBarrier(state.s2Index, state.s2Questions.length);

      fb.classList.remove("hidden", "is-wrong");
      fb.classList.add("is-correct");
      fbHeader.textContent = "⭕ バッチリ完成！ 正しい文の順番に並び替えられました！";
      compEl.textContent = correctSentence;
      pointEl.textContent = "💡 記述のポイント：" + q.point;
      nextBtn.textContent =
        state.s2Index + 1 < state.s2Questions.length
          ? "つぎのパズルへ ➔"
          : "Step 2 の結果を見る ➔";
    } else {
      // どこまで合っているかヒントを出してやり直せるようにする
      let matchCount = 0;
      for (let i = 0; i < q.blocks.length; i++) {
        if (state.s2Selected[i] && state.s2Selected[i].text === q.blocks[i]) {
          matchCount++;
        } else {
          break;
        }
      }
      if (window.Game) Game.missPuzzle();
      fb.classList.remove("hidden", "is-correct");
      fb.classList.add("is-wrong");
      fbHeader.textContent = `❌ 順番が少しちがうよ！（最初から ${matchCount}個目 のブロックまでは合っています）`;
      compEl.textContent = `最初のブロックは「${q.blocks[0]}」、最後のブロックは「${q.blocks[q.blocks.length - 1]}」になるよ！もう一度タップして並べ直してみよう。`;
      pointEl.textContent = "💡 ヒント：" + q.point;
      nextBtn.textContent = "お手本を見てつぎへ進む ➔";
    }
  }

  function finishStep2() {
    const total = state.s2Questions.length;
    saveUnitStepProgress(state.currentUnit.id, 2, true, `${total}問クリア`);
    if (window.Game) Game.reward(1);

    showResultScreen({
      icon: "👑",
      title: "Step 2：語句ブロック並び替え クリア！",
      scoreText: `全 ${total} 問の文構造マスター！`,
      message:
        "社会科の記述問題の「文の型（〜し、〜するため。）」が身につきました！いよいよ最後の Step 3「キーワード1行記述チャレンジ」で、自分の声や文字で説明してみましょう！",
      actions: [
        {
          label: "🎤 Step 3：キーワード1行記述へ進む ➔",
          className: "btn-primary btn-lg",
          style: "background: var(--step3-color);",
          onClick: () => startStep3(state.currentUnit)
        },
        {
          label: "もう一度パズルを練習する",
          className: "btn-secondary",
          onClick: () => startStep2(state.currentUnit)
        }
      ]
    });
  }

  // ==========================================
  // Step 3: キーワード指定 1行記述チャレンジ
  // ==========================================
  function startStep3(unit) {
    state.currentUnit = unit;
    state.currentStep = 3;
    state.s3Questions = unit.step3_descriptive.slice();
    state.s3Index = 0;
    state.s3PerfectCount = 0;
    showView("view-step3");
    if (window.Game) Game.startStep(3, unit);
    renderStep3Question();
  }

  function renderStep3Question() {
    const q = state.s3Questions[state.s3Index];
    const total = state.s3Questions.length;
    state.s3Graded = false;

    document.getElementById("s3-q-page").textContent = q.page;
    document.getElementById("s3-progress-text").textContent = `第 ${state.s3Index + 1} / ${total} 問`;
    document.getElementById("s3-progress-bar").style.width = `${((state.s3Index + 1) / total) * 100}%`;
    document.getElementById("s3-question").textContent = q.question;
    if (window.Game) Game.showEnemy(3, q, state.s3Index, total);
    document.getElementById("s3-instruction").textContent = q.instruction;

    const textarea = document.getElementById("s3-textarea");
    textarea.value = "";
    textarea.disabled = false;

    const fb = document.getElementById("s3-feedback");
    fb.classList.add("hidden");
    fb.classList.remove("is-correct", "is-partial", "is-wrong");

    updateStep3RealtimeBadges();
  }

  // 記述文の正規化（空白除去・全角英数半角化）
  function normalizeJapaneseText(raw) {
    return (raw || "")
      .replace(/\s+/g, "")
      .replace(/　/g, "");
  }

  // 文末表現チェック
  function checkEnding(normText, endingType) {
    if (!normText || normText.length < 5) return false;
    const clean = normText.replace(/[。．.!！?？]+$/, "");
    if (endingType === "reason") {
      return (
        clean.endsWith("ため") ||
        clean.endsWith("から") ||
        clean.endsWith("ので") ||
        clean.endsWith("ようにするため")
      );
    }
    // method（どんな工夫をしていますか）
    return (
      clean.endsWith("る") ||
      clean.endsWith("た") ||
      clean.endsWith("いる") ||
      clean.endsWith("工夫") ||
      clean.endsWith("ため") ||
      clean.endsWith("こと")
    );
  }

  // 入力中のリアルタイムキーワード＆文末バッジ更新
  function updateStep3RealtimeBadges() {
    const q = state.s3Questions[state.s3Index];
    if (!q) return;

    const rawText = document.getElementById("s3-textarea").value;
    const norm = normalizeJapaneseText(rawText);
    const badgeContainer = document.getElementById("s3-keyword-badges");
    badgeContainer.innerHTML = "";

    q.keywords.forEach((kwObj, idx) => {
      const matched = kwObj.variants.some((v) => norm.includes(v));
      const badge = document.createElement("div");
      badge.className = `kw-check-badge ${matched ? "matched" : ""}`;
      badge.innerHTML = `
        <span>${matched ? "✅" : "🔑"} キーワード${idx + 1}：<strong>${kwObj.label}</strong></span>
        <span class="kw-hint">（${kwObj.hint}）</span>
      `;
      badgeContainer.appendChild(badge);
    });

    // 文末チェックバッジ
    const endingMatched = checkEnding(norm, q.endingType);
    const endingLabel =
      q.endingType === "reason"
        ? "文の最後：「〜ため。」または「〜から。」"
        : "文の最後：「〜ている。」「〜つける。」など";

    const endBadge = document.createElement("div");
    endBadge.className = `kw-check-badge ${endingMatched ? "matched" : ""}`;
    endBadge.innerHTML = `
      <span>${endingMatched ? "✅" : "✍️"} ${endingLabel}</span>
    `;
    badgeContainer.appendChild(endBadge);

    if (window.Game) {
      const level = q.keywords.filter((k) => k.variants.some((v) => norm.includes(v))).length + (endingMatched ? 1 : 0);
      Game.charge(Math.min(3, level));
    }
  }

  // クライアントサイド0円採点ロジック
  function gradeStep3Answer() {
    const q = state.s3Questions[state.s3Index];
    const rawText = document.getElementById("s3-textarea").value;
    const norm = normalizeJapaneseText(rawText);

    if (!norm) {
      alert("まずはマイクで話すか、キーボードで文を入力してみよう！");
      return;
    }

    const matchedKeywords = [];
    const missingKeywords = [];

    q.keywords.forEach((kwObj) => {
      const isHit = kwObj.variants.some((v) => norm.includes(v));
      if (isHit) {
        matchedKeywords.push(kwObj);
      } else {
        missingKeywords.push(kwObj);
      }
    });

    const endingOk = checkEnding(norm, q.endingType);
    // 単語の羅列ではなく文になっているか（助詞や動詞が含まれ、一定の長さがあるか）
    const lengthOk = norm.length >= 12;

    const fb = document.getElementById("s3-feedback");
    const fbHeader = document.getElementById("s3-feedback-header");
    const adviceList = document.getElementById("s3-advice-list");
    const modelEl = document.getElementById("s3-model-answer");
    const rubricEl = document.getElementById("s3-rubric-note");
    const nextBtn = document.getElementById("btn-s3-next");

    fb.classList.remove("hidden", "is-correct", "is-partial", "is-wrong");
    adviceList.innerHTML = "";

    const isPerfect =
      missingKeywords.length === 0 && endingOk && lengthOk;

    if (isPerfect) {
      if (!state.s3Graded) {
        state.s3PerfectCount++;
        state.s3Graded = true;
        if (window.Game) Game.ultimate(state.s3Index, state.s3Questions.length);
      }
      fb.classList.add("is-correct");
      fbHeader.textContent = "🏆 100点満点！ テスト本番でもそのまま丸がもらえる素晴らしい記述です！";
      addAdviceItem(
        adviceList,
        `✅ 必須キーワード（${q.keywords.map((k) => k.label).join("・")}）がすべて正しく使えています！`
      );
      addAdviceItem(
        adviceList,
        `✅ 文の終わり方もバッチリです！`
      );
    } else if (matchedKeywords.length > 0) {
      if (window.Game) Game.partialHit();
      fb.classList.add("is-partial");
      fbHeader.textContent = "💡 おしい！ あと少し手直しすると100点満点になります！";

      matchedKeywords.forEach((kw) => {
        addAdviceItem(adviceList, `⭕ 「${kw.label}」についての言葉はしっかり書けています！`);
      });
      missingKeywords.forEach((kw) => {
        addAdviceItem(
          adviceList,
          `🔑 あと「${kw.label}」（${kw.hint}）という言葉も入れてみよう！`
        );
      });
      if (!endingOk) {
        const endMsg =
          q.endingType === "reason"
            ? "✍️ 理由を聞かれているので、文の最後を「〜ため。」または「〜から。」で終わるように直してみよう！"
            : "✍️ 文の最後を「〜つけている。」「〜している。」などの形で結んでみよう！";
        addAdviceItem(adviceList, endMsg);
      }
      if (!lengthOk) {
        addAdviceItem(
          adviceList,
          "✍️ キーワードだけでなく、「〜を防いだり、〜をよくしたりするため。」のように文でつなげてみよう！"
        );
      }
    } else {
      fb.classList.add("is-wrong");
      fbHeader.textContent = "🌱 ヒントと模範解答を見て、もう一度書いてみよう！";
      missingKeywords.forEach((kw) => {
        addAdviceItem(
          adviceList,
          `🔑 キーワード「${kw.label}」（${kw.hint}）を入れて文をつくってみよう！`
        );
      });
    }

    modelEl.textContent = q.modelAnswer;
    rubricEl.textContent = q.rubricNote;
    nextBtn.textContent =
      state.s3Index + 1 < state.s3Questions.length
        ? "つぎの記述問題へ ➔"
        : "Step 3 の結果を見る ➔";
  }

  function addAdviceItem(container, text) {
    const div = document.createElement("div");
    div.className = "advice-item";
    div.textContent = text;
    container.appendChild(div);
  }

  function finishStep3() {
    const total = state.s3Questions.length;
    saveUnitStepProgress(
      state.currentUnit.id,
      3,
      true,
      `記述 ${total}問クリア`
    );
    if (window.Game) Game.reward(2);

    showResultScreen({
      icon: "🏆",
      title: "Step 3：1行記述チャレンジ 完了！",
      scoreText: `記述全 ${total} 問にチャレンジ達成！（一発満点：${state.s3PerfectCount}問）`,
      message:
        "おめでとうございます！4択クイズ ➔ ブロック並び替え ➔ 1行記述の3ステップをすべてやり遂げました。これでテストの記述問題も自信をもって書けます！",
      actions: [
        {
          label: "📖 重要記述＆キーワードまとめを見る",
          className: "btn-primary btn-lg",
          style: "background: var(--step1-color);",
          onClick: () => {
            showView("view-home");
            openSummaryModal(state.currentUnit);
          }
        },
        {
          label: "もう一度 Step 3 を練習する",
          className: "btn-secondary",
          onClick: () => startStep3(state.currentUnit)
        },
        {
          label: "単元トップ画面へもどる",
          className: "btn-secondary",
          onClick: () => showView("view-home")
        }
      ]
    });
  }

  // ==========================================
  // 共通結果画面の描画
  // ==========================================
  function showResultScreen(opts) {
    showView("view-result");
    document.getElementById("result-icon").textContent = opts.icon || "🎉";
    document.getElementById("result-title").textContent = opts.title || "完了！";
    document.getElementById("result-score-text").textContent = opts.scoreText || "";
    document.getElementById("result-message").textContent = opts.message || "";

    const actionsEl = document.getElementById("result-actions");
    actionsEl.innerHTML = "";
    (opts.actions || []).forEach((act) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = act.className || "btn-primary";
      if (act.style) btn.style.cssText = act.style;
      btn.textContent = act.label;
      btn.addEventListener("click", act.onClick);
      actionsEl.appendChild(btn);
    });
  }

  // ==========================================
  // 重要記述＆キーワードまとめモーダル
  // ==========================================
  function openSummaryModal(unit) {
    const modal = document.getElementById("modal-summary");
    const titleEl = document.getElementById("modal-summary-title");
    const bodyEl = document.getElementById("modal-summary-body");

    titleEl.textContent = `📖 ${unit.title}（${unit.pages}）重要まとめ`;
    bodyEl.innerHTML = "";

    unit.step3_descriptive.forEach((d, idx) => {
      const item = document.createElement("div");
      item.className = "summary-item";
      const kwBadges = d.keywords
        .map((k) => `<span class="kw-chip">🔑 ${k.label}</span>`)
        .join(" ");

      item.innerHTML = `
        <div class="summary-q">【記述 ${idx + 1}】${d.question} <span class="page-badge">${d.page}</span></div>
        <div style="margin-bottom: 8px; display:flex; gap:6px; flex-wrap:wrap;">${kwBadges}</div>
        <div class="summary-a-row">
          <span class="summary-a">✍️ ${d.modelAnswer}</span>
          <button type="button" class="btn-speak-sm" data-speak="${d.modelAnswer}">🔊 読み上げ</button>
        </div>
      `;
      bodyEl.appendChild(item);
    });

    modal.classList.remove("hidden");
  }

  // ==========================================
  // イベントリスナー登録
  // ==========================================
  function setupEventListeners() {
    // トップへ戻る
    document.getElementById("btn-home").addEventListener("click", () => {
      showView("view-home");
    });
    document.getElementById("btn-back-unit").addEventListener("click", () => {
      showView("view-home");
    });

    // 記録リセット
    document.getElementById("btn-reset-progress").addEventListener("click", () => {
      if (confirm("これまでのクリア王冠の記録をリセットしますか？")) {
        localStorage.removeItem(STORAGE_KEY);
        renderHomeUnits();
      }
    });

    // ホーム画面のイベント委譲
    document.getElementById("units-container").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-action");
      const unitId = btn.getAttribute("data-unit");
      const unit = UNITS.find((u) => u.id === unitId);
      if (!unit) return;

      if (action === "start-step") {
        const step = Number(btn.getAttribute("data-step"));
        if (step === 1) startStep1(unit);
        else if (step === 2) startStep2(unit);
        else if (step === 3) startStep3(unit);
      } else if (action === "open-summary") {
        openSummaryModal(unit);
      }
    });

    // ナビバーでのステップ切り替え
    document.querySelectorAll(".step-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        if (!state.currentUnit) return;
        const step = Number(tab.getAttribute("data-step"));
        if (step === 1) startStep1(state.currentUnit);
        else if (step === 2) startStep2(state.currentUnit);
        else if (step === 3) startStep3(state.currentUnit);
      });
    });

    // Step 1 ボタン
    document.getElementById("btn-s1-speak").addEventListener("click", () => {
      const q = state.s1Questions[state.s1Index];
      if (q) speakText(`正解は、${q.answer}、です。${q.explanation}`);
    });

    document.getElementById("btn-s1-next").addEventListener("click", () => {
      stopSpeaking();
      if (state.s1Index + 1 < state.s1Questions.length) {
        state.s1Index++;
        renderStep1Question();
      } else {
        finishStep1();
      }
    });

    // Step 2 ボタン
    document.getElementById("btn-s2-undo").addEventListener("click", () => {
      if (state.s2Answered || state.s2Selected.length === 0) return;
      const last = state.s2Selected.pop();
      if (last) last.used = false;
      renderStep2BlocksUI();
    });

    document.getElementById("btn-s2-clear").addEventListener("click", () => {
      if (state.s2Answered) return;
      state.s2Pool.forEach((it) => (it.used = false));
      state.s2Selected = [];
      renderStep2BlocksUI();
    });

    document.getElementById("btn-s2-check").addEventListener("click", handleStep2Check);

    document.getElementById("btn-s2-speak").addEventListener("click", () => {
      const q = state.s2Questions[state.s2Index];
      if (q) speakText(q.blocks.join(""));
    });

    document.getElementById("btn-s2-next").addEventListener("click", () => {
      stopSpeaking();
      if (state.s2Index + 1 < state.s2Questions.length) {
        state.s2Index++;
        renderStep2Question();
      } else {
        finishStep2();
      }
    });

    // Step 3 ボタン＆入力イベント
    const s3Textarea = document.getElementById("s3-textarea");
    s3Textarea.addEventListener("input", updateStep3RealtimeBadges);

    document.getElementById("btn-s3-mic").addEventListener("click", toggleMic);

    document.getElementById("btn-s3-clear").addEventListener("click", () => {
      s3Textarea.value = "";
      updateStep3RealtimeBadges();
      s3Textarea.focus();
    });

    document.getElementById("btn-s3-grade").addEventListener("click", gradeStep3Answer);

    document.getElementById("btn-s3-speak").addEventListener("click", () => {
      const q = state.s3Questions[state.s3Index];
      if (q) speakText(q.modelAnswer);
    });

    document.getElementById("btn-s3-retry").addEventListener("click", () => {
      document.getElementById("s3-feedback").classList.add("hidden");
      s3Textarea.focus();
    });

    document.getElementById("btn-s3-next").addEventListener("click", () => {
      stopSpeaking();
      if (state.s3Index + 1 < state.s3Questions.length) {
        state.s3Index++;
        renderStep3Question();
      } else {
        finishStep3();
      }
    });

    // まとめモーダル
    document.getElementById("btn-close-modal").addEventListener("click", () => {
      stopSpeaking();
      document.getElementById("modal-summary").classList.add("hidden");
    });

    document.getElementById("modal-summary").addEventListener("click", (e) => {
      if (e.target.id === "modal-summary") {
        stopSpeaking();
        document.getElementById("modal-summary").classList.add("hidden");
      }
      const speakBtn = e.target.closest("button[data-speak]");
      if (speakBtn) {
        speakText(speakBtn.getAttribute("data-speak"));
      }
    });
  }

  // 初期化
  document.addEventListener("DOMContentLoaded", () => {
    if (window.Game) Game.init();
    initSpeechRecognition();
    setupEventListeners();
    renderHomeUnits();
  });
})();
