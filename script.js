/* ==========================
      MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* ==========================
      CURRENT YEAR
========================== */

document.getElementById("currentYear").textContent = new Date().getFullYear();