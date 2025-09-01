// Mobile nav toggle + copyright year
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('navLinks');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'block';
    links.style.display = open ? 'none' : 'block';
    toggle.setAttribute('aria-expanded', (!open).toString());
  });
}
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
// Close mobile menu on link click (small screens)
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 640) links.style.display = 'none';
  });
});
