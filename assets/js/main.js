"use strict";

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

const navDropdownToggle = document.querySelector(".nav-dropdown__toggle");
const navDropdownMenu = document.querySelector(".nav-dropdown__menu");

function updateHeaderOnScroll() {
  if (!header) return;

  header.classList.toggle("is-scrolled", window.scrollY > 40);
}

function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}

function toggleMobileMenu() {
  if (!menuButton || !mobileMenu) return;

  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Abrir menu" : "Fechar menu"
  );

  mobileMenu.hidden = isOpen;
  document.body.classList.toggle("menu-open", !isOpen);
}

function closeNavDropdown() {
  if (!navDropdownToggle || !navDropdownMenu) return;

  navDropdownToggle.setAttribute("aria-expanded", "false");
  navDropdownMenu.classList.remove("is-open");
}

function toggleNavDropdown() {
  if (!navDropdownToggle || !navDropdownMenu) return;

  const isOpen = navDropdownToggle.getAttribute("aria-expanded") === "true";

  navDropdownToggle.setAttribute("aria-expanded", String(!isOpen));
  navDropdownMenu.classList.toggle("is-open", !isOpen);
}

window.addEventListener("scroll", updateHeaderOnScroll, {
  passive: true
});

menuButton?.addEventListener("click", toggleMobileMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

navDropdownToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNavDropdown();
});

document.addEventListener("click", (event) => {
  if (!navDropdownMenu || !navDropdownMenu.classList.contains("is-open")) {
    return;
  }

  const clickedInside =
    navDropdownToggle.contains(event.target) ||
    navDropdownMenu.contains(event.target);

  if (!clickedInside) {
    closeNavDropdown();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    closeNavDropdown();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 980) {
    closeMobileMenu();
  } else {
    closeNavDropdown();
  }
}); 

updateHeaderOnScroll();

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}