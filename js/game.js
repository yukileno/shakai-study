/**
 * 言霊モンスターズ - バトル演出・ガチャ・図鑑（app.js から呼ばれる）
 * 完全無料・localStorage のみ使用
 */
(function (global) {
  "use strict";

  const KEY = "kotodama_game_v1";
  const img = (id) => `css/img/${id}.webp`;
  const RARITY_WEIGHT = { SR: 65, SSR: 27, UR: 7, LEGEND: 1 };

  let sv = load();
  const st = { hp: 100, combo: 0, enemyHp: 100, step: 1, bossName: "", bossIcon: "" };

  function load() {
    const def = { owned: ["m01"], partner: "m01", tickets: 1, coins: 0 };
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? Object.assign(def, JSON.parse(raw)) : def;
    } catch (e) {
      return def;
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(sv));
    } catch (e) {
      /* ignore */
    }
    renderChips();
  }
  const $ = (id) => document.getElementById(id);
  const monster = (id) => MONSTERS.find((m) => m.id === id);

  function renderChips() {
    if ($("chip-tickets")) $("chip-tickets").textContent = sv.tickets;
    if ($("chip-coins")) $("chip-coins").textContent = sv.coins;
    if ($("chip-zukan")) $("chip-zukan").textContent = `${sv.owned.length}/${MONSTERS.length}`;
  }

  function enemyCenter() {
    const el = $("bs-enemy");
    if (!el) return { x: window.innerWidth * 0.7, y: 200 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // 横長（左:問題／右:バトル）レイアウトのときは魔法陣をバトル画面の中央に置く
  function placeMagicCircle() {
    const fx = global.Fx;
    if (!fx) return;
    const stage = $("battle-stage");
    if (stage && !stage.classList.contains("hidden") && window.matchMedia("(min-width: 1000px)").matches) {
      const r = stage.getBoundingClientRect();
      fx.magicCircle.cx = r.left + r.width / 2;
      fx.magicCircle.cy = r.top + r.height * 0.55;
      fx.magicCircle.r = Math.min(r.width, r.height) * 0.42;
    } else {
      fx.magicCircle.cx = fx.magicCircle.cy = fx.magicCircle.r = null;
    }
  }

  function setHeaderVar() {
    const h = document.querySelector(".app-header");
    if (h) document.documentElement.style.setProperty("--hdr", h.offsetHeight + "px");
  }

  function setBar(id, pct) {
    const el = $(id);
    if (el) el.style.width = Math.max(0, Math.min(100, pct)) + "%";
  }

  function renderPartner() {
    const m = monster(sv.partner) || MONSTERS[0];
    $("bs-partner").src = img(m.id);
    if ($("hero-partner")) $("hero-partner").src = img(m.id);
    $("bs-partner-name").textContent = m.name;
    $("bs-partner-frame").style.setProperty("--glow", m.color);
  }

  // ==========================================
  // BGM（Web Audio のシンセで自動演奏・ファイル不要）
  // ==========================================
  const BGM = {
    timer: null,
    step: 0,
    patterns: {
      1: { bpm: 150, notes: [262, 330, 392, 330, 294, 370, 440, 370] },
      2: { bpm: 170, notes: [220, 262, 330, 262, 247, 294, 370, 294] },
      3: { bpm: 190, notes: [196, 247, 294, 392, 175, 233, 294, 349] }
    },
    start(stage) {
      this.stop();
      const pat = this.patterns[stage] || this.patterns[1];
      const ms = 60000 / pat.bpm / 2;
      this.step = 0;
      this.timer = setInterval(() => {
        if (!global.Fx || global.Fx.muted) return;
        const n = pat.notes[this.step % pat.notes.length];
        global.Fx.playTone(n, "triangle", 0.2, 0, 0.035);
        if (this.step % 4 === 0) global.Fx.playTone(n / 2, "sine", 0.35, 0, 0.05);
        this.step++;
      }, ms);
    },
    stop() {
      if (this.timer) clearInterval(this.timer);
      this.timer = null;
    }
  };

  const Game = {
    init() {
      if (global.Fx) global.Fx.init("fx-canvas");
      setHeaderVar();
      window.addEventListener("resize", setHeaderVar);
      renderChips();
      renderPartner();
      $("btn-gacha").addEventListener("click", openGacha);
      $("btn-zukan").addEventListener("click", openZukan);
      $("btn-mute").addEventListener("click", () => {
        const muted = global.Fx.toggleMute();
        $("btn-mute").textContent = muted ? "🔇" : "🔊";
      });
      $("modal-game").addEventListener("click", (e) => {
        if (e.target.id === "modal-game" || e.target.closest("[data-close]")) closeModal();
      });
    },

    // 画面切り替え時
    onView(viewId) {
      const stage = $("battle-stage");
      setTimeout(setHeaderVar, 0);
      const isStudy = /^view-step[123]$/.test(viewId);
      stage.classList.toggle("hidden", !isStudy);
      document.body.classList.toggle("in-battle", isStudy);
      document.body.classList.toggle("step3-active", viewId === "view-step3");
      if (isStudy) BGM.start(Number(viewId.slice(-1)));
      else BGM.stop();
      if (global.Fx && viewId !== "view-step3") global.Fx.setMagicCircle(false, 0);
      if (viewId === "view-step3" && global.Fx) {
        placeMagicCircle();
        global.Fx.setMagicCircle(true, 0);
      }
    },

    // ステップ開始（HPリセット）
    startStep(step, unit) {
      st.step = step;
      st.hp = 100;
      st.combo = 0;
      st.bossName = unit.bossName;
      st.bossIcon = unit.bossIcon;
      setBar("bs-partner-hp", 100);
      renderPartner();
      $("bs-wave").textContent = step === 1 ? "WAVE 1 ｜ 通常攻撃" : step === 2 ? "WAVE 2 ｜ バリア破壊" : "WAVE 3 ｜ 言霊詠唱";
      this.renderCombo();
    },

    // 問題ごとの敵表示
    showEnemy(step, q, doneIndex, total) {
      const art = $("bs-enemy");
      art.classList.remove("defeated", "hit");
      const bossMode = step !== 1;
      if (bossMode) {
        const idMatch = /^([pd])(\d+)$/.exec((q && q.id) || "");
        const midNum = idMatch ? (idMatch[1] === "p" ? "f" : "g") + idMatch[2].padStart(2, "0") : "boss";
        art.innerHTML = `<img src="${img(midNum)}" alt="${st.bossName}">`;
        art.querySelector("img").addEventListener("error", () => {
          art.innerHTML = `<img src="${img("boss")}" alt="${st.bossName}">`;
        });
        const bossLabel = q && q.enemyName ? q.enemyName : st.bossName;
        $("bs-enemy-name").textContent = `${bossLabel}${step === 2 && q && q.category ? " ／ " + q.category : ""}`;
        st.enemyHp = 100 - (doneIndex / total) * 100;
        art.classList.toggle("barrier", step === 2);
      } else {
        const num = String((q.id || "").replace(/\D/g, "")).padStart(2, "0");
        const fallback = `<span class="enemy-emoji">${q.enemyIcon || "👾"}</span>`;
        art.innerHTML = `<img src="css/img/e${num}.webp" alt="${q.enemyName || ""}">`;
        art.querySelector("img").addEventListener("error", () => {
          art.innerHTML = fallback;
        });
        $("bs-enemy-name").textContent = q.enemyName || "てきモンスター";
        st.enemyHp = 100;
        art.classList.remove("barrier");
      }
      setBar("bs-enemy-hp", st.enemyHp);
    },

    renderCombo() {
      const c = $("bs-combo");
      c.textContent = st.combo >= 2 ? `🔥 ${st.combo} COMBO!` : "";
      c.classList.toggle("on", st.combo >= 2);
    },

    // Step1 正解
    hitNormal() {
      st.combo++;
      const mult = 1 + (st.combo - 1) * 0.3;
      const dmg = Math.round(120 * mult);
      const p = enemyCenter();
      global.Fx.triggerSlash(p.x, p.y, st.combo);
      global.Fx.spawnFloatingText(String(dmg), p.x, p.y - 30, st.combo >= 3 ? "#fde047" : "#ffffff", 1 + st.combo * 0.1, st.combo >= 2 ? `${st.combo}コンボ!` : "");
      $("bs-enemy").classList.add("hit");
      setTimeout(() => {
        $("bs-enemy").classList.add("defeated");
        setBar("bs-enemy-hp", 0);
      }, 280);
      sv.coins += 10 + st.combo * 2;
      save();
      this.renderCombo();
    },

    // Step1 不正解
    missNormal() {
      st.combo = 0;
      st.hp = Math.max(15, st.hp - 20);
      setBar("bs-partner-hp", st.hp);
      global.Fx.playWrongSE();
      global.Fx.shake(300, 7);
      const r = $("bs-partner").getBoundingClientRect();
      global.Fx.spawnFloatingText("いたっ!", r.left + r.width / 2, r.top, "#fb7185", 1);
      this.renderCombo();
    },

    // Step2 正解：バリア粉砕
    breakBarrier(doneIndex, total) {
      const p = enemyCenter();
      global.Fx.triggerLightning(p.x, p.y);
      global.Fx.spawnFloatingText("BARRIER BREAK!!", p.x, p.y - 40, "#67e8f9", 1.3);
      global.Fx.spawnFloatingText(String(2500), p.x, p.y + 10, "#fde047", 1.2);
      $("bs-enemy").classList.add("hit");
      $("bs-enemy").classList.remove("barrier");
      st.enemyHp = 100 - ((doneIndex + 1) / total) * 100;
      setBar("bs-enemy-hp", st.enemyHp);
      sv.coins += 20;
      save();
    },

    missPuzzle() {
      st.hp = Math.max(15, st.hp - 10);
      setBar("bs-partner-hp", st.hp);
      global.Fx.playWrongSE();
      global.Fx.shake(250, 6);
    },

    // Step3 リアルタイム詠唱パワー（0〜3）
    charge(level) {
      placeMagicCircle();
      if (global.Fx) global.Fx.setMagicCircle(true, level);
      $("bs-charge").style.width = (level / 3) * 100 + "%";
      $("bs-charge-label").textContent = level >= 3 ? "詠唱 100%！" : `詠唱 ${Math.round((level / 3) * 100)}%`;
    },

    // Step3 満点：超必殺技
    ultimate(doneIndex, total) {
      const p = enemyCenter();
      const pr = $("bs-partner").getBoundingClientRect();
      global.Fx.triggerUltimateBeam(pr.left + pr.width / 2, pr.top + pr.height / 2, p.x, p.y);
      global.Fx.spawnFloatingText("9999", p.x, p.y, "#fde047", 2.0, "ULTIMATE!");
      $("bs-enemy").classList.add("hit");
      st.enemyHp = 100 - ((doneIndex + 1) / total) * 100;
      setBar("bs-enemy-hp", st.enemyHp);
      sv.coins += 50;
      sv.tickets += 1;
      save();
    },

    partialHit() {
      const p = enemyCenter();
      global.Fx.triggerSlash(p.x, p.y, 1);
      global.Fx.spawnFloatingText("1200", p.x, p.y, "#ffffff", 1);
      sv.coins += 10;
      save();
    },

    // ステップクリア報酬
    reward(tickets) {
      sv.tickets += tickets;
      save();
      global.Fx.playFanfareSE();
      global.Fx.burstConfetti(100);
    }
  };

  // ==========================================
  // ガチャ
  // ==========================================
  function openModal(html) {
    $("modal-game-body").innerHTML = html;
    $("modal-game").classList.remove("hidden");
  }
  function closeModal() {
    $("modal-game").classList.add("hidden");
  }

  function pickMonster() {
    const rarities = Object.keys(RARITY_WEIGHT);
    const total = rarities.reduce((s, r) => s + RARITY_WEIGHT[r], 0);
    let roll = Math.random() * total;
    let rarity = rarities[0];
    for (const r of rarities) {
      roll -= RARITY_WEIGHT[r];
      if (roll < 0) {
        rarity = r;
        break;
      }
    }
    const pool = MONSTERS.filter((m) => m.rarity === rarity);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function openGacha() {
    const canTicket = sv.tickets >= 1;
    const canCoin = sv.coins >= 100;
    openModal(`
      <h3 class="mg-title">🎰 言霊ガチャ</h3>
      <p class="mg-lead">チケット🎫 ${sv.tickets}まい ／ コイン🪙 ${sv.coins}</p>
      <div id="gacha-stage" class="gacha-stage"><div class="gacha-orb">?</div></div>
      <div class="mg-actions">
        <button class="btn-primary btn-lg" id="btn-gacha-roll" ${canTicket || canCoin ? "" : "disabled"}>
          ${canTicket ? "🎫 チケットで回す" : canCoin ? "🪙 100コインで回す" : "チケットかコインが足りないよ"}
        </button>
        <button class="btn-secondary" data-close>閉じる</button>
      </div>
      <p class="mg-note">クイズで正解するとコイン、ステップクリアやアルティメットでチケットがもらえるよ！</p>
    `);
    const roll = $("btn-gacha-roll");
    if (roll) roll.addEventListener("click", rollGacha);
  }

  function rollGacha() {
    if (sv.tickets >= 1) sv.tickets -= 1;
    else if (sv.coins >= 100) sv.coins -= 100;
    else return;
    const m = pickMonster();
    const isNew = !sv.owned.includes(m.id);
    if (isNew) sv.owned.push(m.id);
    else sv.coins += 30; // かぶりはコインに変換
    save();
    const stage = $("gacha-stage");
    stage.innerHTML = `<div class="gacha-orb spin">?</div>`;
    global.Fx.playChargeSE(2);
    setTimeout(() => {
      global.Fx.playFanfareSE();
      global.Fx.burstConfetti(m.rarity === "LEGEND" || m.rarity === "UR" ? 160 : 70);
      stage.innerHTML = `
        <div class="gacha-result rarity-${m.rarity}" style="--glow:${m.color}">
          <div class="rarity-tag">${m.rarity}</div>
          <img src="${img(m.id)}" alt="${m.name}">
          <div class="gr-name">${m.name}</div>
          <div class="gr-title">${m.title}</div>
          <div class="gr-lore">${m.lore}</div>
          <div class="gr-new">${isNew ? "🆕 NEW！ 図鑑に登録したよ" : "かぶり！ コイン🪙30に変えたよ"}</div>
        </div>`;
      openGachaButtons();
    }, 1100);
  }

  function openGachaButtons() {
    const btn = $("btn-gacha-roll");
    if (!btn) return;
    const canTicket = sv.tickets >= 1;
    const canCoin = sv.coins >= 100;
    btn.disabled = !(canTicket || canCoin);
    btn.textContent = canTicket ? "🎫 もう一回回す" : canCoin ? "🪙 100コインでもう一回" : "チケットかコインが足りないよ";
    const body = $("modal-game-body").querySelector(".mg-lead");
    if (body) body.textContent = `チケット🎫 ${sv.tickets}まい ／ コイン🪙 ${sv.coins}`;
  }

  // ==========================================
  // 図鑑
  // ==========================================
  function openZukan() {
    const cards = MONSTERS.map((m) => {
      const own = sv.owned.includes(m.id);
      const isPartner = sv.partner === m.id;
      return `
        <div class="zk-card ${own ? "owned" : "locked"} rarity-${m.rarity}" style="--glow:${m.color}">
          <div class="rarity-tag">${m.rarity}</div>
          <img src="${img(m.id)}" alt="${own ? m.name : "？？？"}">
          <div class="zk-name">${own ? m.name : "？？？？？"}</div>
          ${
            own
              ? `<div class="zk-title">${m.title}</div>
                 <div class="zk-lore">${m.lore}</div>
                 <button class="btn-secondary zk-btn" data-partner="${m.id}" ${isPartner ? "disabled" : ""}>${isPartner ? "✨ 相棒中" : "相棒にする"}</button>`
              : `<div class="zk-lore">ガチャで見つけよう！</div>`
          }
        </div>`;
    }).join("");
    openModal(`
      <h3 class="mg-title">📚 言霊モンスター図鑑 <span class="mg-count">${sv.owned.length} / ${MONSTERS.length}</span></h3>
      <div class="zk-grid">${cards}</div>
      <div class="mg-actions"><button class="btn-secondary" data-close>閉じる</button></div>
    `);
    $("modal-game-body").querySelectorAll("[data-partner]").forEach((b) =>
      b.addEventListener("click", () => {
        sv.partner = b.getAttribute("data-partner");
        save();
        renderPartner();
        openZukan();
      })
    );
  }

  global.Game = Game;
})(window);
