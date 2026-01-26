// --- 1. 数据配置区域 (你可以随时修改这里) ---

const navItems = [
    { label: "关于", href: "#hero" },
    { label: "项目", href: "#projects" },
    { label: "科研", href: "#research" },
    { label: "产品", href: "#products" },
    { label: "哲思", href: "#philosophy" },
    { label: "荣誉", href: "#awards" },
    { label: "联系", href: "#contact" },
];

const skills = ["Python", "PyTorch", "深度学习", "多模态分析", "推荐系统", "数据挖掘"];

const photos = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
];

const projects = [
    { id: 1, title: "综测通", subtitle: "大学生实时信息共享系统", description: "打通高校综测管理系统与学生信息差，简化期末综测申报和管理流程，为用户节省时间。负责推荐算法设计、用户数据分析及项目申报书撰写。", role: "算法设计员", date: "2023.03", tags: ["推荐算法", "用户分析", "小程序"] },
    { id: 2, title: "预制菜市场调研", subtitle: "基于广东省一线城市的深度分析", description: "研究一线城市预制菜BC端市场潜力，挖掘消费者行为，完成近50页社会调查报告。使用SPSS、Stata等工具进行数据分析与挖掘。", role: "负责人", date: "2023.03", tags: ["数据分析", "市场调研", "SPSS"] },
    { id: 3, title: "聆心湾", subtitle: "后疫情时代线上特殊人群暖心项目", description: "调研特殊聋哑群体的实际需求，打造针对性OpenCare专栏。以AI语言交流循环链为载体，致力于缓和聋哑群体与普通群体的隔阂。", role: "负责人", date: "2022.03", tags: ["AI交互", "社会公益", "产品设计"] },
    { id: 4, title: "青梦", subtitle: "零碳青年发声行动项目", description: "以双碳政策为驱使，打造低碳协会品牌+第二课堂双轮驱动模式。推动文化资源与新技术跨界融合，引领国内低碳生活新潮。", role: "负责人", date: "2022.03", tags: ["双碳", "品牌设计", "公益"] },
    { id: 5, title: "游客易", subtitle: "基于云开发的旅游便民小程序", description: "面向旅游服务业，搭建导游和游客间沟通的桥梁，便于导游进行团队统一管理，提升游客旅行体验。负责需求分析和用户数据分析。", role: "需求分析员", date: "2022.03", tags: ["云开发", "需求分析", "小程序"] },
];

const papers = [
    { id: 1, title: "High-Order Collaborative Filtering for Third-Party Library Recommendation", venue: "ICWS 2023", level: "CCF-B | 国际顶级会议", role: "第二作者", description: "基于App和第三方库间的关联信息，使用超图神经网络提取高阶邻域信息，服务于实际场景中的第三方库推荐任务。相比其他baseline获得了较好的提升效果。", contributions: ["数据处理", "模型搭建", "论文撰写", "实验工作"], date: "2023.09" },
    { id: 2, title: "A New Debleeding Algorithm for Image colorization", venue: "ICCECE 2023", level: "国际学术会议", role: "第二作者", description: "提出一种新颖的着色优化算法，减少了图像边缘处的渗色现象，完成部分算法实现以及实验工作。", contributions: ["算法实现", "实验设计", "论文撰写"], date: "2023.06" },
    { id: 3, title: "面向双层次选址路径问题的多任务强化演化优化方法研究", venue: "控制工程", level: "北大核心期刊", role: "学生一作", description: "将强化学习以及演化算法应用于LRP问题，提出一种有效提高物流配送效率的优化方法，降低了双层物流系统的运输成本。", contributions: ["方法设计", "算法实现", "论文撰写"], date: "2023.04" },
];

const patents = [
    { title: "溯古——华夏旅游文创IP平台", type: "软著" },
    { title: "游客易平台", type: "软著" },
    { title: "一种基于高阶协同过滤的第三方库推荐方法及装置", type: "专利" },
];

