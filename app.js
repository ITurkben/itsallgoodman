/* ═══════════════════════════════════════════════════════
   IT'S ALL GOOD, MAN — app.js
   Thème Better Call Saul — Ibrahim TURKBEN
   ═══════════════════════════════════════════════════════ */
'use strict';

/* ─── HELPERS ─── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const delay = ms => new Promise(r => setTimeout(r, ms));

/* ─── PROJECT DATA ─── */
const PROJECTS = [
  {
    id: 0, title: 'NeuralChat', tech: 'React',
    caseNum: 'DOSSIER N°001', status: 'open',
    desc: "Interface de chat IA avec analyse de sentiment en temps réel et synthèse vocale neurale.",
    stack: ['React', 'Socket.io', 'TensorFlow.js'], stars: 5,
    color: '#C9A227'
  },
  {
    id: 1, title: 'DataVortex', tech: 'Python',
    caseNum: 'DOSSIER N°002', status: 'open',
    desc: "Pipeline ETL avec visualisations 3D interactives et dashboards prédictifs en temps réel.",
    stack: ['Python', 'D3.js', 'FastAPI'], stars: 4,
    color: '#9A7E1F'
  },
  {
    id: 2, title: 'CryptoNexus', tech: 'Node.js',
    caseNum: 'DOSSIER N°003', status: 'closed',
    desc: "Dashboard crypto multi-exchange avec alertes intelligentes et rebalancing automatisé.",
    stack: ['Node.js', 'Redis', 'WebSocket'], stars: 5,
    color: '#7A6018'
  },
  {
    id: 3, title: 'VoidEngine', tech: 'Rust',
    caseNum: 'DOSSIER N°004', status: 'open',
    desc: "Moteur de rendu WebAssembly pour visualisations scientifiques haute performance.",
    stack: ['Rust', 'WASM', 'WebGL'], stars: 4,
    color: '#C9A227'
  }
];

/* ─── TERMINAL KNOWLEDGE BASE ─── */
const TERMINAL_KB = {
  help: {
    text: `COMMANDES DISPONIBLES :
  profil      — Infos sur Ibrahim
  skills      — Compétences techniques
  contact     — Coordonnées
  projets     — Liste des projets
  saul        — ...
  jimmy       — ...
  mike        — ...
  gus         — ...
  chuck       — ...
  clear       — Effacer le terminal
  exit        — Fermer`,
    cls: 'gold'
  },
  profil: {
    text: `Ibrahim TURKBEN
Technicien Support IT N2 @ Kuehne+Nagel — Limas

"Je dépanne, je bricole, je développe — et quand
 ça marche, je recommence avec un truc plus compliqué."

GitHub  : github.com/ITurkben
LinkedIn: ibrahim-turkben-80140a236`,
    cls: ''
  },
  skills: {
    text: `COMPÉTENCES CLÉS :
[████████░░]  Windows / Server    80%
[████████░░]  TCP/IP, DNS, DHCP   80%
[█████████░]  Dépannage           85%
[████████░░]  Prise à distance    80%
[██████░░░░]  Active Directory    60%
[███████░░░]  GLPI / ITSM         75%
[█████░░░░░]  PowerShell / Bash   55%
[███░░░░░░░]  Python              35%
[█████░░░░░]  VMware / Azure      50%`,
    cls: ''
  },
  contact: {
    text: `GitHub  : github.com/ITurkben
LinkedIn: linkedin.com/in/ibrahim-turkben-80140a236
Formulaire de contact disponible sur la page principale.`,
    cls: ''
  },
  projets: {
    text: `DOSSIERS EN COURS :
N°001  NeuralChat   — React / Socket.io / TensorFlow.js   ★★★★★
N°002  DataVortex   — Python / D3.js / FastAPI            ★★★★☆
N°003  CryptoNexus  — Node.js / Redis / WebSocket         ★★★★★  [CLÔTURÉ]
N°004  VoidEngine   — Rust / WASM / WebGL                 ★★★★☆`,
    cls: ''
  },
  saul: {
    text: `"I'm the guy who knocks... on vos tickets IT."

— Saul Goodman, s'il avait choisi le support informatique
  plutôt que le droit pénal.

P.S. — Son vrai nom, c'est Jimmy. Mais "Better Call Jimmy"
  ça sonnait moins bien.`,
    cls: 'gold'
  },
  jimmy: {
    text: `James Morgan McGill, dit "Jimmy".
Avant Saul Goodman, il était juste... Jimmy.
Débrouillard, créatif, toujours une solution en tête.

Ibrahim, lui, a toujours été Ibrahim.
C'est plus simple — et tout aussi efficace.`,
    cls: ''
  },
  mike: {
    text: `Mike Ehrmantraut.
"I did what I did, and I'm at peace with it."

L'homme de confiance. Discret, méthodique, fiable.
Des qualités précieuses en Support IT aussi.
Chaque ticket traité jusqu'à résolution complète.`,
    cls: ''
  },
  gus: {
    text: `Gustavo Fring. Contrôle. Précision. Discrétion.
Derrière le sourire, une machine parfaitement huilée.

"I hide in plain sight, same as you."

Même approche pour la gestion d'infrastructure :
tout fonctionne, personne ne s'en rend compte.
C'est ça, le bon support IT.`,
    cls: ''
  },
  chuck: {
    text: `Charles McGill. Brillant. Exigeant. Rigoureux.
Et allergique... à l'électricité.

Aurait quand même eu besoin du Support IT N2.`,
    cls: ''
  },
  'better call ibrahim': {
    text: ``,
    cls: 'ascii',
    special: 'phone'
  },
  'it\'s all good man': {
    text: `It's all good, man.
C'est la devise. Quand tout part en vrille,
quand le réseau tombe, quand l'AD refuse de coopérer —
il y a toujours une solution.
Il suffit d'appeler Ibrahim.`,
    cls: 'gold'
  }
};

