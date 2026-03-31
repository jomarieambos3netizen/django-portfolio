// ====================== ABOUT.JS ======================

document.addEventListener('DOMContentLoaded', function() {

    // Timeline item stagger animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';

        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.transitionDelay = (index * 150) + 'ms';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 300);
    });

    // Achievement cards hover effect
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    console.log('About page scripts loaded');
});