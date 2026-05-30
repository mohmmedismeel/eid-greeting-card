/**
 * Eid Al-Adha Greeting Card Application
 * Advanced animations and interactive features
 */

/**
 * Create the sheep (SVG) with the specified size.
 *
 * Note: the sheep animation is driven by CSS animations inside runSheep().
 */
function makeSheep(uid, px){
  return `<svg id="sh_${uid}" width="${px}" viewBox="-15 -5 330 180" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;display:block;transform-origin:left bottom">

  <g class="leg-c" style="transform-box:fill-box;transform-origin:50% 0%">
    <ellipse cx="79" cy="116" rx="8" ry="12" fill="#a89468"/>
    <rect x="72" y="106" rx="7" width="14" height="28" fill="#b4a888"/>
    <rect x="73" y="130" rx="5" width="12" height="14" fill="#9a8e6c" transform="rotate(5,79,137)"/>
    <ellipse cx="79" cy="147" rx="9" ry="5" fill="#2a1a0a"/>
  </g>

  <g class="leg-b" style="transform-box:fill-box;transform-origin:50% 0%">
    <ellipse cx="195" cy="116" rx="8" ry="12" fill="#a89468"/>
    <rect x="188" y="106" rx="7" width="14" height="28" fill="#b4a888"/>
    <rect x="189" y="130" rx="5" width="12" height="14" fill="#9a8e6c" transform="rotate(-4,195,137)"/>
    <ellipse cx="195" cy="147" rx="9" ry="5" fill="#2a1a0a"/>
  </g>

  <g class="body-grp" style="transform-box:fill-box;transform-origin:50% 60%">
    <g class="tail-grp" style="transform-box:fill-box;transform-origin:90% 55%">
      <ellipse cx="30" cy="82" rx="14" ry="18" fill="#e8e0c8" transform="rotate(-30,30,82)"/>
      <ellipse cx="30" cy="82" rx="8" ry="10" fill="#f4ede8" opacity=".9" transform="rotate(-30,30,82)"/>
      <circle cx="21" cy="72" r="5" fill="#ede5d8"/>
    </g>

    <ellipse cx="148" cy="115" rx="98" ry="48" fill="#b5a890" opacity=".3"/>
    <ellipse cx="148" cy="108" rx="98" ry="52" fill="#f5ede0"/>

    <circle cx="58"  cy="85"  r="30" fill="#ede5d0"/>
    <circle cx="95"  cy="65"  r="37" fill="#f2e8d8"/>
    <circle cx="135" cy="56"  r="40" fill="#f4ede5"/>
    <circle cx="175" cy="60"  r="36" fill="#f0e8d5"/>
    <circle cx="210" cy="78"  r="31" fill="#ede5d0"/>
    <circle cx="228" cy="105" r="25" fill="#f0eadc"/>
    <circle cx="56"  cy="112" r="24" fill="#e8dfd0"/>
    <circle cx="225" cy="120" r="20" fill="#dfd7c8"/>

    <circle cx="72"  cy="75"  r="16" fill="#faf8f0" opacity=".35"/>
    <circle cx="115" cy="70"  r="18" fill="#faf8f0" opacity=".3"/>
    <circle cx="160" cy="68"  r="19" fill="#faf8f0" opacity=".35"/>
    <circle cx="195" cy="75"  r="16" fill="#faf8f0" opacity=".32"/>

    <ellipse cx="148" cy="92" rx="65" ry="38" fill="#faf8f3" opacity=".42"/>

    <path d="M72,78 Q80,68 92,76" stroke="#d8d0b8" stroke-width="1.6" fill="none" opacity=".6" stroke-linecap="round"/>
    <path d="M108,65 Q120,56 132,65" stroke="#d8d0b8" stroke-width="1.6" fill="none" opacity=".62" stroke-linecap="round"/>
    <path d="M148,60 Q162,52 172,62" stroke="#d8d0b8" stroke-width="1.6" fill="none" opacity=".58" stroke-linecap="round"/>
    <path d="M68,105 Q78,96 90,104" stroke="#d8d0b8" stroke-width="1.4" fill="none" opacity=".5" stroke-linecap="round"/>
    <path d="M182,75 Q195,66 208,75" stroke="#d8d0b8" stroke-width="1.4" fill="none" opacity=".48" stroke-linecap="round"/>
    <path d="M48,92 Q58,82 68,90" stroke="#c8c0a8" stroke-width="1.2" fill="none" opacity=".4" stroke-linecap="round"/>
    <path d="M218,90 Q228,80 235,88" stroke="#c8c0a8" stroke-width="1.2" fill="none" opacity=".38" stroke-linecap="round"/>

    <path d="M122,130 Q148,152 174,130" stroke="#b87e06" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M122,130 Q148,152 174,130" stroke="#e5c144" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/>

    <path d="M140,136 Q148,158 156,136 Q151,131 144,131 Z" fill="#c89a0e"/>
    <path d="M140,136 Q148,158 156,136 Q151,131 144,131 Z" fill="none" stroke="#f0c844" stroke-width="1.5" opacity=".7"/>
    <ellipse cx="148" cy="132" rx="10" ry="6" fill="#d9a012"/>
    <ellipse cx="148" cy="132" rx="10" ry="6" fill="none" stroke="#f0c844" stroke-width="1.5" opacity=".6"/>
    <line x1="148" y1="140" x2="148" y2="150" stroke="#4a2800" stroke-width="2"/>
    <circle cx="148" cy="152" r="3.5" fill="#3a1f00"/>

    <g class="head-grp" style="transform-box:fill-box;transform-origin:68% 72%">
      <path d="M226,120 Q240,100 245,86 Q252,86 256,100 Q255,120 242,124 Z" fill="#d4caa0"/>
      <path d="M228,120 Q240,108 244,92 Q248,92 254,108 Q252,120 240,122 Z" fill="#ddd4ac" opacity=".5"/>

      <ellipse cx="260" cy="86" rx="35" ry="32" fill="#d8ce9a"/>
      <ellipse cx="257" cy="75" rx="24" ry="18" fill="#e0d6a8" opacity=".5"/>
      <ellipse cx="262" cy="100" rx="26" ry="20" fill="#d4c494"/>

      <ellipse cx="280" cy="60" rx="11" ry="20" fill="#c0b584" transform="rotate(18,280,60)"/>
      <ellipse cx="280" cy="60" rx="6" ry="12" fill="#d8a878" transform="rotate(18,280,60)" class="ear-inner" style="transform-box:fill-box;transform-origin:50% 80%"/>
      <path d="M278,52 Q280,48 282,52" stroke="#b59860" stroke-width=".6" fill="none" opacity=".4" stroke-linecap="round"/>

      <path d="M248,72 C235,52 228,36 242,30 C252,44 255,62 252,72" fill="#a89464" stroke="#8a7048" stroke-width="1"/>
      <path d="M268,68 C278,48 287,34 278,28 C270,44 268,60 265,70" fill="#a89464" stroke="#8a7048" stroke-width="1"/>
      <path d="M247,70 C235,52 232,40 242,35" stroke="#c8b898" stroke-width="1.2" fill="none" opacity=".65" stroke-linecap="round"/>
      <path d="M273,67 C280,50 285,38 278,32" stroke="#c8b898" stroke-width="1.2" fill="none" opacity=".6" stroke-linecap="round"/>
      <path d="M250,68 Q245,52 248,38" stroke="#bfa878" stroke-width=".8" fill="none" opacity=".5" stroke-linecap="round"/>

      <ellipse cx="287" cy="95" rx="16" ry="14" fill="#cec49a"/>
      <ellipse cx="287" cy="100" rx="14" ry="10" fill="#c4ba8a" opacity=".6"/>
      <ellipse cx="296" cy="95" rx="5" ry="4" fill="#a68060"/>

      <ellipse cx="302" cy="93" rx="3.5" ry="2.8" fill="#5a3820" opacity=".85"/>
      <ellipse cx="292" cy="95" rx="3" ry="2.5" fill="#5a3820" opacity=".75"/>

      <path d="M286,110 Q295,118 306,112" stroke="#6a4820" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".7"/>
      <ellipse cx="287" cy="111" rx="18" ry="6" fill="#c8be8c" opacity=".4"/>

      <ellipse cx="268" cy="82" rx="11" ry="10" fill="#18100a"/>
      <ellipse cx="268" cy="82" rx="9" ry="8.5" fill="#fefdf8"/>
      <ellipse cx="268" cy="83" rx="6.5" ry="7" fill="#6a5028"/>
      <ellipse cx="268" cy="83" rx="2.2" ry="6.2" fill="#000"/>
      <circle cx="272" cy="78" r="3" fill="#ffffff" opacity=".95"/>
      <circle cx="264" cy="87" r="1.5" fill="#ffffff" opacity=".5"/>
      <path d="M258,80 Q268,74 276,80" stroke="#a8945a" stroke-width="1.3" fill="none" opacity=".65"/>
      <path d="M258,78 L256,75 M263,75 L262,72 M268,74 L267,71 M273,76 L273,73" stroke="#8a7040" stroke-width="1" fill="none" opacity=".5" stroke-linecap="round"/>
      <path d="M259,86 L258,89" stroke="#8a7040" stroke-width=".8" fill="none" opacity=".3" stroke-linecap="round"/>

      <ellipse cx="280" cy="100" rx="9" ry="6" fill="#d84040" opacity=".18"/>
      <path d="M260,76 Q268,71 276,76" stroke="#9a8450" stroke-width="1.8" fill="none" opacity=".62" stroke-linecap="round"/>

    </g>
  </g>

  <g class="leg-a" style="transform-box:fill-box;transform-origin:50% 0%">
    <ellipse cx="211" cy="116" rx="8" ry="12" fill="#d0c6a2"/>
    <rect x="204" y="106" rx="7" width="14" height="28" fill="#d0c6a2"/>
    <rect x="205" y="130" rx="5" width="12" height="14" fill="#bfb584" transform="rotate(-3,211,137)"/>
    <ellipse cx="211" cy="147" rx="9" ry="5" fill="#381f0a"/>
  </g>

  <g class="leg-d" style="transform-box:fill-box;transform-origin:50% 0%">
    <ellipse cx="95" cy="116" rx="8" ry="12" fill="#d0c6a2"/>
    <rect x="88" y="106" rx="7" width="14" height="28" fill="#d0c6a2"/>
    <rect x="89" y="130" rx="5" width="12" height="14" fill="#bfb584" transform="rotate(4,95,137)"/>
    <ellipse cx="95" cy="147" rx="9" ry="5" fill="#381f0a"/>
  </g>

</svg>`;
}