/* ══════════════════════════════════════════════════════
   INTRO SEQUENCE
══════════════════════════════════════════════════════ */
async function initIntro() {
  initIntroCanvas();
  const bar     = $('#intro-bar');
  const status  = $('#intro-status');
  const crossed = $('#intro-crossed');
  const brand   = $('#intro-brand');
  const sub     = $('#intro-sub');

  const STEPS = [
    { pct: 18,  msg: 'Chargement du dossier...'         },
    { pct: 38,  msg: 'Vérification des compétences...'   },
    { pct: 58,  msg: 'Mise en place de l\'interface...'  },
    { pct: 78,  msg: 'Connexion aux serveurs...'         },
    { pct: 95,  msg: 'Derniers ajustements...'           },
    { pct: 100, msg: "C'est bon, man."                   }
  ];

  // 1. Show "SAUL GOODMAN & ASSOCIATES"
  await delay(450);
  crossed.classList.add('show');

  // 2. Strike through it
  await delay(1100);
  crossed.classList.add('strike');

  // 3. Show brand
  await delay(550);
  brand.classList.add('show');

  // 4. Show subtitle
  await delay(300);
  sub.classList.add('show');

  // 5. Progress bar
  await delay(350);
  for (const step of STEPS) {
    await delay(280 + Math.random() * 160);
    bar.style.width = step.pct + '%';
    status.textContent = step.msg;
  }

  // 6. Fade out → launch site
  await delay(520);
  $('#intro').classList.add('fade-out');
  await delay(700);
  $('#intro').style.display = 'none';
  $('#site').classList.remove('hidden');
  initSite();
}

/* Intro canvas: subtle drifting gold particles */
function initIntroCanvas() {
  const canvas = $('#intro-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();

  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random() * (W || window.innerWidth),
    y: Math.random() * (H || window.innerHeight),
    vx: (Math.random() - .5) * .25,
    vy: -Math.random() * .3 - .05,
    r: Math.random() * 1.5 + .3,
    a: Math.random() * .4 + .1
  }));

  (function tick() {
    if (!$('#intro') || $('#intro').style.display === 'none') return;
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,162,39,${p.a})`;
      ctx.fill();
    });
  })();
}

/* ══════════════════════════════════════════════════════
   SITE INIT (called after intro)
══════════════════════════════════════════════════════ */
function initSite() {
  initNav();
  initHeroParticles();
  initTyping();
  initScrollAnimations();
  renderProjects('all');
  initProjectFilters();
  initContact();
  initEasterEgg();
  // Welcome toast
  setTimeout(() => notify("Bienvenue sur itsallgoodman.fr — It's all good, man."), 600);
}

/* ══════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════ */
function initNav() {
  const nav    = $('#nav');
  const links  = $$('.nav-links .nl');
  const burger = $('#nav-burger');
  const navLinks = $('#nav-links');

  // Scroll: bg + active link
  const sections = $$('section[id]');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }, { passive: true });

  // Mobile menu
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nl')) navLinks.classList.remove('open');
  });

  // Logo click counter (5 clicks → phone easter egg)
  let logoClicks = 0, logoTimer;
  $('#nav-logo').addEventListener('click', e => {
    e.preventDefault();
    logoClicks++;
    clearTimeout(logoTimer);
    logoTimer = setTimeout(() => { logoClicks = 0; }, 1800);
    if (logoClicks >= 5) {
      logoClicks = 0;
      triggerPhoneEasterEgg();
    }
  });
}

/* ══════════════════════════════════════════════════════
   HERO — GOLD PARTICLE CANVAS
══════════════════════════════════════════════════════ */
function initHeroParticles() {
  const canvas = $('#hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  document.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  }, { passive: true });

  const pts = Array.from({ length: 65 }, () => ({
    x: Math.random() * 1920, y: Math.random() * 1080,
    vx: (Math.random() - .5) * .25,
    vy: -Math.random() * .35 - .05,
    r: Math.random() * 1.8 + .4,
    a: Math.random() * .45 + .08,
    gold: Math.random() > .55
  }));

  (function tick() {
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, W, H);

    pts.forEach(p => {
      // Mouse repulsion
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 130) {
        const f = (130 - dist) / 130;
        p.vx += (dx / dist) * f * .45;
        p.vy += (dy / dist) * f * .45;
      }
      p.vx *= .985; p.vy *= .985;
      p.vy -= .0015; // gentle upward drift
      p.x += p.vx; p.y += p.vy;
      if (p.y < -6) { p.y = H + 6; p.x = Math.random() * W; }
      if (p.x < -6) p.x = W + 6;
      if (p.x > W + 6) p.x = -6;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(201,162,39,${p.a})`
        : `rgba(237,224,190,${p.a * .45})`;
      ctx.fill();
    });

    // Connections
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(201,162,39,${(1 - d / 115) * .07})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
  })();
}

