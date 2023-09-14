$(document).ready(function() {
    var $navbar = $('nav');
    var navbarDefaultClass = 'transparent-navbar';
    var navbarFilledClass = 'filled-navbar';
    var scrollOffset = 100;

    $(window).scroll(function() {
        if ($(this).scrollTop() > scrollOffset) {
            $navbar.removeClass(navbarDefaultClass).addClass(navbarFilledClass);
        } else {
            $navbar.removeClass(navbarFilledClass).addClass(navbarDefaultClass);
        }
    });

    const mobileMenu = document.getElementById("mobile-menu");
    const toggleMenuButton = document.getElementById("toggle-menu");

    toggleMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});