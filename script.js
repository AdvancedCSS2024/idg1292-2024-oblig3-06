document.addEventListener('DOMContentLoaded', function() {
    const frames = document.querySelectorAll('.frame');
    let currentFrameIndex = 0;

    function scrollToNextFrame() {
        currentFrameIndex++;
        if (currentFrameIndex >= frames.length) {
            currentFrameIndex = frames.length - 1;
        }
        frames[currentFrameIndex].scrollIntoView({ behavior: 'smooth' });
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
            scrollToNextFrame();
        } else if (event.deltaY < 0) {
            scrollToPreviousFrame();
        }
    });
});
