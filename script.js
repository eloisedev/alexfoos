// Get the hamburger menu and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
});
