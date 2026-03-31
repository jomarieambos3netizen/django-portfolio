// ====================== EDUCATION.JS ======================

document.addEventListener('DOMContentLoaded', function() {

    // Simple timeline line animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-row');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (index * 100) + 'ms';
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });

    console.log('Education page scripts loaded');
});