    window.addEventListener('scroll', function() {
    const palms = document.querySelectorAll('.svg.palm'); // Select all palm trees
    palms.forEach(palm => {
      const baseOffset = 22; // Starting left position in VW units
      const moveRate = 0.1; // Change this to adjust the speed of movement
      const newLeft = baseOffset - window.scrollY * moveRate;
      palm.style.left = `${newLeft}vw`;
    });
  });