/* ══════════════════════════════════════════════════════
   TYPING EFFECT
══════════════════════════════════════════════════════ */
function initTyping() {
  const el = $('#typed-role');
  if (!el) return;
  const roles = [
    'Technicien Support IT N2',
    'Administrateur Systèmes',
    'Spécialiste Réseau TCP/IP',
    'PowerShell Enthusiast',
    'Problem Solver'
  ];
  let ri = 0, ci = 0, del = false;

  (function type() {
    const cur = roles[ri];
    el.textContent = del ? cur.slice(0, --ci) : cur.slice(0, ++ci);
    let wait = del ? 45 : 75;
    if (!del && ci === cur.length) { wait = 2200; del = true; }
    else if (del && ci === 0)      { del = false; ri = (ri + 1) % roles.length; wait = 350; }
    setTimeout(type, wait);
  })();
}

/* ══════════════════════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════════════════════ */
function initScrollAnimations() {
  // Reveal
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: .12 });
  $$('.reveal').forEach(el => revealObs.observe(el));

  // Skill bars
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.sk-fill');
        if (fill) fill.style.width = e.target.dataset.lvl + '%';
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: .5 });
  $$('.sk-item').forEach(el => skillObs.observe(el));

  // Counters
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.count) {
        animCount(e.target, +e.target.dataset.count);
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: .5 });
  $$('.ast-n[data-count]').forEach(el => countObs.observe(el));
}

function animCount(el, target) {
  let cur = 0;
  const step = target / 45;
  const iv = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.round(cur);
    if (cur >= target) clearInterval(iv);
  }, 38);
}

/* ══════════════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════════════ */
function renderProjects(filter) {
  const grid = $('#proj-grid');
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tech === filter);
  const techColors = { React: '#61DAFB', Python: '#3776AB', 'Node.js': '#68A063', Rust: '#CE422B' };

  grid.innerHTML = list.map((p, i) => `
    <div class="proj-card reveal" style="transition-delay:${i * .08}s">
      <div class="proj-case-label">
        <span class="proj-case-num">${p.caseNum}</span>
        <span class="proj-status-badge ${p.status === 'open' ? 'badge-open' : 'badge-closed'}">
          ${p.status === 'open' ? 'EN COURS' : 'CLÔTURÉ'}
        </span>
      </div>
      <div class="proj-card-header">
        <span class="proj-tech" style="background:${p.color}18;color:${p.color};border:1px solid ${p.color}30">${p.tech}</span>
        <span class="proj-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5 - p.stars)}</span>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    </div>
  `).join('');

  // Re-observe new cards
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }});
  }, { threshold: .08 });
  $$('.proj-card.reveal').forEach(el => {
    setTimeout(() => revObs.observe(el), 50);
  });
}

function initProjectFilters() {
  $$('.pf').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.pf').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ══════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════ */
function initContact() {
  const form = $('#contact-form');
  const btn  = $('#submit-btn');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name  = $('#cf-name').value.trim();
    const email = $('#cf-email').value.trim();
    const msg   = $('#cf-msg').value.trim();

    if (!name || !email || !msg) {
      notify('Tous les champs sont requis.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      notify("Format d'email invalide.", 'error');
      return;
    }

    const orig = btn.textContent;
    btn.textContent = 'Transmission en cours...';
    btn.disabled = true;

    await delay(1600);

    btn.textContent = 'Message envoyé ✓';
    notify("Message transmis. It's all good, man !", 'success');
    form.reset();

    setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3500);
  });
}

