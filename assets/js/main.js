// --- 图片轮播逻辑 ---
const photos = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
];
let currentPhotoIndex = 0;

function updatePhotoGallery() {
    const container = document.getElementById('photo-container');
    const indicators = document.getElementById('photo-indicators');
    
    if (container) {
        container.innerHTML = photos.map((photo, index) => `
            <div class="absolute inset-0 transition-all duration-1000 ${index === currentPhotoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}">
                <img src="${photo}" class="w-full h-full object-cover" alt="Portfolio Image">
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

// --- 滚动与导航逻辑 ---
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    // 导航栏背景模糊效果
    if (window.scrollY > 50) {
        navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-border');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-b', 'border-border');
        navbar.classList.add('bg-transparent');
    }
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. 启动轮播
    updatePhotoGallery();
    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        updatePhotoGallery();
    }, 4000);

    // 2. 启动文字入场动画
    setTimeout(() => {
        const text = document.getElementById('hero-text');
        const gallery = document.getElementById('hero-gallery');
        if (text) text.classList.remove('opacity-0', 'translate-y-8');
        if (gallery) gallery.classList.remove('opacity-0', 'translate-y-8');
    }, 100);

    // 3. 监听滚动
    window.addEventListener('scroll', handleScroll);

    // 4. 初始化图标
    if (window.lucide) window.lucide.createIcons();
});
