/* ====== Theme Toggle ====== */
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

function getTheme() { return html.getAttribute('data-theme'); }
function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  if (themeBtn) themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
}
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
if (themeBtn) themeBtn.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));

/* ====== Mobile Menu ====== */
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('navDrawer');
let drawerOpen = false;
if (menuBtn && drawer) {
  menuBtn.addEventListener('click', () => {
    drawerOpen = !drawerOpen;
    drawer.classList.toggle('open', drawerOpen);
    menuBtn.textContent = drawerOpen ? '✕' : '☰';
  });
}
function closeDrawer() {
  drawerOpen = false;
  if (drawer) drawer.classList.remove('open');
  if (menuBtn) menuBtn.textContent = '☰';
}

/* ====== Char Drop Name Animation ====== */
const nameEl = document.getElementById('heroName');
if (nameEl) {
  [{ ch: '梅', a: false }, { ch: '乃', a: false }, { ch: '丹', a: true }].forEach((item, i) => {
    const span = document.createElement('span');
    span.className = 'name-char' + (item.a ? ' accent-char' : '');
    span.textContent = item.ch;
    span.style.animationDelay = (0.28 + i * 0.15) + 's';
    nameEl.appendChild(span);
  });
}

/* ====== Full-Page Particle Canvas ====== */
const canvas = document.getElementById('heroBg');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];

function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() { this.reset(true); }
  reset(init) {
    this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
    this.y = init
      ? Math.random() * (canvas ? canvas.height : window.innerHeight)
      : -10;
    this.r = Math.random() * 1.8 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.22 + 0.04;
    this.phase = Math.random() * Math.PI * 2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.phase += 0.016;
    const w = canvas.width, h = canvas.height;
    if (this.x < -10) this.x = w + 10;
    if (this.x > w + 10) this.x = -10;
    if (this.y < -10) this.y = h + 10;
    if (this.y > h + 10) this.y = -10;
  }
  draw() {
    const a = this.alpha * (0.6 + 0.4 * Math.sin(this.phase));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = isDark() ? `rgba(196,149,106,${a})` : `rgba(148,108,62,${a})`;
    ctx.fill();
  }
}

function drawConnections() {
  const lineColor = isDark() ? '196,149,106' : '148,108,62';
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 130) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(${lineColor},${(1 - d / 130) * 0.06})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(65, Math.floor(canvas.width * canvas.height / 14000));
  for (let i = 0; i < count; i++) particles.push(new Particle());
}

function animLoop() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animLoop);
}

if (canvas && ctx) { resizeCanvas(); initParticles(); animLoop(); }
window.addEventListener('resize', () => { if (canvas && ctx) { resizeCanvas(); initParticles(); } });