/**
 * Build decorative grass at the bottom of the runway
 */
function buildGrass(el, count) {
  el.style.cssText = 'position:absolute;bottom:2px;left:0;right:0;display:flex;justify-content:space-around;align-items:flex-end;pointer-events:none;overflow:hidden';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    const h = 7 + Math.random() * 11;
    const w = 4 + Math.random() * 5;
    const tilt = (Math.random() - 0.5) * 22;
    d.style.cssText = `width:${w}px;height:${h}px;background:linear-gradient(180deg,#15aa5f,#082a10);border-radius:50% 50% 0 0;opacity:${0.25 + Math.random() * 0.32};transform:rotate(${tilt}deg);flex-shrink:0`;
    el.appendChild(d);
  }
}

/**
 * Dust particles effect system
 */
const cvDust = document.getElementById('cvDust');
const dCtx = cvDust.getContext('2d');
let dustArr = [];

cvDust.width = innerWidth;
cvDust.height = innerHeight;

window.addEventListener('resize', () => {
  cvDust.width = innerWidth;
  cvDust.height = innerHeight;
});

/**
 * Spawn dust particles when sheep runs
 */
function spawnDust(bx, by) {
  for (let i = 0; i < 5; i++) {
    dustArr.push({
      x: bx + (Math.random() - 0.5) * 18,
      y: by + (Math.random() - 0.5) * 8,
      r: 1.5 + Math.random() * 4,
      vx: -(Math.random() * 2.2 + 0.6),
      vy: -(Math.random() * 0.6),
      a: 0.48,
      da: 0.028 + Math.random() * 0.01
    });
  }
}

