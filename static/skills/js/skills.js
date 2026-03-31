// ====================== SKILLS.JS ======================

document.addEventListener('DOMContentLoaded', function() {

    // Animate skill bars when in view
    const skillFills = document.querySelectorAll('.skill-fill');

    const animateSkills = () => {
        skillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            if (width) {
                fill.style.width = width + '%';
            }
        });
    };

    // Intersection Observer for skill bars
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkills, 300);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    console.log('Skills page scripts loaded');
});