/* ====== 3D Card Tilt (Bento photo card) ====== */
const tiltEl = document.getElementById('cardTilt');
const shineEl = document.getElementById('cardShine');
const photoCard = document.querySelector('.hb-photo');
if (tiltEl && photoCard) {
  photoCard.addEventListener('mousemove', (e) => {
    const rect = tiltEl.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    tiltEl.style.transform = `rotateX(${-dy * 9}deg) rotateY(${dx * 12}deg) scale(1.02)`;
    if (shineEl) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      shineEl.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18) 0%, transparent 55%)`;
    }
  });
  photoCard.addEventListener('mouseleave', () => {
    tiltEl.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    if (shineEl) shineEl.style.background = 'none';
  });
}

/* ====== Cursor Glow + Particle Nudge ====== */
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }
  particles.forEach(p => {
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    if (Math.sqrt(dx * dx + dy * dy) < 90) { p.x -= dx * 0.012; p.y -= dy * 0.012; }
  });
});

/* ====== Scroll Reveal ====== */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* ====== Progress Bars ====== */
const progressObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting)
      e.target.querySelectorAll('.progress-fill').forEach(b => { b.style.width = (b.dataset.width || 0) + '%'; });
  });
}, { threshold: 0.3 });
document.querySelectorAll('.capability-card').forEach(c => progressObs.observe(c));

/* ====== Active Nav ====== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting)
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => scrollSpy.observe(s));

/* ====== Hero Tags Float Stagger ====== */
document.querySelectorAll('.hero-tag').forEach((tag, i) => {
  tag.style.opacity = '0';
  tag.style.transform = 'translateY(14px)';
  setTimeout(() => {
    tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    tag.style.opacity = '1';
    tag.style.transform = 'none';
    setTimeout(() => tag.classList.add('tag-floating'), 400);
  }, 850 + i * 90);
});

/* ====== Nav Shadow ====== */
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.boxShadow =
    window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});

/* ====== Metric Ring Animations ====== */
const ringObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.ring-progress').forEach(ring => {
        const circ = 2 * Math.PI * 30;
        const pct = parseFloat(ring.dataset.pct) / 100;
        ring.style.strokeDashoffset = circ * (1 - pct);
      });
      ringObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
const metricsEl = document.querySelector('.work-metrics');
if (metricsEl) ringObs.observe(metricsEl);

/* ====== Data Chart Bar Animations ====== */
const chartObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.dcb-bar').forEach(bar => {
        bar.style.width = (bar.dataset.width || 0) + '%';
      });
      chartObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
const dataChart = document.querySelector('.work-data-chart');
if (dataChart) chartObs.observe(dataChart);

/* ====== Project Cards Expand / Collapse ====== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    const isExpanded = this.classList.contains('expanded');
    document.querySelectorAll('.project-card').forEach(c => c.classList.remove('expanded'));
    if (!isExpanded) this.classList.add('expanded');
  });
});

/* ====== 3D Favorites Carousel ====== */
const FAV_ITEMS = [
  {
    icon: 'https://pic1.imgdb.cn/item/69c888fb4066a6014cf5e7d4.png',
    name: 'Claude',
    reason: '无处不在的思考伙伴，在理解语境和情感上比同类产品更有温度。',
    tag: 'AI助手'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc32.png',
    name: 'ChatGPT',
    reason: '定义了自然语言交互的标准，不仅是工具，更是思维的延伸。',
    tag: 'AI助手'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d76a583b567209bcc37.png',
    name: 'Gemini',
    reason: '原生多模态的长窗口记忆，处理复杂任务的得力助手。',
    tag: '多模态'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d76a583b567209bcc36.png',
    name: 'Flomo',
    reason: '无压力的记录方式，让稍纵即逝的灵感得以通过卡片沉淀。',
    tag: '碎片笔记'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69c888f54066a6014cf5e7c4.png',
    name: '小红书',
    reason: '把真实感做成了最大的护城河，UGC和算法的黄金比例。',
    tag: '内容社区'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc2e.png',
    name: '思源笔记',
    reason: '本地优先+双向链接，构建安全且可控的个人知识网络。',
    tag: '知识管理'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc30.png',
    name: 'NotebookLM',
    reason: '基于私有资料的精准问答，将文献阅读效率提升了数倍。',
    tag: 'AI研读'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc33.png',
    name: 'CapWords',
    reason: '实景拍照识别物体，实时翻译讲解，把世界变成英语课本。',
    tag: '语言学习'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc31.png',
    name: 'Podwise',
    reason: '将播客音频转化为结构化知识，让听觉内容可被索引和复用。',
    tag: '音频转录'
  },
  {
    icon: 'https://pic1.imgdb.cn/item/69778d56a583b567209bcc2f.png',
    name: 'Trae',
    reason: 'AI Native的编程体验，让代码编写从「敲击」变为「生成」。',
    tag: '智能IDE'
  },
];

let favCurrentIdx = 0;
let favAutoTimer = null;

function getCarouselRadius() {
  return Math.min(300, Math.max(160, window.innerWidth * 0.2));
}

function buildFavCarousel() {
  const carousel = document.getElementById('favCarousel');
  if (!carousel) return;
  const total = FAV_ITEMS.length;
  const radius = getCarouselRadius();
  const angleStep = 360 / total;
  carousel.innerHTML = '';
  FAV_ITEMS.forEach((item, i) => {
    const angle = angleStep * i;
    const card = document.createElement('div');
    card.className = 'fav-3d-card';
    card.dataset.index = i;
    // icon with fallback
    const iconEl = document.createElement('img');
    iconEl.className = 'fav-3d-icon';
    iconEl.src = item.icon;
    iconEl.alt = item.name + ' 图标';
    iconEl.loading = 'lazy';
    iconEl.onerror = function () {
      const fb = document.createElement('div');
      fb.className = 'fav-icon-fallback';
      fb.textContent = item.name[0];
      this.replaceWith(fb);
    };
    const nameEl = document.createElement('div');
    nameEl.className = 'fav-3d-name';
    nameEl.textContent = item.name;
    card.appendChild(iconEl);
    card.appendChild(nameEl);
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    card.addEventListener('click', () => {
      clearInterval(favAutoTimer);
      rotateFavTo(i);
      startFavAuto();
    });
    carousel.appendChild(card);
  });
}

function rotateFavTo(idx) {
  favCurrentIdx = ((idx % FAV_ITEMS.length) + FAV_ITEMS.length) % FAV_ITEMS.length;
  const angleStep = 360 / FAV_ITEMS.length;
  const carousel = document.getElementById('favCarousel');
  if (carousel) carousel.style.transform = `rotateY(${-favCurrentIdx * angleStep}deg)`;
  updateFavInfo(favCurrentIdx);
  document.querySelectorAll('.fav-3d-card').forEach((c, i) => {
    c.classList.toggle('fav-active', i === favCurrentIdx);
  });
}

function updateFavInfo(idx) {
  const item = FAV_ITEMS[idx];
  const el = document.getElementById('favActiveInfo');
  if (!el || !item) return;
  // Build icon element with fallback
  const iconImg = document.createElement('img');
  iconImg.className = 'fav-info-icon';
  iconImg.src = item.icon;
  iconImg.alt = item.name + ' 图标';
  iconImg.loading = 'lazy';
  iconImg.onerror = function () {
    const fb = document.createElement('div');
    fb.className = 'fav-info-fallback';
    fb.textContent = item.name[0];
    this.replaceWith(fb);
  };
  el.innerHTML = '';
  el.appendChild(iconImg);
  el.insertAdjacentHTML('beforeend', `
    <div class="fav-info-name">${item.name}</div>
    <div class="fav-info-reason">${item.reason}</div>
    <span class="fav-info-tag">${item.tag}</span>
  `);
}

function startFavAuto() {
  clearInterval(favAutoTimer);
  favAutoTimer = setInterval(() => rotateFavTo(favCurrentIdx + 1), 2800);
}

document.getElementById('favPrev')?.addEventListener('click', () => {
  clearInterval(favAutoTimer);
  rotateFavTo(favCurrentIdx - 1);
  startFavAuto();
});
document.getElementById('favNext')?.addEventListener('click', () => {
  clearInterval(favAutoTimer);
  rotateFavTo(favCurrentIdx + 1);
  startFavAuto();
});

// Pause auto-rotate on hover
document.querySelector('.fav-stage-wrap')?.addEventListener('mouseenter', () => clearInterval(favAutoTimer));
document.querySelector('.fav-stage-wrap')?.addEventListener('mouseleave', () => startFavAuto());

const favObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      buildFavCarousel();
      rotateFavTo(0);
      startFavAuto();
      favObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
const favSection = document.getElementById('favorites');
if (favSection) favObs.observe(favSection);

window.addEventListener('resize', () => {
  const carousel = document.getElementById('favCarousel');
  if (!carousel || !carousel.children.length) return;
  const radius = getCarouselRadius();
  const angleStep = 360 / FAV_ITEMS.length;
  Array.from(carousel.children).forEach((card, i) => {
    card.style.transform = `rotateY(${angleStep * i}deg) translateZ(${radius}px)`;
  });
  rotateFavTo(favCurrentIdx);
});

/* ====== Back to Top Button ====== */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
});
if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ====== Achievement Items Expand / Collapse ====== */
document.querySelectorAll('.achievement-item').forEach(item => {
  item.addEventListener('click', function () {
    const wasExpanded = this.classList.contains('ach-expanded');
    document.querySelectorAll('.achievement-item').forEach(i => i.classList.remove('ach-expanded'));
    if (!wasExpanded) this.classList.add('ach-expanded');
  });
});

/* ====== Contact Form ====== */
function handleSubmit() {
  const btn = document.getElementById('submitBtn');
  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const topic = document.getElementById('fTopic').value;
  const msg = document.getElementById('fMsg').value.trim();

  if (!name || !email || !msg) {
    btn.style.background = '#ef4444';
    btn.textContent = '请填写完整信息';
    setTimeout(() => {
      btn.style.background = '';
      btn.innerHTML = '发送消息 ➤';
    }, 2000);
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '发送中...';

  const templateParams = {
    name: name,
    email: email,
    topic: topic || '未选择',
    message: msg,
    time: new Date().toLocaleString('zh-CN')
  };

  emailjs.send('service_tzx8w0e', 'template_4vna8ai', templateParams)
    .then(function(response) {
      btn.innerHTML = '✓ 发送成功！即将联系您';
      btn.classList.add('sent');
      setTimeout(() => {
        btn.classList.remove('sent');
        btn.innerHTML = '发送消息 ➤';
        btn.disabled = false;
        ['fName', 'fEmail', 'fMsg', 'fTopic'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      }, 3000);
    }, function(error) {
      console.error('EmailJS 发送失败:', error);
      console.error('错误信息:', error.text || '未知错误');
      btn.style.background = '#ef4444';
      btn.innerHTML = '发送失败，请重试';
      setTimeout(() => {
        btn.style.background = '';
        btn.innerHTML = '发送消息 ➤';
        btn.disabled = false;
      }, 3000);
    });
}