/**
 * Animate dust particles
 */
(function loopDust() {
  dCtx.clearRect(0, 0, cvDust.width, cvDust.height);
  dustArr = dustArr.filter(p => p.a > 0);
  
  dustArr.forEach(p => {
    p.x += p.vx;
    p.y += p.vy * 0.5;
    p.r += 0.18;
    p.a -= p.da;
    
    dCtx.beginPath();
    dCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    dCtx.fillStyle = `rgba(190, 158, 72, ${p.a})`;
    dCtx.fill();
  });
  
  requestAnimationFrame(loopDust);
})();

/**
 * Starry sky animation
 */
(function() {
  const c = document.getElementById('cvSky');
  const ctx = c.getContext('2d');
  let W, H, stars = [];
  
  const resize = () => {
    W = c.width = innerWidth;
    H = c.height = innerHeight;
  };
  
  const init = () => {
    stars = [];
    for (let i = 0; i < 340; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.88,
        r: Math.random() * 1.65 + 0.14,
        a: Math.random() * 0.9 + 0.08,
        s: Math.random() * 0.013 + 0.003,
        d: Math.random() < 0.5 ? 1 : -1
      });
    }
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createRadialGradient(W * 0.42, H * 0.2, 0, W * 0.42, H * 0.2, H * 0.65);
    g.addColorStop(0, 'rgba(13, 84, 50, 0.11)');
    g.addColorStop(0.5, 'rgba(8, 42, 16, 0.055)');
    g.addColorStop(1, 'rgba(1, 12, 6, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    
    stars.forEach(s => {
      s.a += s.s * s.d;
      if (s.a > 1 || s.a < 0.06) s.d *= -1;
      
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(251, 217, 108, ${s.a * 0.88})`;
      ctx.fill();
    });
    
    requestAnimationFrame(draw);
  };
  
  resize();
  init();
  draw();
  
  window.addEventListener('resize', () => {
    resize();
    init();
  });
})();

/**
 * Confetti animation on celebration
 */
function confetti() {
  const c = document.getElementById('cvFetti');
  const ctx = c.getContext('2d');
  c.width = innerWidth;
  c.height = innerHeight;
  
  const cols = ['#b87e06', '#edba2a', '#fbd96c', '#0b4a2c', '#15aa5f', '#fff', '#9e2212', '#d97860', '#ffd700', '#fff4bb'];
  const ps = [];
  
  for (let i = 0; i < 240; i++) {
    ps.push({
      x: Math.random() * c.width,
      y: -20 - Math.random() * 380,
      w: 4 + Math.random() * 8,
      h: 2.2 + Math.random() * 5,
      r: Math.random() * Math.PI * 2,
      dr: (Math.random() - 0.5) * 0.2,
      vy: 1.8 + Math.random() * 4.2,
      vx: (Math.random() - 0.5) * 2.8,
      col: cols[Math.floor(Math.random() * cols.length)],
      a: 1
    });
  }
  
  let f = 0;
  (function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    
    ps.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.r += p.dr;
      p.a = Math.max(0, 1 - f / 235);
      
      ctx.save();
      ctx.globalAlpha = p.a;
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.r);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    
    f++;
    if (f < 255) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, c.width, c.height);
    }
  })();
}

/**
 * Build decorative lanterns for celebration
 */
function buildLanterns() {
  const cfg = [
    { b: '#b87e06', c: '#8a5e04' },
    { b: '#0b4a2c', c: '#073018' },
    { b: '#9e2212', c: '#6a160c' },
    { b: '#0b4a2c', c: '#073018' },
    { b: '#b87e06', c: '#8a5e04' }
  ];
  
  document.getElementById('lanternRow').innerHTML = cfg.map(d => `
    <div class="lan">
      <div class="l-str" style="background:${d.c}"></div>
      <div class="l-cap" style="background:${d.c}"></div>
      <div class="l-body" style="background:radial-gradient(ellipse at 50% 32%,${d.b}ee,${d.b}55);box-shadow:0 0 10px ${d.b}88"></div>
    </div>
  `).join('');
}

/**
 * Animate sheep running across the runway
 */
function runSheep(wrapperId, svgUid, px, stageId, cb) {
  const wrap = document.getElementById(wrapperId);
  const stage = document.getElementById(stageId);
  
  if (!wrap || !stage) {
    if (cb) cb();
    return;
  }
  
  wrap.innerHTML = makeSheep(svgUid, px);
  const svg = document.getElementById('sh_' + svgUid);
  
  if (!svg) {
    if (cb) cb();
    return;
  }
  
  // Add grass if not already present
  if (!stage.querySelector('[data-grass]')) {
    const gel = document.createElement('div');
    gel.setAttribute('data-grass', '1');
    stage.appendChild(gel);
    buildGrass(gel, 30);
  }
  
  const stageW = stage.offsetWidth;
  const sheepW = px;
  const idealTarget = Math.round(stageW / 2 - sheepW / 2);
  const target = Math.max(8, Math.min(stageW - sheepW - 4, idealTarget));
  
  let x = -sheepW - 20;
  wrap.style.left = x + 'px';
  wrap.style.transition = 'none';
  
  requestAnimationFrame(() => {
    svg.classList.add('running');
  });
  
  const totalDist = target - x;
  const minSpd = 2.2;
  const maxSpd = 6.8;
  let last = null;
  let dustTimer = 0;
  
  function tick(ts) {
    if (!last) last = ts;
    const dt = Math.min((ts - last) / 16.67, 2.5);
    last = ts;
    
    const prog = Math.max(0, Math.min(1, (x - (-sheepW - 20)) / totalDist));
    let spd;
    
    if (prog < 0.25) {
      spd = minSpd + (maxSpd - minSpd) * (prog / 0.25);
    } else if (prog < 0.72) {
      spd = maxSpd;
    } else {
      spd = Math.max(minSpd, maxSpd - (maxSpd - minSpd) * ((prog - 0.72) / 0.28));
    }
    
    x += spd * dt;
    wrap.style.left = Math.round(x) + 'px';
    
    dustTimer += dt;
    if (spd > 3 && dustTimer > 3) {
      dustTimer = 0;
      const sr = stage.getBoundingClientRect();
      spawnDust(sr.left + x + 30, sr.top + stage.offsetHeight - 8);
    }
    
    if (x < target) {
      requestAnimationFrame(tick);
    } else {
      // Sheep reached target
      wrap.style.transition = 'none';
      wrap.style.left = target + 'px';
      svg.classList.remove('running');
      svg.classList.add('idle');
      
      // Idle animations
      setTimeout(() => {
        wrap.style.transition = 'left .32s cubic-bezier(.22,.9,.36,1)';
        wrap.style.left = (target + 14) + 'px';
        setTimeout(() => {
          wrap.style.transition = 'left .20s cubic-bezier(.55,0,.45,1)';
          wrap.style.left = (target + 5) + 'px';
          setTimeout(() => {
            wrap.style.transition = 'left .15s ease-out';
            wrap.style.left = target + 'px';
          }, 210);
        }, 340);
      }, 10);
      
      // Head turn animation
      setTimeout(() => {
        const hg = svg.querySelector('.head-grp');
        if (!hg) return;
        
        hg.style.transition = 'transform .32s cubic-bezier(.4,0,.2,1)';
        hg.style.transform = 'scaleX(-1)';
        
        setTimeout(() => {
          hg.style.transition = 'transform .28s cubic-bezier(.4,0,.2,1)';
          hg.style.transform = 'scaleX(1)';
        }, 1300);
      }, 1000);
      
      if (cb) cb();
    }
  }
  
  requestAnimationFrame(tick);
}

/**
 * Start the first page sheep animation
 */
function startP1Sheep() {
  // px=240 on runway1
  runSheep('sheepWrap', 'p1', 240, 'runway1', () => {});
}

window.addEventListener('load', () => {
  setTimeout(startP1Sheep, 580);
});

/**
 * Convert Gregorian date to Hijri date
 */
function gregorianToHijri(date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  
  const jd = Math.floor((1461 * (y + 4800 + Math.floor((m - 14) / 12))) / 4) +
    Math.floor((367 * ((m - 2) - 12 * (Math.floor((m - 14) / 12)))) / 12) -
    Math.floor((3 * (Math.floor((y + 4900 + Math.floor((m - 14) / 12)) / 100))) / 4) +
    d - 32045;
    
  const l = jd + 68569;
  const n = Math.floor((4 * l) / 146097);
  const l2 = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l2 + 1)) / 1461001);
  const l3 = l2 - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l3) / 2447);
  const dd = l3 - Math.floor((2447 * j) / 80);
  const mm = j + Math.floor(j / 11) * 2;
  const yy = 100 * (n - 49) + i + Math.floor(j / 11);
  
  return { y: yy, m: mm, d: dd };
}

/**
 * Get Hijri date in Arabic format
 */
function getHijriDateAr(date) {
  const h = gregorianToHijri(date);
  const months = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
  return `${h.d} ${months[h.m - 1]} ${h.y} هـ`;
}

/**
 * Render the current Hijri date
 */
async function renderCurrentHijri() {
  const el = document.getElementById('dateStr');
  if (!el) return;
  
  const fallback = () => {
    try {
      el.textContent = getHijriDateAr(new Date());
    } catch (e) {
      // Silent fallback
    }
  };
  
  try {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    
    const url = `https://api.aladhan.com/v1/gToH?date=${dd}-${mm}-${yyyy}&method=2`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    
    if (data && data.data && data.data.hijri) {
      const h = data.data.hijri;
      const monthName = h.month && (h.month.ar || h.month.en || h.month.name) ? (h.month.ar || h.month.en || h.month.name) : '';
      const monthAr = (h.month && (h.month.arabic || h.month.ar)) ? (h.month.arabic || h.month.ar) : monthName;
      const day = (h.day ?? '').toString();
      const year = (h.year ?? '').toString();
      
      if (day && year && monthAr) {
        el.textContent = `${day} ${monthAr} ${year} هـ`;
        return;
      }
    }
  } catch (e) {
    // API request failed, use fallback
  }
  
  fallback();
}

/**
 * Main function to launch the greeting card
 */
function launch() {
  const name = document.getElementById('ni').value.trim();
  
  if (!name) {
    const n = document.getElementById('ni');
    n.style.borderColor = '#9e2212';
    n.style.boxShadow = '0 0 0 3px rgba(158, 34, 18, 0.18)';
    n.focus();
    setTimeout(() => {
      n.style.borderColor = '';
      n.style.boxShadow = '';
    }, 1500);
    return;
  }

  document.getElementById('c2Name').textContent = name;
  buildLanterns();
  renderCurrentHijri();
  
  const ov = document.getElementById('burst');
  const p1 = document.getElementById('page1');
  const p2 = document.getElementById('page2');
  
  ov.classList.add('show');
  setTimeout(() => {
    p1.classList.add('exit');
    setTimeout(() => {
      p1.classList.add('hidden');
      p1.classList.remove('exit');
    }, 500);
    p2.classList.remove('hidden');
    
    renderCurrentHijri();
    
    setTimeout(() => {
      ov.classList.remove('show');
    }, 380);
    
    setTimeout(() => {
      confetti();
      runSheep('sheepWrap2', 'p2', 210, 'runway2', () => {});
    }, 700);
  }, 480);
}

/**
 * Go back to the first page
 */
function goBack() {
  const p1 = document.getElementById('page1');
  const p2 = document.getElementById('page2');
  
  p2.classList.add('exit');
  setTimeout(() => {
    p2.classList.add('hidden');
    p2.classList.remove('exit');
  }, 500);
  
  p1.classList.remove('hidden');
  setTimeout(startP1Sheep, 340);
}

/**
 * Share the greeting message
 */
function share2() {
  const name = document.getElementById('c2Name').textContent;
  const txt = `🌙 عيد أضحى مبارك يا ${name} 🐑\nتقبّل الله منّا ومنكم صالح الأعمال ✨\n\nفي يوم العيد تُرفع الأيدي بالدعاء\nوتمتلئ القلوب بنور الرجاء\nكل عام وأنت بألف خير 💛`;
  
  if (navigator.share) {
    navigator.share({
      title: 'عيد أضحى مبارك',
      text: txt
    }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(txt)
      .then(() => toast('تم نسخ التهنئة 📋'))
      .catch(() => toast('افتح في متصفح يدعم المشاركة'));
  }
}

/**
 * Print the greeting card
 */
function doPrint() {
  toast('جارٍ تحضير الطباعة… 🖨️');
  
  // Wait briefly for layout stability
  setTimeout(() => {
    // Add print mode class
    document.documentElement.classList.add('print-mode');
    document.body.classList.add('print-mode');
    
    // Ensure page2 is visible
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    if (page1) page1.style.display = 'none';
    if (page2) {
      page2.style.display = 'flex';
      page2.classList.remove('hidden');
    }
    
    // Hide all canvases
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(c => c.style.display = 'none');
    
    // Trigger print
    setTimeout(() => {
      window.print();
      
      // Restore after print
      setTimeout(() => {
        document.documentElement.classList.remove('print-mode');
        document.body.classList.remove('print-mode');
        canvases.forEach(c => c.style.display = 'fixed');
        if (page1) page1.style.display = '';
        if (page2) page2.style.display = '';
      }, 800);
    }, 200);
  }, 300);
}

/**
 * Show a temporary notification message
 */
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/**
 * Initialize UI event listeners
 */
(function initUi() {
  document.getElementById('launchBtn').addEventListener('click', launch);
  document.getElementById('shareBtn').addEventListener('click', share2);
  document.getElementById('printBtn').addEventListener('click', doPrint);
  document.getElementById('backBtn').addEventListener('click', goBack);

  const ni = document.getElementById('ni');
  ni.addEventListener('keydown', e => {
    if (e.key === 'Enter') launch();
  });
})();

