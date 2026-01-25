// 1. 滚动监听动画
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 2. 技能雷达图配置 (Chart.js)
const ctx = document.getElementById('skillChart').getContext('2d');
const skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Product Sense', 'Coding (Python/C++)', 'Research', 'Data Analysis', 'Design', 'Communication'],
        datasets: [{
            label: 'My Capability',
            data: [90, 85, 88, 80, 75, 85], // 这里的数值你可以根据自我评估调整
            backgroundColor: 'rgba(45, 45, 45, 0.1)',
            borderColor: 'rgba(45, 45, 45, 0.8)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#333'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { color: '#eee' },
                grid: { color: '#eee' },
                pointLabels: { font: { size: 12, family: 'Helvetica' }, color: '#666' },
                ticks: { display: false, max: 100 }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});
