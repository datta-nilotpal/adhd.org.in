document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.floating-logo');
    let moveDirection = 1; // 1 for down, -1 for up
    let position = 0; // Start position
    let range = 20; // Range of movement in pixels
    
    function floatLogo()
