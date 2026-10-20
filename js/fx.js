/**
 * 言霊モンスターズ - Canvasビジュアルエフェクト ＆ Web Audio効果音エンジン
 * 完全無料・外部ファイル不要（Canvas 2D + Web Audio API シンセサイザー）
 */

(function (global) {
  "use strict";

  class FxEngine {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.particles = [];
      this.floatingTexts = [];
      this.lightnings = [];
      this.beams = [];
      this.slashes = [];

      // Step 3 詠唱用の常時回転魔法陣ステート
      this.magicCircle = {
        active: false,
        powerLevel: 0, // 0 ~ 3 (キーワード1, キーワード2, 文末OK)
        angle: 0
      };

      this.audioCtx = null;
      this.muted = false;
      this.shakeTimer = null;
    }

    init(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.resize();
      window.addEventListener("resize", () => this.resize());
      this.loop();
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    // ==========================================
    // Web Audio API サウンド合成（0円・ファイル不要）
    // ==========================================
    ensureAudio() {
      if (this.muted) return null;
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    }

    toggleMute() {
      this.muted = !this.muted;
      return this.muted;
    }

    playTone(freq, type, duration, startTimeOffset = 0, vol = 0.18, slideTo = null) {
      const ctx = this.ensureAudio();
      if (!ctx) return;
      const now = ctx.currentTime + startTimeOffset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type || "triangle";
      osc.frequency.setValueAtTime(freq, now);
      if (slideTo) {
        osc.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
      }
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    }

    playSlashSE(combo = 1) {
      const base = Math.min(880, 440 + combo * 45);
      this.playTone(base, "sawtooth", 0.12, 0, 0.2, base * 1.6);
      this.playTone(base * 1.5, "square", 0.18, 0.06, 0.18, base * 2.2);
    }

    playChargeSE(level = 1) {
      const freqs = [523.25, 659.25, 783.99, 1046.5];
      const f = freqs[Math.min(level, 3)];
      this.playTone(f, "sine", 0.22, 0, 0.22, f * 1.25);
      this.playTone(f * 1.5, "triangle", 0.25, 0.05, 0.15);
    }

    playLightningSE() {
      // 雷撃バリア破壊音
      this.playTone(920, "sawtooth", 0.15, 0, 0.25, 120);
      this.playTone(680, "square", 0.25, 0.08, 0.25, 80);
      this.playTone(1046, "triangle", 0.3, 0.15, 0.22, 1318);
      this.playTone(1567, "sine", 0.35, 0.22, 0.2);
    }

    playUltimateSE() {
      // 超必殺技・言霊アルティメットレーザー音
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98];
      notes.forEach((n, i) => {
        this.playTone(n, "sawtooth", 0.22, i * 0.055, 0.2);
      });
      this.playTone(220, "sawtooth", 0.7, 0.25, 0.28, 880);
      this.playTone(1567.98, "square", 0.65, 0.32, 0.22, 2093);
    }

    playWrongSE() {
      this.playTone(220, "sawtooth", 0.18, 0, 0.18, 160);
      this.playTone(175, "sawtooth", 0.25, 0.14, 0.18, 130);
    }

    playFanfareSE() {
      const melody = [
        { f: 523.25, t: 0, d: 0.12 },
        { f: 659.25, t: 0.12, d: 0.12 },
        { f: 783.99, t: 0.24, d: 0.12 },
        { f: 1046.5, t: 0.36, d: 0.4 }
      ];
      melody.forEach((m) => this.playTone(m.f, "triangle", m.d, m.t, 0.22));
    }

    // ==========================================
    // 画面揺れ演出
    // ==========================================
    shake(duration = 320, intensity = 9) {
      const el = document.getElementById("game-stage-card") || document.body;
      el.classList.remove("fx-shake");
      void el.offsetWidth; // reflow
      el.style.setProperty("--shake-px", `${intensity}px`);
      el.classList.add("fx-shake");
      if (this.shakeTimer) clearTimeout(this.shakeTimer);
      this.shakeTimer = setTimeout(() => {
        el.classList.remove("fx-shake");
      }, duration);
    }

    // ==========================================
    // ダメージ数字＆テキストポップアップ
    // ==========================================
    spawnFloatingText(text, x, y, color = "#fde047", scale = 1.0, subText = "") {
      if (!this.canvas) return;
      const cx = x || this.canvas.width * 0.68;
      const cy = y || this.canvas.height * 0.26;
      this.floatingTexts.push({
        text,
        subText,
        x: cx + (Math.random() - 0.5) * 40,
        y: cy,
        vy: -2.8,
        scale,
        color,
        alpha: 1,
        life: 1,
        decay: 0.018
      });
    }

    // ==========================================
    // 斬撃エフェクト（Step 1 正解時）
    // ==========================================
    triggerSlash(x, y, combo = 1) {
      if (!this.canvas) return;
      const cx = x || this.canvas.width * 0.68;
      const cy = y || this.canvas.height * 0.25;

      this.playSlashSE(combo);
      this.shake(260, Math.min(14, 6 + combo * 2));

      this.slashes.push({
        x: cx,
        y: cy,
        angle: -Math.PI / 4 + (Math.random() - 0.5) * 0.5,
        length: 190,
        life: 1,
        color: combo >= 3 ? "#fde047" : "#38bdf8"
      });

      this.burstSparks(cx, cy, 35 + combo * 8, combo >= 3 ? "#fde047" : "#38bdf8");
    }

    // ==========================================
    // 稲妻エフェクト（Step 2 並び替えバリア破壊時）
    // ==========================================
    triggerLightning(x, y) {
      if (!this.canvas) return;
      const targetX = x || this.canvas.width * 0.68;
      const targetY = y || this.canvas.height * 0.28;

      this.playLightningSE();
      this.shake(450, 14);

      for (let b = 0; b < 3; b++) {
        const points = [];
        let curX = targetX + (Math.random() - 0.5) * 120;
        let curY = 0;
        points.push({ x: curX, y: curY });
        const steps = 10;
        for (let i = 1; i <= steps; i++) {
          curY = (targetY / steps) * i;
          curX += (Math.random() - 0.5) * 65;
          if (i === steps) curX = targetX;
          points.push({ x: curX, y: curY });
        }
        this.lightnings.push({
          points,
          alpha: 1,
          width: b === 0 ? 7 : 3,
          color: b === 0 ? "#fde047" : "#67e8f9"
        });
      }

      this.burstSparks(targetX, targetY, 65, "#2dd4bf");
    }

    // ==========================================
    // 超必殺技・言霊アルティメットレーザー（Step 3 満点時）
    // ==========================================
    triggerUltimateBeam(sx, sy, ex, ey) {
      if (!this.canvas) return;
      this.playUltimateSE();
      this.shake(700, 18);

      const startX = sx != null ? sx : this.canvas.width * 0.25;
      const startY = sy != null ? sy : this.canvas.height * 0.28;
      const endX = ex != null ? ex : this.canvas.width * 0.75;
      const endY = ey != null ? ey : this.canvas.height * 0.25;

      this.beams.push({
        x1: startX,
        y1: startY,
        x2: endX,
        y2: endY,
        life: 1.0
      });

      this.burstConfetti(90);
      this.burstSparks(endX, endY, 90, "#f97316");
    }

    // ==========================================
    // 魔法陣の制御（Step 3 リアルタイム連動）
    // ==========================================
    setMagicCircle(active, powerLevel = 0) {
      const prevLevel = this.magicCircle.powerLevel;
      this.magicCircle.active = active;
      this.magicCircle.powerLevel = powerLevel;

      if (active && powerLevel > prevLevel) {
        this.playChargeSE(powerLevel);
        if (this.canvas) {
          const mc = this.magicCircle;
          this.burstSparks(mc.cx != null ? mc.cx : this.canvas.width * 0.5, mc.cy != null ? mc.cy : this.canvas.height * 0.58, 22, "#fb923c");
        }
      }
    }

    // ==========================================
    // パーティクル・紙吹雪
    // ==========================================
    burstSparks(x, y, count = 40, mainColor = "#fde047") {
      if (!this.canvas) return;
      const palette = [mainColor, "#ffffff", "#fde047", "#38bdf8", "#fb7185"];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 11 + 3;
        this.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 6 + 3,
          color: palette[Math.floor(Math.random() * palette.length)],
          shape: Math.random() > 0.4 ? "star" : "circle",
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.25,
          life: 1,
          decay: Math.random() * 0.022 + 0.015
        });
      }
    }

    burstConfetti(count = 80) {
      if (!this.canvas) return;
      const colors = ["#f43f5e", "#facc15", "#22c55e", "#38bdf8", "#a855f7", "#fb923c"];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: -10 - Math.random() * 80,
          vx: (Math.random() - 0.5) * 5,
          vy: Math.random() * 5 + 3,
          size: Math.random() * 9 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: "rect",
          rot: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.2,
          life: 1,
          decay: 0.008
        });
      }
    }

    // ==========================================
    // メイン描画ループ
    // ==========================================
    loop() {
      if (this.ctx && this.canvas) {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 1. 回転魔法陣（Step 3 詠唱中）
        if (this.magicCircle.active) {
          this.drawMagicCircle(ctx);
        }

        // 2. 必殺技レーザービーム
        for (let i = this.beams.length - 1; i >= 0; i--) {
          const b = this.beams[i];
          ctx.save();
          ctx.globalAlpha = b.life;
          ctx.strokeStyle = "#fde047";
          ctx.lineWidth = 48 * b.life;
          ctx.shadowColor = "#f97316";
          ctx.shadowBlur = 35;
          ctx.beginPath();
          ctx.moveTo(b.x1, b.y1);
          ctx.lineTo(b.x2, b.y2);
          ctx.stroke();

          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 18 * b.life;
          ctx.beginPath();
          ctx.moveTo(b.x1, b.y1);
          ctx.lineTo(b.x2, b.y2);
          ctx.stroke();
          ctx.restore();

          b.life -= 0.03;
          if (b.life <= 0) this.beams.splice(i, 1);
        }

        // 3. 稲妻エフェクト
        for (let i = this.lightnings.length - 1; i >= 0; i--) {
          const l = this.lightnings[i];
          ctx.save();
          ctx.globalAlpha = l.alpha;
          ctx.strokeStyle = l.color;
          ctx.lineWidth = l.width;
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 20;
          ctx.beginPath();
          l.points.forEach((pt, idx) => {
            if (idx === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.stroke();
          ctx.restore();

          l.alpha -= 0.045;
          if (l.alpha <= 0) this.lightnings.splice(i, 1);
        }

        // 4. 斬撃エフェクト
        for (let i = this.slashes.length - 1; i >= 0; i--) {
          const s = this.slashes[i];
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.angle);
          ctx.globalAlpha = s.life;
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 10 * s.life;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 18;
          ctx.beginPath();
          ctx.moveTo(-s.length / 2, 0);
          ctx.lineTo(s.length / 2, 0);
          ctx.stroke();
          ctx.restore();

          s.life -= 0.07;
          if (s.life <= 0) this.slashes.splice(i, 1);
        }

        // 5. パーティクル
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.16; // 重力
          p.rot += p.vRot;
          p.life -= p.decay;

          if (p.life <= 0) {
            this.particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;

          if (p.shape === "rect") {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          } else if (p.shape === "star") {
            this.drawStar(ctx, 0, 0, 5, p.size, p.size * 0.45);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // 6. ダメージ数字＆フローティングテキスト
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
          const ft = this.floatingTexts[i];
          ft.y += ft.vy;
          ft.life -= ft.decay;
          if (ft.life <= 0) {
            this.floatingTexts.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, ft.life);
          ctx.font = `900 ${Math.round(34 * ft.scale)}px "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`;
          ctx.textAlign = "center";
          ctx.lineWidth = 6;
          ctx.strokeStyle = "#0f172a";
          ctx.strokeText(ft.text, ft.x, ft.y);
          ctx.fillStyle = ft.color;
          ctx.fillText(ft.text, ft.x, ft.y);

          if (ft.subText) {
            ctx.font = `800 16px "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif`;
            ctx.strokeText(ft.subText, ft.x, ft.y - 34);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(ft.subText, ft.x, ft.y - 34);
          }
          ctx.restore();
        }
      }
      requestAnimationFrame(() => this.loop());
    }

    drawMagicCircle(ctx) {
      const lvl = this.magicCircle.powerLevel;
      this.magicCircle.angle += 0.012 + lvl * 0.015;

      const mc = this.magicCircle;
      const cx = mc.cx != null ? mc.cx : this.canvas.width * 0.5;
      const cy = mc.cy != null ? mc.cy : this.canvas.height * 0.55;
      const baseRadius = mc.r != null ? mc.r : Math.min(this.canvas.width, this.canvas.height) * 0.28;

      const colors = ["#64748b", "#38bdf8", "#facc15", "#f97316"];
      const strokeColor = colors[Math.min(lvl, 3)];

      ctx.save();
      ctx.translate(cx, cy);
      ctx.globalAlpha = 0.16 + lvl * 0.08;
      ctx.strokeStyle = strokeColor;
      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = 15 + lvl * 10;

      // 外周リング
      ctx.rotate(this.magicCircle.angle);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // 六芒星（2つの正三角形）
      for (let t = 0; t < 2; t++) {
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const a = (i * Math.PI * 2) / 3 + (t * Math.PI) / 3;
          const x = Math.cos(a) * baseRadius * 0.88;
          const y = Math.sin(a) * baseRadius * 0.88;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // キーワード達成度に応じた内周リング
      if (lvl >= 1) {
        ctx.rotate(-this.magicCircle.angle * 2);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * 0.58, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (lvl >= 3) {
        ctx.strokeStyle = "#fde047";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, baseRadius * 1.12, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    }

    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    }
  }

  global.Fx = new FxEngine();
})(window);
