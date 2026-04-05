async function loadPartial(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;

  const response = await fetch(path);
  const html = await response.text();
  target.innerHTML = html;
}

async function initPartials() {
  await loadPartial('[data-include="header"]', '/partials/header.html');
  await loadPartial('[data-include="footer"]', '/partials/footer.html');

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", initPartials);
