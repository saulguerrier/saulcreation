//header navbar
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//page nos services
const serviceCards = document.querySelectorAll('.service-cards');

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  service-Cards.forEach(Cards => {
    const cardsTop = card.getBoundingClientRect().top;
    if (cardsTop < triggerBottom) {
      cardsTop.style.opacity = 1;
      cardsTop.style.transform = 'translateY(0)';
    }
  });
}

document.addEventListener("DOMContentLoaded", typeEffect);

window.addEventListener('scroll', showserviceitemsOnScroll);
window.addEventListener('load', showserviceitemsOnScroll);

//animationcard
document.querySelectorAll('.service-cards').forEach(Cards => {
  Cards.addEventListener('mouseenter', () => {
    Cards.style.backgroundColor = '#f0f8ff';
  });
  Cards.addEventListener('mouseleave', () => {
    Cards.style.backgroundColor = 'gray';
  });
});