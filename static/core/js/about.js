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
// Lightbox
function openLightbox(url) {
  document.getElementById('lightbox-img').src = url;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// Fix for mobile touch
document.querySelectorAll('.achievement-card').forEach(function(card) {
  card.addEventListener('touchend', function(e) {
    e.preventDefault();
    var img = card.querySelector('img');
    if (img) openLightbox(img.src);
  });
});