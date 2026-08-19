const assert = require('node:assert/strict');
const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

for (const id of ['hero', 'about', 'work', 'projects', 'skills', 'favorites', 'contact']) {
  assert.match(html, new RegExp(`id="${id}"`), `missing section ${id}`);
}

assert.match(html, /class="hero-oil-scene"/);
assert.match(html, /feTurbulence/);
assert.match(html, /id="heroName"/);
assert.match(html, /class="hb-card hb-photo/);
assert.match(html, /id="favCarousel"/);
assert.match(js, /className = 'fav-3d-card'/);
assert.match(html, /id="themeToggle"/);
assert.match(html, /id="navDrawer"/);
assert.match(html, /meta name="theme-color"/);

// Icon and interaction contracts for the visual cleanup.
assert.doesNotMatch(html, /[\u{1F300}-\u{1FAFF}\u{1F1E6}-\u{1F1FF}]/u);
assert.match(html, /class="icon icon-briefcase"/);
assert.match(html, /class="icon icon-graduation-cap"/);
assert.match(html, /data-icon="sparkles"/);
assert.match(html, /data-icon="layout-grid"/);
assert.match(html, /data-icon="code"/);
assert.match(html, /class="hb-card hb-impact glass-card/);
assert.match(html, /如有合适机会，随时可入职/);
assert.doesNotMatch(html, /class="hb-card hb-cta/);
assert.match(html, /20万/);
assert.match(html, /上百个需求/);
assert.match(html, /AI助手等<strong>6款<\/strong>产品/);
assert.match(html, /在联通，我有幸接触到一个很大的平台/);
assert.match(html, /做B端产品，一定要考虑市场和盈利/);
assert.match(html, /<span>AI产品<\/span><span>数据驱动<\/span><span>全链路管理<\/span><span>20万用户<\/span>/);
assert.doesNotMatch(html, /<span class="hero-tag">AI 产品专家<\/span>/);
assert.doesNotMatch(html, /<span class="hero-tag">AI 乐观派<\/span>/);
assert.match(html, /<span class="hero-tag">Vibe Coding<\/span>/);

// Skills page stays aligned with the latest work metrics and typography spacing.
assert.match(html, /<h2 class="section-title">能力矩阵：<br><em>品味<\/em><em>判断力<\/em>与<em>技术深度<\/em><\/h2>/);
assert.match(html, /PRD编写.*独立处理100\+需求，提单效率提升150%/);
assert.match(html, /复杂系统架构（10W\+级CRM）/);
assert.match(html, /Figma·设计与原型/);
assert.match(html, /PRD·需求文档撰写/);
assert.match(html, /<div class="sh-value">20W<\/div>\s*<div class="sh-label">带动用户规模<\/div>/);
assert.match(html, /<div class="sh-value amber">100\+<\/div>\s*<div class="sh-label">累计解决需求<\/div>/);
assert.match(html, /<div class="sh-value">10W\+<\/div>\s*<div class="sh-label">活跃用户<\/div>/);
assert.match(html, /<div class="sh-value amber">150%<\/div>\s*<div class="sh-label">业务效率提升<\/div>/);
assert.doesNotMatch(html, /<div class="sh-value">10w\+<\/div>/);
assert.doesNotMatch(html, /独立推进 50\+ 需求/);

// Projects page content and surface contracts.
assert.match(html, /<span class="icon" data-icon="briefcase" aria-hidden="true"><\/span>通信产品/);
assert.match(html, /<div class="project-name">AI助手 · 全生命周期建设<\/div>/);
assert.match(html, /<div class="stat-num">~10W<\/div><div class="stat-label">带动用户<\/div>/);
assert.match(css, /#projects \.blob-layer \{ display: none; \}/);
assert.match(css, /section#projects:not\(#hero\) \.project-card \{[\s\S]*box-shadow: inset 0 1px 0/);
assert.match(css, /#projects \.project-card-detail \{ background: transparent !important; \}/);
assert.match(css, /\[class\^="ts-"\],[\s\S]*\[class\*=" ts-"\]/);
assert.doesNotMatch(css, /\[class\*="ts-"\]\s*\{/);

// Work experience content contracts.
assert.match(html, /负责联通云犀平台6款实体卡产品的上线和运营/);
assert.match(html, /累计带动用户规模近20万，收入超百万，助力云犀业务实现ToC创新发展/);
assert.match(html, /<div class="metric-value-inner">20W<\/div>/);
assert.match(html, /<div class="metric-label">累计解决需求<\/div>/);
assert.match(html, /<div class="metric-value-inner amber">10W\+<\/div>/);
assert.match(html, /<div class="metric-label">业务效率提升<\/div>/);
assert.match(html, /AI助手·标杆产品/);
assert.match(html, /为云犀产品体系在C端建立稳定触点/);
assert.match(html, /呼叫顺振·全生命周期建设/);
assert.match(html, /实现云犀在实体卡-固话融合领域的突破/);
assert.match(html, /共计解决100余个独立需求/);
assert.match(html, /提单效率提升150%/);
for (const value of ['~20W用户', '100+页', '10W+', '提升150%', '缩短60%', '100+个']) {
  assert.match(html, new RegExp(value.replace(/[+]/g, '\\+')));
}
assert.match(html, /累计输出小程序与Web端原型100余张/);
assert.match(html, /上线后已突破10万用户/);
assert.match(html, /产品上线后持续打通复杂业务订购流程，累计用户量近10w/);
assert.match(html, /会员权益体系打造·订购逻辑重构/);
assert.match(html, /拓展云犀在C端场景中的用户覆盖/);
assert.match(html, /产品运营·营销增长/);
assert.match(html, /大型培训近20场/);
assert.match(html, /ARPU值提升16%/);
assert.match(html, /class="project-expand-btn"[^>]*type="button"/);
assert.match(html, /id="favPrev"[^>]*aria-label=/);
assert.match(html, /id="favNext"[^>]*aria-label=/);
assert.match(html, /for="fName"/);
assert.match(html, /for="fEmail"/);
assert.match(html, /for="fTopic"/);
assert.match(html, /for="fMsg"/);
assert.match(html, /id="fName"[^>]*name="name"[^>]*autocomplete="name"/);
assert.match(html, /id="fEmail"[^>]*name="email"[^>]*autocomplete="email"/);
assert.match(html, /target="_blank"[^>]*rel="noopener noreferrer"/);
assert.doesNotMatch(html, /onclick=/, 'inline event handlers should be removed');

assert.match(css, /#hero\s*\{/);
assert.match(css, /\.hero-oil-scene/);
assert.match(css, /\.hero-oil-scene::after/);
assert.match(css, /mask-image:\s*linear-gradient/);
assert.match(css, /section:not\(#hero\)/);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /:focus-visible/);
assert.doesNotMatch(css, /background-image:\s*url\(\s*["']https?:/i);
assert.doesNotMatch(css, /transition:\s*all/i);
assert.match(css, /--color-paper/);
assert.match(css, /--color-clay/);
assert.match(fs.readFileSync('tokens.css', 'utf8'), /color-scheme:\s*light/);
assert.match(css, /\.icon\s*\{/);
assert.match(css, /@media \(min-width: 961px\)/);
assert.match(css, /grid-template-areas:[\s\S]*"name\s+photo\s+impact"/);
assert.match(css, /#about \.tl-card\.edu::before/);
assert.doesNotMatch(css, /animation:\s*pc-float/);

assert.match(js, /IntersectionObserver/);
assert.match(js, /setTheme/);
assert.match(js, /favCurrentIdx/);
assert.match(js, /startFavAuto/);
assert.match(js, /className = 'fav-3d-icon'/);
assert.match(js, /iconEl\.src = item\.icon/);

console.log('PASS original sections, code-generated oil Hero, theme, carousel, motion, and no-image contract');
