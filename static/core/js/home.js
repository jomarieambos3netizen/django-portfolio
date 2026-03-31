// ====================== HOME.JS ======================

document.addEventListener('DOMContentLoaded', function() {

    // Hero scroll cue animation
    const scrollCue = document.querySelector('.scroll-cue');
    if (scrollCue) {
        setTimeout(() => {
            scrollCue.style.opacity = '1';
        }, 1200);
    }

    // Counter animation for stats (optional enhancement)
    function animateCounters() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let count = 0;
            const increment = Math.ceil(target / 30);

            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = count;
                }
            }, 40);
        });
    }

    // Trigger counter when hero is in view
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.6 });

        observer.observe(heroSection);
    }

    console.log('Home page scripts loaded');
});