const products = [
    { id: 1, name: "Notion", category: "效率工具", reason: "模块化设计理念，将复杂的信息管理变得优雅而有序", insight: "好的产品应当让用户感到掌控感，而非被工具所困" },
    { id: 2, name: "Figma", category: "设计工具", reason: "协作式设计重新定义了创意工作流，让设计不再是孤岛", insight: "协作不是妥协，而是让每个人的创意都能被看见" },
    { id: 3, name: "ChatGPT", category: "AI助手", reason: "对话式交互降低了AI使用门槛，让技术真正服务于人", insight: "最好的AI是让人感受不到AI存在的AI" },
    { id: 4, name: "Obsidian", category: "知识管理", reason: "本地优先的设计理念，让知识真正属于自己", insight: "知识的价值在于连接，而非堆积" },
    { id: 5, name: "Linear", category: "项目管理", reason: "极致的性能体验证明了B端产品也可以很美", insight: "速度不仅是功能，更是一种尊重用户时间的态度" },
    { id: 6, name: "Arc Browser", category: "浏览器", reason: "重新想象浏览器，证明了成熟品类仍有创新空间", insight: "打破常规需要勇气，但真正的创新来自深刻理解用户" },
];

const philosophies = [
    { id: 1, title: "活如鱼龙，静如山水", content: "这是我对自己的期许——在需要行动时如鱼龙般灵活敏捷，在需要沉淀时如山水般宁静深远。动静之间，寻找平衡。", category: "人生态度" },
    { id: 2, title: "深度优先的学习方法", content: "面对知识的海洋，我选择深度优先而非广度优先。在一个领域扎根，直到能够触及本质，然后再向外延伸。真正的理解来自于深入。", category: "学习方法" },
    { id: 3, title: "以用户为中心的产品思维", content: "好的产品不是功能的堆砌，而是对用户需求的深刻理解。每一个设计决策都应该回答：这对用户有什么价值？", category: "产品思维" },
    { id: 4, title: "技术服务于人", content: "技术的终极目标不是技术本身，而是让人们的生活变得更好。AI应该增强人的能力，而非取代人的价值。", category: "技术观" },
    { id: 5, title: "持续迭代的成长观", content: "完美不是终点，而是持续改进的过程。每一次失败都是下一次成功的垫脚石，每一次反馈都是成长的机会。", category: "成长观" },
];

const contactData = [
    { icon: 'mail', label: "Email", value: "2258578648@qq.com", href: "mailto:2258578648@qq.com" },
    { icon: 'phone', label: "Phone", value: "159 1388 1857", href: "tel:15913881857" },
    { icon: 'github', label: "GitHub", value: "Surge-Dan", href: "https://github.com/Surge-Dan" },
];

// --- 2. 逻辑渲染区域 (不要随意改动) ---

function init() {
    renderNav();
    renderHero();
    renderProjects();
    renderPapers();
    renderPatents();
    renderProducts();
    renderPhilosophy();
    renderContacts();
    
    // 初始化图标
    if (window.lucide) window.lucide.createIcons();
    
    // 入场动画
    setTimeout(() => {
        const text = document.getElementById('hero-text');
        const gallery = document.getElementById('hero-gallery');
        if (text) text.classList.remove('opacity-0', 'translate-y-8');
        if (gallery) gallery.classList.remove('opacity-0', 'translate-y-8');
    }, 100);

    // 滚动监听
    window.addEventListener('scroll', handleScroll);
}

