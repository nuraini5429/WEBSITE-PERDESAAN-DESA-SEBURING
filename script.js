function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("show");

}


// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu = document.getElementById("navMenu");

        navMenu.classList.remove("show");

    });

});
