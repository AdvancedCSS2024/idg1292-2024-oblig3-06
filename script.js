document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.frame');
    const car = document.querySelector('.svg.car');
    let currentFrameIndex = 0;
    let animationFinished = false;

    function startCarAnimation() {
        car.style.animation = 'carMoveRight 3s forwards'; // Apply the animation
    }

    function scrollToNextFrame() {
        if (animationFinished) {
            currentFrameIndex++;
            if (currentFrameIndex >= frames.length) {
                currentFrameIndex = frames.length - 1;
            }
            frames[currentFrameIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToPreviousFrame() {
        currentFrameIndex--;
        if (currentFrameIndex < 0) {
            currentFrameIndex = 0;
        }
        frames[currentFrameIndex].scrollIntoView({ behavior: 'smooth' });
    }

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            if (!animationFinished) {
                startCarAnimation(); // Start animation when scrolling down for the first time
                car.addEventListener('animationend', function() {
                    animationFinished = true;
                });
            } else {
                scrollToNextFrame();
            }
        } else if (event.deltaY < 1) {
            scrollToPreviousFrame();
        }
    });
});
