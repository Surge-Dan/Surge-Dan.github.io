/* ====== Theme Toggle ====== */
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

function getTheme() { return html.getAttribute('data-theme'); }
function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  if (themeBtn) themeBtn.innerHTML = '';
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
    menuBtn.setAttribute('aria-expanded', String(drawerOpen));
  });
}
function closeDrawer() {
  drawerOpen = false;
  if (drawer) drawer.classList.remove('open');
  if (menuBtn) menuBtn.textContent = '☰';
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
}
drawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));

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
    document.querySelectorAll('.project-card').forEach(c => {
      c.classList.remove('expanded');
      c.querySelector('.project-expand-btn')?.setAttribute('aria-expanded', 'false');
    });
    if (!isExpanded) {
      this.classList.add('expanded');
      this.querySelector('.project-expand-btn')?.setAttribute('aria-expanded', 'true');
    }
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
  
  // 检查是否为移动设备
  const isMobile = window.innerWidth <= 768;
  
  FAV_ITEMS.forEach((item, i) => {
    const angle = angleStep * i;
    const card = document.createElement('div');
    card.className = 'fav-3d-card';
    card.dataset.index = i;
    
    const iconEl = document.createElement('img');
    iconEl.className = 'fav-3d-icon';
    iconEl.src = item.icon;
    iconEl.alt = item.name + ' 图标';
    iconEl.loading = 'eager';
    iconEl.style.imageRendering = 'auto';
    iconEl.decoding = 'sync';
    iconEl.width = 52;
    iconEl.height = 52;
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
    
    // 移动设备优化：简化3D效果
    if (isMobile) {
      card.style.transform = `translateZ(${radius}px)`;
    } else {
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    }
    
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
  
  // 检查是否为移动设备
  const isMobile = window.innerWidth <= 768;
  
  if (carousel) {
    if (isMobile) {
      // 移动设备：简化3D效果，只显示当前卡片
      carousel.style.transform = 'rotateY(0deg)';
      // 移动设备：隐藏其他卡片，只显示当前卡片
      document.querySelectorAll('.fav-3d-card').forEach((c, i) => {
        if (i === favCurrentIdx) {
          c.style.display = 'flex';
          c.style.opacity = '1';
          c.style.transform = 'translateZ(100px)';
        } else {
          c.style.display = 'none';
        }
      });
    } else {
      // 桌面设备：保持完整3D效果
      carousel.style.transform = `rotateY(${-favCurrentIdx * angleStep}deg)`;
      document.querySelectorAll('.fav-3d-card').forEach((c, i) => {
        c.style.display = 'flex';
        c.style.opacity = '1';
        c.style.transform = `rotateY(${angleStep * i}deg) translateZ(${getCarouselRadius()}px)`;
      });
    }
  }
  
  updateFavInfo(favCurrentIdx);
  document.querySelectorAll('.fav-3d-card').forEach((c, i) => {
    c.classList.toggle('fav-active', i === favCurrentIdx);
  });
}

function updateFavInfo(idx) {
  const item = FAV_ITEMS[idx];
  const el = document.getElementById('favActiveInfo');
  if (!el || !item) return;
  const iconImg = document.createElement('img');
  iconImg.className = 'fav-info-icon';
  iconImg.src = item.icon;
  iconImg.alt = item.name + ' 图标';
  iconImg.loading = 'lazy';
  iconImg.decoding = 'sync';
  iconImg.width = 68;
  iconImg.height = 68;
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
  const toggleAchievement = function () {
    const wasExpanded = this.classList.contains('ach-expanded');
    document.querySelectorAll('.achievement-item').forEach(i => i.classList.remove('ach-expanded'));
    document.querySelectorAll('.achievement-item').forEach(i => i.setAttribute('aria-expanded', 'false'));
    if (!wasExpanded) {
      this.classList.add('ach-expanded');
      this.setAttribute('aria-expanded', 'true');
    }
  };
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-expanded', 'false');
  item.addEventListener('click', toggleAchievement);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAchievement.call(item);
    }
  });
});

/* ====== Contact Form ====== */
function handleSubmit() {
  const btn = document.getElementById('submitBtn');
  const status = document.getElementById('submitStatus');
  const name = document.getElementById('fName').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  const topic = document.getElementById('fTopic').value;
  const msg = document.getElementById('fMsg').value.trim();

  if (!name || !email || !msg) {
    if (status) status.textContent = '请填写姓名、邮箱和留言';
    btn.style.background = '#ef4444';
    btn.textContent = '请填写完整信息';
    setTimeout(() => {
      btn.style.background = '';
      btn.innerHTML = '发送消息 ➤';
    }, 2000);
    return;
  }

  btn.disabled = true;
  if (status) status.textContent = '正在发送消息';
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
      if (status) status.textContent = '消息发送成功';
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
      if (status) status.textContent = '消息发送失败，请重试';
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

document.getElementById('submitBtn')?.addEventListener('click', handleSubmit);

/* ====== Unified Tabler icon layer ======
   Paths are from the Tabler Icons outline set; keeping the small subset inline
   avoids a second runtime dependency while preserving one consistent stroke voice.
*/
const SURFACE_ICON_PATHS = {
  briefcase: '<path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M12 12v.01"/><path d="M3 13a20 20 0 0 0 18 0"/>',
  school: '<path d="M22 9 12 5 2 9l10 4 10-4v6"/><path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4"/>',
  brain: '<path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"/><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8"/><path d="M17.5 16a3.5 3.5 0 0 0 0-7h-.5"/><path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0"/><path d="M6.5 16a3.5 3.5 0 0 1 0-7H7"/><path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10"/>',
  'chart-bar': '<path d="M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6"/><path d="M15 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9"/><path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5"/><path d="M4 20h14"/>',
  blocks: '<path d="M14 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4"/><path d="M3 14h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12"/>',
  mail: '<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  'map-pin': '<path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="m17.657 16.657-4.243 4.243a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/>',
  'brand-github': '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 4.8 5.4 5.1 5.4 5.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 11.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  sun: '<path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"/>',
  moon: '<path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3.008V3"/>',
  'arrow-up': '<path d="M12 5v14"/><path d="m18 11-6-6-6 6"/>',
  'chevron-left': '<path d="m15 6-6 6 6 6"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  'external-link': '<path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="m11 13 9-9M15 4h5v5"/>'
  ,sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/><path d="m19 3-.4 1.6L17 5l1.6.4L19 7l.4-1.6L21 5l-1.6-.4L19 3Z"/>'
  ,coffee: '<path d="M5 8h10v5a5 5 0 0 1-10 0V8Z"/><path d="M15 10h2a3 3 0 1 1 0 6h-2"/><path d="M3 21h18M6 4c0-1 .5-1.5 1-2M10 4c0-1 .5-1.5 1-2"/>'
  ,'layout-grid': '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>'
  ,code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>'
};

function renderSurfaceIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((host) => {
    const name = host.dataset.icon;
    const paths = SURFACE_ICON_PATHS[name];
    if (!paths) return;
    host.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
  });
}

function syncThemeIcon() {
  if (!themeBtn) return;
  themeBtn.innerHTML = `<span class="theme-icon" data-icon="${getTheme() === 'dark' ? 'sun' : 'moon'}" aria-hidden="true"></span>`;
  themeBtn.setAttribute('aria-pressed', String(getTheme() === 'dark'));
  renderSurfaceIcons(themeBtn);
}

renderSurfaceIcons();
syncThemeIcon();
themeBtn?.addEventListener('click', () => setTimeout(syncThemeIcon, 0));
