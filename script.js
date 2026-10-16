/* script.js - interactivity for the portfolio page */

// Grab the elements we need from the page
const root = document.documentElement;          // the <html> element
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* ---------- Feature 1: Dark / light mode ---------- */

// Apply a theme ("light" or "dark") and update the button text
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

// Load the saved theme from the browser (default is light)
applyTheme(localStorage.getItem("theme") || "light");

// Flip the theme when the button is clicked and remember the choice
themeToggle.addEventListener("click", function () {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

/* ---------- Feature 2: Hamburger menu (mobile) ---------- */

// Show or hide the navigation menu
function toggleMenu() {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
}
menuToggle.addEventListener("click", toggleMenu);

// Close the menu after a link is tapped so it doesn't cover the page
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
