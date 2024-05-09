document.addEventListener("DOMContentLoaded", function () {
    const palmTrees = document.querySelectorAll('.palm');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Move palms horizontally based on scroll position (at a slower rate)
        palmTrees.forEach(palm => {
            const speed = 0.3; // Adjust speed as needed
            const distance = scrollPosition * speed;
            palm.style.transform = `translateX(-${distance}px)`;
        });
    });
});
const trigger = document.querySelector('.trigger');
const textbox = document.querySelector('.text1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Show the textbox when the trigger is in view
            textbox.style.display = 'block';
        } else {
            // Hide the textbox when the trigger is out of view
            textbox.style.display = 'none';
        }
    });
}, { threshold: 0 });

    
observer.observe(trigger);
