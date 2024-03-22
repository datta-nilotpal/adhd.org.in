document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.floating-logo');
    let moveDirection = 1; // 1 for down, -1 for up
    let position = 0; // Start position
    let range = 20; // Range of movement in pixels
    
    function floatLogo() {
        position += moveDirection;
        if (position > range || position < -range) {
            moveDirection *= -1; // Reverse direction when reaching the range limit
        }
        
        logo.style.transform = `translateY(${position}px)`; // Move logo up or down
        
        requestAnimationFrame(floatLogo); // Loop the animation
    }
    
    floatLogo(); // Start the animation
});
