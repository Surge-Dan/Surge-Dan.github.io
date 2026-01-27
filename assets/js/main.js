// --- 数据源 ---
const photos = [
    "https://pic1.imgdb.cn/item/697783c29c48e6126bdac6fd.jpg",
    "https://pic1.imgdb.cn/item/69778433a583b567209bc8a2.jpg",
    "https://pic1.imgdb.cn/item/69778433a583b567209bc8a1.jpg"
];

const projects = [
    { id: 1, title: "综测通", subtitle: "大学生实时信息共享系统", description: "打通高校综测管理系统与学生信息差，简化期末综测申报和管理流程。负责推荐算法设计、用户数据分析及项目申报书撰写。", role: "算法设计员", date: "2023.03", tags: ["推荐算法", "用户分析", "小程序"] },
    { id: 2, title: "预制菜市场调研", subtitle: "基于广东省一线城市的深度分析", description: "研究一线城市预制菜BC端市场潜力，挖掘消费者行为，完成近50页社会调查报告。使用SPSS、Stata等工具进行数据分析与挖掘。", role: "负责人", date: "2023.03", tags: ["数据分析", "市场调研", "SPSS"] },
    { id: 3, title: "Bounce 弹跳", subtitle: "独立音乐演出资讯平台", description: "打造“社交+音乐+演出”社区，解决流量分散痛点。组建800+人社群，验证了垂类社区的用户粘性。", role: "负责人", date: "2022.06", tags: ["产品孵化", "社区运营", "0-1"] },
    { id: 4, title: "聆心湾", subtitle: "特殊人群暖心项目", description: "调研聋哑群体需求，打造OpenCare专栏。以AI语言交流循环链为载体，致力于缓和群体隔阂。", role: "负责人", date: "2022.03", tags: ["AI交互", "社会公益", "产品设计"] },
    { id: 5, title: "游客易", subtitle: "旅游便民小程序", description: "链接导游与游客，构建团队管理、行程路线、位置共享等功能模块。采用Serverless云开发模式。", role: "核心骨干", date: "2022.03", tags: ["云开发", "需求分析", "小程序"] }
];

const papers = [
    { id: 1, title: "High-Order Collaborative Filtering", venue: "ICWS 2023", level: "CCF-B | 国际顶级会议", role: "第二作者", date: "2023.09", desc: "使用超图神经网络提取高阶邻域信息，解决推荐系统中的过平滑问题。" },
    { id: 2, title: "A New Debleeding Algorithm", venue: "ICCECE 2023", level: "国际学术会议", role: "第二作者", date: "2023.06", desc: "提出一种新颖的着色优化算法，减少图像边缘处的渗色现象。" },
    { id: 3, title: "面向双层次选址路径问题的优化研究", venue: "控制工程", level: "北大核心期刊", role: "学生一作", date: "2023.04", desc: "将强化学习及演化算法应用于LRP问题，降低物流系统运输成本。" }
];

const philosophies = [
    { id: 1, category: "人生态度", title: "活如鱼龙，静如山水", content: "这是我对自己的期许——在需要行动时如鱼龙般灵活敏捷，在需要沉淀时如山水般宁静深远。动静之间，寻找平衡。" },
    { id: 2, category: "学习方法", title: "深度优先的学习方法", content: "面对知识的海洋，我选择深度优先而非广度优先。在一个领域扎根，直到能够触及本质，然后再向外延伸。" },
    { id: 3, category: "产品思维", title: "以用户为中心", content: "好的产品不是功能的堆砌，而是对用户需求的深刻理解。每一个设计决策都应该回答：这对用户有什么价值？" }
];

