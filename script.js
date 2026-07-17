const currentYear = new Date().getFullYear();
const footerYear = document.querySelector(".site-footer span");

if (footerYear && currentYear > 2026) {
  footerYear.textContent = `Built from public GitHub data · ${currentYear}`;
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