/* ══════════════════════════════════════════════════════
   EASTER EGG — TERMINAL
══════════════════════════════════════════════════════ */
function initEasterEgg() {
  const terminal = $('#terminal-egg');
  const input    = $('#te-input');
  const closeBtn = $('#te-close');

  // Ctrl+Shift+G (Goodman) to toggle — Ctrl+` intercepted by Windows
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'G') {
      e.preventDefault();
      toggleTerminal();
    }
    if (e.key === 'Escape' && !terminal.classList.contains('hidden')) {
      terminal.classList.add('hidden');
    }
  });

  closeBtn.addEventListener('click', () => terminal.classList.add('hidden'));

  // Footer hint also opens the terminal (clic)
  const hint = $('#footer-hint');
  if (hint) hint.addEventListener('click', () => toggleTerminal());

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      input.value = '';
      if (cmd) handleTerminalCmd(cmd);
    }
  });

  // Auto welcome message when opened
  terminal.addEventListener('transitionend', () => {
    if (!terminal.classList.contains('hidden')) input.focus();
  });
}

function toggleTerminal() {
  const t = $('#terminal-egg');
  if (t.classList.contains('hidden')) {
    t.classList.remove('hidden');
    const body = $('#te-body');
    if (body.children.length === 0) {
      appendTermLine('gold', `Better Call Ibrahim — Terminal v1.0
Tapez "help" pour la liste des commandes.
— It's all good, man. 🎩`);
    }
    setTimeout(() => $('#te-input').focus(), 80);
  } else {
    t.classList.add('hidden');
  }
}

function handleTerminalCmd(raw) {
  const body = $('#te-body');
  const cmd  = raw.toLowerCase().trim();

  // Echo input
  const inLine = document.createElement('div');
  inLine.className = 'te-line-in';
  inLine.textContent = `goodman@itsallgoodman:~$ ${raw}`;
  body.appendChild(inLine);

  if (cmd === 'clear') {
    body.innerHTML = '';
    body.scrollTop = 9999;
    return;
  }
  if (cmd === 'exit') {
    $('#terminal-egg').classList.add('hidden');
    return;
  }

  // Exact match
  const entry = TERMINAL_KB[cmd];
  if (entry) {
    if (entry.special === 'phone') {
      appendTermLine('ascii', `██████╗ ███████╗████████╗████████╗███████╗██████╗
██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
██████╔╝█████╗     ██║      ██║   █████╗  ██████╔╝
██╔══██╗██╔══╝     ██║      ██║   ██╔══╝  ██╔══██╗
██████╔╝███████╗   ██║      ██║   ███████╗██║  ██║
╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝
    ██████╗ █████╗ ██╗     ██╗
    ██╔════╝██╔══██╗██║     ██║
    ██║     ███████║██║     ██║
    ██║     ██╔══██║██║     ██║
    ╚██████╗██║  ██║███████╗███████╗
     ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝`);
      setTimeout(triggerPhoneEasterEgg, 400);
    } else {
      appendTermLine(entry.cls || '', entry.text);
    }
  } else {
    // Partial matches
    const found = Object.keys(TERMINAL_KB).find(k => k.startsWith(cmd) || cmd.startsWith(k.split(' ')[0]));
    if (found) {
      const e2 = TERMINAL_KB[found];
      appendTermLine(e2.cls || '', e2.text);
    } else {
      appendTermLine('', `Commande inconnue : "${raw}"\nTapez "help" pour voir les commandes disponibles.`);
    }
  }

  body.scrollTop = body.scrollHeight;
}

function appendTermLine(cls, text) {
  const body = $('#te-body');
  const out  = document.createElement('div');
  out.className = 'te-line-out' + (cls ? ' ' + cls : '');
  out.textContent = text;
  body.appendChild(out);
  body.scrollTop = body.scrollHeight;
}

/* ══════════════════════════════════════════════════════
   PHONE EASTER EGG
══════════════════════════════════════════════════════ */
function triggerPhoneEasterEgg() {
  const egg = $('#phone-egg');
  egg.classList.remove('hidden');
  egg.classList.add('ring');
  notify("BETTER CALL IBRAHIM 📞", 'success');
  setTimeout(() => {
    egg.classList.remove('ring');
    setTimeout(() => egg.classList.add('hidden'), 350);
  }, 2800);
}

/* ══════════════════════════════════════════════════════
   NOTIFICATIONS
══════════════════════════════════════════════════════ */
function notify(msg, type = '') {
  const container = $('#notif-container');
  const el = document.createElement('div');
  el.className = 'notif' + (type ? ' ' + type : '');
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'notif-out .3s ease forwards';
    setTimeout(() => el.remove(), 320);
  }, 3200);
}

/* ══════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════ */
initIntro();