const products = [
    { id: 1, name: "ChatGPT 5.2", cat: "AI助手", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc32.png", reason: "定义了自然语言交互的标准，不仅是工具，更是思维的延伸。", insight: "最好的AI是让人感受不到AI存在的AI。" },
    { id: 2, name: "Gemini 3", cat: "多模态", logoUrl: "https://pic1.imgdb.cn/item/69778d76a583b567209bcc37.png", reason: "原生多模态的长窗口记忆，处理复杂任务的得力助手。", insight: "多模态是AI理解世界的基石。" },
    { id: 3, name: "Flomo", cat: "碎片笔记", logoUrl: "https://pic1.imgdb.cn/item/69778d76a583b567209bcc36.png", reason: "无压力的记录方式，让稍纵即逝的灵感得以通过卡片沉淀。", insight: "记录的阻力越小，思考的价值越大。" },
    { id: 4, name: "思源笔记", cat: "知识管理", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc2e.png", reason: "本地优先+双向链接，构建安全且可控的个人知识网络。", insight: "知识的价值在于连接，而非堆积。" },
    { id: 5, name: "NotebookLM", cat: "AI研读", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc30.png", reason: "基于私有资料的精准问答，将文献阅读效率提升了数倍。", insight: "让AI成为你的私人研究助理。" },
    { id: 6, name: "CapWords", cat: "内容创作", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc33.png", reason: "精准的字幕对齐与视频处理，极大地释放了创作者的精力。", insight: "工具的意义在于解放创造力。" },
    { id: 7, name: "Podwise", cat: "音频转录", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc31.png", reason: "将播客音频转化为结构化知识，让听觉内容可被索引和复用。", insight: "让非结构化数据产生结构化价值。" },
    { id: 8, name: "Trae", cat: "智能IDE", logoUrl: "https://pic1.imgdb.cn/item/69778d56a583b567209bcc2f.png", reason: "AI Native的编程体验，让代码编写从‘敲击’变为‘生成’。", insight: "编程的本质是逻辑表达，而非代码输入。" }
];

// --- 状态管理 ---
let state = {
    hoveredProject: null,
    expandedPaper: null,
    activePhilo: 0,
    currentPhoto: 0,
    navScrolled: false,
    activeSection: 'hero-root',
    hoveredAward: null
};

// --- 1. 导航栏 ---
function renderNav() {
    const nav = document.getElementById('navbar-root');
    const bgClass = state.navScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent";
    
    const menuItems = [
        { id: 'hero-root', label: '关于' },
        { id: 'projects-root', label: '项目' },
        { id: 'research-root', label: '科研' },
        { id: 'products-root', label: '产品' },
        { id: 'philosophy-root', label: '哲思' },
        { id: 'awards-root', label: '荣誉' },
        { id: 'contact-root', label: '联系' }
    ];

    const linksHTML = menuItems.map(item => {
        const isActive = state.activeSection === item.id;
        return `
            <button onclick="scrollToId('${item.id}')" 
                class="group relative px-6 py-2 rounded-full transition-all duration-300 font-serif tracking-wide
                ${isActive ? 'text-primary bg-[#EBE7D9]' : 'text-muted-foreground hover:bg-[#EBE7D9]/50 hover:text-foreground'}">
                ${item.label}
                <span class="nav-dot absolute bottom-1.5 left-1/2 w-1 h-1 bg-primary rounded-full 
                ${isActive ? 'scale-100 opacity-100' : ''}"></span>
            </button>
        `;
    }).join('');

    nav.innerHTML = `
        <div class="w-full transition-all duration-500 ${bgClass}">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <button onclick="scrollToId('hero-root')" class="text-2xl font-serif font-medium tracking-tight hover:text-primary transition-colors">Daniel Mui</button>
                <div class="hidden md:flex items-center gap-2">
                    ${linksHTML}
                </div>
                <button class="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/30"><i data-lucide="menu" class="w-6 h-6"></i></button>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// --- 2. Hero ---
function initHero() {
    const staticContainer = document.getElementById('hero-static-content');
    if(staticContainer.innerHTML === '') {
        staticContainer.innerHTML = `
            <div class="space-y-8 animate-fade-in">
                <div class="space-y-4">
                    <p class="text-primary text-sm tracking-[0.2em] uppercase font-bold">Tech & Heart | AI x Product</p>
                    <h1 class="text-6xl lg:text-8xl font-serif font-medium tracking-tight text-foreground">Daniel</h1>
                    <p class="text-2xl text-muted-foreground font-light italic font-serif">AI Optimist · Product Manager</p>
                </div>
                <div class="h-px w-24 bg-primary/30"></div>
                <p class="text-foreground/80 leading-relaxed max-w-lg text-lg font-light">
                且把搁浅 当作宝贵的小憩 静看那得意的帆影 去随浪逐波
                </p>
                <div class="flex gap-3 text-sm font-medium text-foreground/60 pt-2">
                <span class="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">INFJ</span>
                <span class="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">AI Curiosity</span>
                <span class="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">Problem Solving</span>
                <span class="px-4 py-1.5 border border-border rounded-full hover:border-primary/50 transition-colors">Coffee Fueled</span>
                </div>
                <div class="pt-6 font-serif text-lg text-foreground/80">
                    <p>GPA: <span class="text-primary font-bold text-2xl">3.66</span> / 4.00 (Top 5%)</p>
                </div>
            </div>
        `;
    }
    updateHeroImages();
}

function updateHeroImages() {
    const galleryWrapper = document.getElementById('hero-gallery-wrapper');
    galleryWrapper.innerHTML = `
        ${photos.map((url, index) => `
            <img src="${url}" 
                 class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                 ${index === state.currentPhoto ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}" 
                 alt="Cover">
        `).join('')}
        <div class="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"></div>
        <div class="absolute bottom-8 left-8 flex gap-2 z-10">
            ${photos.map((_, i) => `
                <div class="h-0.5 transition-all duration-300 rounded-full ${i === state.currentPhoto ? 'w-8 bg-white' : 'w-4 bg-white/40'}"></div>
            `).join('')}
        </div>
    `;
}

// --- Projects (Fix: 去掉 blur) ---
function renderProjects() {
    const root = document.getElementById('projects-root');
    const projectHTML = projects.map(p => {
        const isDimmed = state.hoveredProject && state.hoveredProject !== p.id;
        // 修改：移除 blur-[0.5px]，只保留透明度变化
        const opacityClass = isDimmed ? "opacity-40" : "opacity-100";
        
        return `
        <div class="group relative py-12 border-t border-border transition-all duration-500 cursor-pointer ${opacityClass}"
             onmouseenter="setProjectHover(${p.id})" 
             onmouseleave="setProjectHover(null)">
            <div class="grid md:grid-cols-12 gap-8 items-start relative z-10">
                <div class="md:col-span-2 text-sm text-muted-foreground font-serif italic">${p.date}</div>
                <div class="md:col-span-4">
                    <h3 class="text-2xl font-serif text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        ${p.title} <i data-lucide="arrow-up-right" class="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                    </h3>
                    <p class="text-sm text-muted-foreground mt-2">${p.subtitle}</p>
                </div>
                <div class="md:col-span-4 text-foreground/70 leading-relaxed font-light">${p.description}</div>
                <div class="md:col-span-2 flex flex-col items-start gap-2">
                    <span class="text-xs text-primary border border-primary/30 px-3 py-1 bg-primary/5 rounded-full">${p.role}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Projects</p>
                <h2 class="text-5xl font-serif text-foreground">项目经历</h2>
            </div>
            <div>${projectHTML}</div>
        </div>
    `;
    lucide.createIcons();
}

// --- Research ---
function renderResearch() {
    const root = document.getElementById('research-root');
    const itemsHTML = papers.map(p => {
        const isOpen = state.expandedPaper === p.id;
        return `
        <div onclick="togglePaper(${p.id})" 
             class="smooth-card relative border border-border bg-white p-8 mb-6 cursor-pointer group rounded-2xl
                    ${isOpen ? 'border-primary/40 ring-1 ring-primary/10' : ''}">
            <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="text-xs text-primary border border-primary/20 px-2 py-0.5 rounded-md">${p.role}</span>
                        <span class="text-xs text-muted-foreground font-serif italic">${p.date}</span>
                    </div>
                    <h3 class="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">${p.title}</h3>
                    <div class="flex items-center gap-4 text-sm text-muted-foreground">
                        <span class="text-primary">${p.venue}</span>
                        <span>${p.level}</span>
                    </div>
                </div>
                <div class="p-2 rounded-full bg-secondary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <i data-lucide="${isOpen ? 'minus' : 'plus'}" class="w-5 h-5"></i>
                </div>
            </div>
            <div class="overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0'}">
                <p class="text-foreground/70 text-sm leading-relaxed border-t border-border pt-4 font-light">
                    ${p.desc}
                </p>
            </div>
        </div>
        `;
    }).join('');

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Research</p>
                <h2 class="text-5xl font-serif text-foreground">科研成果</h2>
            </div>
            <div class="">${itemsHTML}</div>
        </div>
    `;
    lucide.createIcons();
}

// --- Products (Fix: 绝对定位上滑交互，解决卡顿) ---
function renderProducts() {
    const root = document.getElementById('products-root');
    const itemsHTML = products.map(p => {
        // 关键修改：
        // 1. 设置 overflow-hidden 和 relative
        // 2. 将 hover 内容设置为 absolute, bottom-0
        // 3. 默认 translate-y-full (藏在下面), hover时 translate-y-0 (滑上来)
        return `
        <div class="smooth-card group relative border border-border p-8 cursor-default rounded-2xl bg-white hover:border-primary/30 h-[220px] overflow-hidden flex flex-col justify-between">
            <div class="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center gap-4">
                        <img src="${p.logoUrl}" alt="${p.name}" class="w-12 h-12 object-contain p-1 border border-border/50 rounded-xl bg-white shadow-sm">
                        <div>
                            <h3 class="text-xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">${p.name}</h3>
                            <span class="text-xs text-muted-foreground uppercase tracking-wide">${p.cat}</span>
                        </div>
                    </div>
                    <i data-lucide="heart" class="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:fill-primary transition-colors duration-300"></i>
                </div>
                <p class="text-sm text-foreground/70 leading-relaxed font-light line-clamp-2">${p.reason}</p>
            </div>
            
            <div class="absolute inset-x-0 bottom-0 p-6 bg-white/95 backdrop-blur-sm border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex items-center gap-3">
                <i data-lucide="sparkles" class="w-4 h-4 text-primary shrink-0"></i>
                <span class="text-xs text-primary font-medium italic leading-relaxed">${p.insight}</span>
            </div>
        </div>
        `;
    }).join('');

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Favorites</p>
                <h2 class="text-5xl font-serif text-foreground">喜欢的产品</h2>
                <p class="text-muted-foreground mt-4 text-lg italic font-serif">我欣赏那些在细节中体现用心、在体验中传递价值的产品</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">${itemsHTML}</div>
        </div>
    `;
    lucide.createIcons();
}

// --- Philosophy ---
function renderPhilosophy() {
    const root = document.getElementById('philosophy-root');
    const navHTML = philosophies.map((item, idx) => {
        const isActive = state.activePhilo === idx;
        return `
        <button onclick="setPhiloActive(${idx})" 
            class="w-full text-left p-6 border-l-2 transition-all duration-300 rounded-r-xl
            ${isActive ? 'border-primary bg-primary/5 pl-8' : 'border-transparent hover:pl-8 text-muted-foreground'}">
            <span class="text-xs block mb-2 uppercase tracking-widest ${isActive ? 'text-primary' : 'text-muted-foreground'}">${item.category}</span>
            <span class="text-xl font-serif ${isActive ? 'text-foreground' : ''}">${item.title}</span>
        </button>
        `;
    }).join('');

    const activeItem = philosophies[state.activePhilo];

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Philosophy</p>
                <h2 class="text-5xl font-serif text-foreground">哲思与方法论</h2>
            </div>
            <div class="grid lg:grid-cols-12 gap-16">
                <div class="lg:col-span-4 space-y-2">${navHTML}</div>
                <div class="lg:col-span-8 flex items-center relative min-h-[300px]">
                    <div class="animate-fade-in pl-10 border-l border-border/50">
                        <h3 class="text-4xl font-serif text-primary mb-8 leading-tight">${activeItem.title}</h3>
                        <p class="text-xl font-light text-foreground/80 leading-relaxed max-w-2xl">${activeItem.content}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Awards ---
function renderAwards() {
    const root = document.getElementById('awards-root');
    const bars = [
        {l:'数学建模', w:'80%', c:'#A67C37', val:'8项'},
        {l:'计算机设计', w:'70%', c:'#528F65', val:'6项'},
        {l:'技术挑战', w:'85%', c:'#1F6E75', val:'9项'},
        {l:'创新创业', w:'60%', c:'#9E9354', val:'3项'}
    ];

    const displayData = state.hoveredAward 
        ? { val: state.hoveredAward.val, label: state.hoveredAward.l }
        : { val: '26', label: 'TOTAL' };

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
             <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Awards</p>
                <h2 class="text-5xl font-serif text-foreground">荣誉与奖项</h2>
                <p class="text-muted-foreground mt-4 text-lg italic font-serif">累计获得26个比赛奖项</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                ${[
                    {val:'26', label:'比赛奖项'}, {val:'3', label:'学术论文'}, {val:'3', label:'软著专利'}, {val:'5%', label:'专业排名'}
                ].map(s => `
                    <div class="bg-white border border-border p-8 text-center smooth-card rounded-2xl">
                        <div class="text-5xl font-serif text-[#A67C37] mb-2">${s.val}</div>
                        <div class="text-xs text-muted-foreground uppercase tracking-widest">${s.label}</div>
                    </div>
                `).join('')}
            </div>

            <div class="grid md:grid-cols-2 gap-12">
                <div class="bg-white border border-border p-10 smooth-card rounded-2xl">
                    <h4 class="font-serif text-xl mb-10 text-foreground/80">奖项类别分布 (Hover Bars)</h4>
                    <div class="space-y-6">
                        ${bars.map((bar) => `
                            <div class="award-row flex items-center gap-4 text-xs text-muted-foreground cursor-pointer group transition-all duration-300"
                                 data-label="${bar.l}"
                                 data-val="${bar.val}"
                                 onmouseenter='setAwardHover(this)'
                                 onmouseleave='setAwardHover(null)'>
                                <span class="w-20 text-right shrink-0 group-hover:text-primary transition-colors">${bar.l}</span>
                                <div class="h-8 rounded-full bg-gray-100 flex-grow relative overflow-hidden">
                                    <div class="h-full absolute top-0 left-0 animate-grow rounded-full transition-all duration-300" 
                                         style="background-color:${bar.c}; --w:${bar.w}; width:0;"></div>
                                </div>
                                <span class="award-val w-8 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold">${bar.val}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="bg-white border border-border p-10 flex flex-col items-center justify-center smooth-card rounded-2xl">
                    <h4 class="font-serif text-xl mb-10 w-full text-left text-foreground/80">奖项级别分布</h4>
                    <div class="relative w-64 h-64 rounded-full shadow-inner transition-transform duration-500 hover:scale-105" 
                         style="background: conic-gradient(#A67C37 0% 12%, #528F65 12% 58%, #1F6E75 58% 100%)">
                        <div class="absolute inset-10 bg-white rounded-full flex items-center justify-center flex-col shadow-soft transition-all duration-300">
                            <span id="donut-val" class="text-5xl font-serif text-foreground animate-fade-in">${displayData.val}</span>
                            <span id="donut-label" class="text-xs text-muted-foreground uppercase tracking-widest mt-2 transition-all duration-300">${displayData.label}</span>
                        </div>
                    </div>
                    <div class="flex gap-8 mt-12 text-xs text-muted-foreground">
                        <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-[#A67C37]"></span> 国家级 (3)</span>
                        <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-[#528F65]"></span> 省级 (12)</span>
                        <span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full bg-[#1F6E75]"></span> 校级 (11)</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.setAwardHover = (el) => {
    const rows = document.querySelectorAll('.award-row');
    const donutVal = document.getElementById('donut-val');
    const donutLabel = document.getElementById('donut-label');

    if (!el) {
        rows.forEach(row => {
            row.style.opacity = '1';
            row.style.filter = 'none';
        });
        if (donutVal) donutVal.innerText = '26';
        if (donutLabel) donutLabel.innerText = 'TOTAL';
    } else {
        const activeLabel = el.getAttribute('data-label');
        const activeVal = el.getAttribute('data-val');

        rows.forEach(row => {
            if (row.getAttribute('data-label') === activeLabel) {
                row.style.opacity = '1';
                row.style.filter = 'none';
            } else {
                row.style.opacity = '0.3';
                row.style.filter = 'grayscale(0.5)';
            }
        });

        if (donutVal) donutVal.innerText = activeVal;
        if (donutLabel) donutLabel.innerText = activeLabel;
    }
};

// --- Contact ---
function renderContact() {
    const root = document.getElementById('contact-root');
    const items = [
        {icon:'mail', label:'Email', val:'2258578648@qq.com', rawVal: '2258578648@qq.com', action:'copy'},
        {icon:'phone', label:'Phone', val:'159 1388 1857', rawVal: '15913881857', action:'copy'},
        {icon:'github', label:'GitHub', val:'Surge-Dan', rawVal: 'https://github.com/Surge-Dan', action:'link'}
    ];

    root.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="mb-20">
                <p class="text-primary text-xs tracking-[0.2em] uppercase mb-4 font-bold">Contact</p>
                <h2 class="text-5xl font-serif text-foreground">联系方式</h2>
            </div>

            <div class="grid lg:grid-cols-2 gap-20 items-start">
                <div class="space-y-6">
                    ${items.map(c => {
                        let clickHandler = '';
                        if (c.action === 'copy') {
                            clickHandler = `onclick="copyToClipboard('${c.rawVal}', this)"`;
                        } else if (c.action === 'link') {
                            clickHandler = `onclick="window.open('${c.rawVal}', '_blank')"`;
                        }
                        
                        return `
                    <div class="flex items-center justify-between p-8 border border-border bg-[#FDFCFB] group smooth-card rounded-2xl">
                        <div class="flex items-center gap-6">
                            <div class="p-3 bg-white border border-border rounded-full text-primary">
                                <i data-lucide="${c.icon}" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <span class="text-xs text-muted-foreground block mb-1 uppercase tracking-wider">${c.label}</span>
                                <span class="text-xl font-serif text-foreground">${c.val}</span>
                            </div>
                        </div>
                        <button ${clickHandler} class="text-muted-foreground/40 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5 transition-all duration-300">
                            <i data-lucide="${c.action === 'copy' ? 'copy' : 'external-link'}" class="w-5 h-5"></i>
                        </button>
                    </div>
                    `}).join('')}
                </div>

                <div class="pl-16 border-l-2 border-primary/20 relative h-full flex flex-col justify-center py-10">
                    <div class="text-8xl text-[#EBE7D9] absolute -top-8 -left-10 font-serif select-none leading-none">“</div>
                    <p class="text-5xl font-serif italic leading-tight text-foreground mb-10 relative z-10">
                        The only way to do great work is to love what you do.
                    </p>
                    <cite class="text-muted-foreground not-italic text-lg tracking-wide">— Steve Jobs</cite>
                </div>
            </div>

            <div class="mt-40 pt-8 border-t border-border flex justify-between items-center text-xs text-muted-foreground uppercase tracking-wider">
                <p>终身学习者 · 长期主义 · 以终为始</p>
                <div class="flex items-center gap-4">
                    <p>© 2026 Daniel. All rights reserved.</p>
                    <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="flex items-center gap-2 hover:text-primary transition-colors ml-8">
                        BACK TO TOP <i data-lucide="arrow-up" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// --- 辅助功能：复制到剪贴板 ---
window.copyToClipboard = (text, btnElement) => {
    if (!navigator.clipboard) {
        console.error('Clipboard API not supported');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        const originalClasses = btnElement.className;
        btnElement.classList.add('text-green-600', 'scale-125', 'bg-green-50');
        btnElement.classList.remove('text-muted-foreground/40', 'hover:text-primary');
        setTimeout(() => {
            btnElement.className = originalClasses;
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

// --- Controls ---
window.scrollToId = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
window.setProjectHover = (id) => { state.hoveredProject = id; renderProjects(); };
window.togglePaper = (id) => { state.expandedPaper = state.expandedPaper === id ? null : id; renderResearch(); };
// 移除了 setProductActive
window.setPhiloActive = (idx) => { state.activePhilo = idx; renderPhilosophy(); };

document.addEventListener('DOMContentLoaded', () => {
    initHero();
    renderNav();
    renderProjects();
    renderResearch();
    renderProducts();
    renderPhilosophy();
    renderAwards();
    renderContact();

    setInterval(() => {
        state.currentPhoto = (state.currentPhoto + 1) % photos.length;
        updateHeroImages();
    }, 4000);

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== state.navScrolled) {
            state.navScrolled = isScrolled;
            renderNav();
        }
        
        const sections = ['hero-root', 'projects-root', 'research-root', 'products-root', 'philosophy-root', 'awards-root', 'contact-root'];
        for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 300 && rect.bottom >= 300) {
                    if (state.activeSection !== section) {
                        state.activeSection = section;
                        renderNav();
                    }
                    break;
                }
            }
        }
    });
});
