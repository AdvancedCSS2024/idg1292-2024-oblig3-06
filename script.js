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