// 导航栏渲染与逻辑
function renderNav() {
    const container = document.getElementById('nav-links');
    const mobileContainer = document.getElementById('mobile-nav-links');
    
    if (container) {
        container.innerHTML = navItems.map(item => `
            <button onclick="scrollToSection('${item.href.substring(1)}')" class="nav-item relative text-sm tracking-wide transition-all duration-300 group overflow-hidden px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground" data-section="${item.href.substring(1)}">
                <span class="relative z-10">${item.label}</span>
                <span class="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <span class="active-dot absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full hidden"></span>
            </button>
        `).join('');
    }
    
    if (mobileContainer) {
        mobileContainer.innerHTML = navItems.map(item => `
            <button onclick="scrollToSection('${item.href.substring(1)}'); toggleMobileMenu()" class="text-left text-sm tracking-wide transition-colors text-muted-foreground hover:text-primary">
                ${item.label}
            </button>
        `).join('');
    }
}

// 页面滚动跳转
window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// 移动端菜单切换
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// 滚动监听与导航高亮
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-border');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-border');
        navbar.classList.add('bg-transparent');
    }

    const sections = navItems.map(i => i.href.substring(1));
    let current = '';
    for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
            current = section;
        }
    }
    
    document.querySelectorAll('.nav-item').forEach(btn => {
        const dot = btn.querySelector('.active-dot');
        if (btn.dataset.section === current) {
            btn.classList.add('text-primary');
            btn.classList.remove('text-muted-foreground');
            if (dot) dot.classList.remove('hidden');
        } else {
            btn.classList.remove('text-primary');
            btn.classList.add('text-muted-foreground');
            if (dot) dot.classList.add('hidden');
        }
    });
}

// Hero 区域逻辑
let currentPhotoIndex = 0;
function renderHero() {
    const skillsContainer = document.getElementById('hero-skills');
    if (skillsContainer) {
        skillsContainer.innerHTML = skills.map((skill, index) => `
            <span class="relative px-4 py-2 text-xs tracking-wide border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default group overflow-hidden" style="animation-delay: ${index * 100}ms">
                <span class="relative z-10">${skill}</span>
                <span class="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </span>
        `).join('');
    }

    updatePhotoGallery();
    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        updatePhotoGallery();
    }, 4000);
}

window.updatePhotoGallery = function() {
    const container = document.getElementById('photo-container');
    const indicators = document.getElementById('photo-indicators');
    
    if (container) {
        container.innerHTML = photos.map((photo, index) => `
            <div class="absolute inset-0 transition-all duration-1000 ${index === currentPhotoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="${photo}" class="w-full h-full object-cover" alt="">
                <div class="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
        `).join('');
    }

    if (indicators) {
        indicators.innerHTML = photos.map((_, index) => `
            <button onclick="currentPhotoIndex = ${index}; updatePhotoGallery()" class="h-0.5 transition-all duration-300 ${index === currentPhotoIndex ? 'w-8 bg-primary' : 'w-4 bg-foreground/30 hover:bg-foreground/50'}"></button>
        `).join('');
    }
}

// 项目渲染逻辑
window.highlightProject = function(el) {
    const all = document.querySelectorAll('#projects-list > div');
    all.forEach(item => {
        if (item !== el) item.classList.add('opacity-30');
    });
    el.classList.remove('opacity-80');
    if (window.lucide) window.lucide.createIcons();
}

