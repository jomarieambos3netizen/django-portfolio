// ====================== CONTACT.JS ======================

document.addEventListener('DOMContentLoaded', function() {

    // Optional: Form validation enhancement
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // You can add client-side validation here if needed
            console.log('Form submitted');
        });
    }

    console.log('Contact page scripts loaded');
});