window.resetProjects = function() {
    const all = document.querySelectorAll('#projects-list > div');
    all.forEach(item => {
        item.classList.remove('opacity-30');
        item.classList.add('opacity-80');
    });
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    if (container) {
        container.innerHTML = projects.map(p => `
            <div class="group relative py-8 border-t border-border transition-all duration-500 cursor-pointer hover:opacity-100 opacity-80" onmouseenter="highlightProject(this)" onmouseleave="resetProjects()">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mx-6 px-6"></div>
                <div class="grid md:grid-cols-12 gap-6 items-start relative z-10">
                    <div class="md:col-span-2 text-sm text-muted-foreground font-serif italic">${p.date}</div>
                    <div class="md:col-span-4">
                        <h3 class="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-all duration-300 flex items-center gap-2">
                            ${p.title}
                            <i data-lucide="arrow-up-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"></i>
                        </h3>
                        <p class="text-sm text-muted-foreground mt-1">${p.subtitle}</p>
                    </div>
                    <div class="md:col-span-4">
                        <p class="text-sm text-muted-foreground leading-relaxed">${p.description}</p>
                    </div>
                    <div class="md:col-span-2 flex flex-col items-start gap-2">
                        <span class="text-xs text-primary border border-primary/30 px-2 py-1">${p.role}</span>
                        <div class="flex flex-wrap gap-1 mt-2">
                            ${p.tags.map(t => `<span class="text-xs text-muted-foreground">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 论文渲染与交互
let expandedPaperId = null;
window.togglePaper = function(id) {
    expandedPaperId = expandedPaperId === id ? null : id;
    renderPapers();
}

function renderPapers() {
    const container = document.getElementById('papers-list');
    if (container) {
        container.innerHTML = papers.map(p => {
            const isExpanded = expandedPaperId === p.id;
            return `
            <div onclick="togglePaper(${p.id})" class="relative border border-border bg-background p-6 transition-all duration-500 cursor-pointer group overflow-hidden ${isExpanded ? 'border-primary/50 shadow-lg shadow-primary/5' : 'hover:border-primary/30 hover:shadow-md'}">
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>
                <div class="flex items-start justify-between gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="text-xs text-primary border border-primary/30 px-2 py-0.5">${p.role}</span>
                            <span class="text-xs text-muted-foreground">${p.date}</span>
                        </div>
                        <h3 class="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">${p.title}</h3>
                        <div class="flex items-center gap-4 text-sm">
                            <span class="text-primary">${p.venue}</span>
                            <span class="text-muted-foreground">${p.level}</span>
                        </div>
                    </div>
                    <i data-lucide="file-text" class="w-5 h-5 text-muted-foreground flex-shrink-0"></i>
                </div>
                <div class="overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}">
                    <div class="pt-6 border-t border-border">
                        <p class="text-muted-foreground text-sm leading-relaxed mb-4">${p.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${p.contributions.map(c => `<span class="text-xs text-muted-foreground border border-border px-2 py-1">${c}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `}).join('');
        if (window.lucide) window.lucide.createIcons();
    }
}

function renderPatents() {
    const container = document.getElementById('patents-list');
    if (container) {
        container.innerHTML = patents.map(p => `
            <div class="relative border border-border bg-background p-4 hover:border-primary/30 transition-all duration-300 group overflow-hidden hover:shadow-md hover:-translate-y-0.5 cursor-default">
                <div class="flex items-start justify-between gap-2">
                    <div>
                        <span class="text-xs text-primary mb-2 block">${p.type}</span>
                        <p class="text-sm text-foreground">${p.title}</p>
                    </div>
                    <i data-lucide="external-link" class="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
            </div>
        `).join('');
    }
}

// 产品渲染逻辑
let activeProduct = null;
window.setActiveProduct = function(id) {
    activeProduct = id;
    renderProducts();
}

function renderProducts() {
    const container = document.getElementById('products-list');
    if (container) {
        container.innerHTML = products.map(p => {
            const isActive = activeProduct === p.id;
            return `
            <div onmouseenter="setActiveProduct(${p.id})" onmouseleave="setActiveProduct(null)" 
                 class="group relative border border-border p-6 transition-all duration-500 cursor-pointer overflow-hidden ${isActive ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/10 scale-[1.02]' : 'bg-background hover:border-primary/20 hover:shadow-md'}">
                <div class="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 rounded-sm ${isActive ? 'opacity-100' : ''}"></div>
                <div class="flex items-start justify-between mb-4">
                    <div>
                        <h3 class="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors relative z-10">${p.name}</h3>
                        <span class="text-xs text-muted-foreground">${p.category}</span>
                    </div>
                    <i data-lucide="heart" class="w-4 h-4 transition-all duration-300 ${isActive ? 'text-primary fill-primary' : 'text-muted-foreground'}"></i>
                </div>
                <p class="text-sm text-muted-foreground leading-relaxed mb-4">${p.reason}</p>
                <div class="overflow-hidden transition-all duration-500 ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}">
                    <div class="pt-4 border-t border-border">
                        <div class="flex items-start gap-2">
                            <i data-lucide="sparkles" class="w-3 h-3 text-primary mt-1 flex-shrink-0"></i>
                            <p class="text-xs text-primary italic">${p.insight}</p>
                        </div>
                    </div>
                </div>
            </div>
        `}).join('');
        if (window.lucide) window.lucide.createIcons();
    }
}

// 哲思板块逻辑
let activePhiloIndex = 0;
window.setPhiloIndex = function(index) {
    activePhiloIndex = index;
    renderPhilosophy();
}

function renderPhilosophy() {
    const nav = document.getElementById('philosophy-nav');
    const content = document.getElementById('philosophy-content');

    if (nav) {
        nav.innerHTML = philosophies.map((item, index) => {
            const isActive = activePhiloIndex === index;
            return `
            <button onclick="setPhiloIndex(${index})" class="w-full text-left p-4 border transition-all duration-300 relative overflow-hidden group ${isActive ? 'border-primary bg-primary/5 shadow-sm' : 'border-transparent hover:border-border'}">
                <span class="absolute left-0 top-0 bottom-0 w-0.5 bg-primary transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}"></span>
                <span class="text-xs text-primary block mb-1">${item.category}</span>
                <span class="text-sm transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}">${item.title}</span>
            </button>
        `}).join('');
    }

    if (content) {
        content.innerHTML = philosophies.map((item, index) => {
            const isActive = activePhiloIndex === index;
            return `
            <div class="absolute inset-0 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}">
                <div class="h-full flex flex-col justify-center">
                    <span class="text-primary text-sm tracking-widest uppercase mb-4">${item.category}</span>
                    <h3 class="text-3xl lg:text-4xl font-serif font-medium text-foreground mb-6">${item.title}</h3>
                    <p class="text-lg text-muted-foreground leading-relaxed max-w-xl">${item.content}</p>
                    <div class="absolute top-0 right-0 text-9xl text-primary/5 font-serif select-none">"</div>
                </div>
            </div>
        `}).join('');
    }
}

// 联系方式逻辑
let copiedIndex = null;
window.copyContact = function(text, index) {
    navigator.clipboard.writeText(text);
    copiedIndex = index;
    renderContacts();
    setTimeout(() => {
        copiedIndex = null;
        renderContacts();
    }, 2000);
}

function renderContacts() {
    const container = document.getElementById('contact-list');
    if (container) {
        container.innerHTML = contactData.map((c, i) => {
            const isCopied = copiedIndex === i;
            return `
            <div class="group flex items-center justify-between p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:bg-primary/5 relative overflow-hidden">
                <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                <div class="flex items-center gap-4">
                    <i data-lucide="${c.icon}" class="w-5 h-5 text-primary"></i>
                    <div>
                        <span class="text-xs text-muted-foreground block">${c.label}</span>
                        <a href="${c.href}" target="${c.label === 'GitHub' ? '_blank' : ''}" class="text-foreground hover:text-primary transition-colors">${c.value}</a>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="copyContact('${c.value}', ${i})" class="p-2 transition-colors ${isCopied ? 'text-primary' : 'text-muted-foreground hover:text-primary'}">
                        <i data-lucide="${isCopied ? 'check' : 'copy'}" class="w-4 h-4"></i>
                    </button>
                    <a href="${c.href}" target="_blank" class="p-2 text-muted-foreground hover:text-primary transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        `}).join('');
        if (window.lucide) window.lucide.createIcons();
    }
}

// 启动程序
window.addEventListener('DOMContentLoaded', init);
