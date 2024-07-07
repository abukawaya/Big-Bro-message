// Include AOS script
AOS.init({
  duration: 1200,
});

// Parallax Effect Script
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let Hadi = document.getElementById('Hadi');
let about = document.getElementById('about');

window.addEventListener('scroll', function() {
  let value = window.scrollY;

  stars.style.transform = `translateX(${value * 0.25}px)`;
  moon.style.transform = `translateY(${value * 1.5}px)`;
  mountains3.style.transform = `translateY(${value * 0.5}px)`;
  mountains4.style.transform = `translateY(${value * 0.5}px)`;
  river.style.transform = `translateY(${value * 0.4}px)`;
  boat.style.transform = `translate(${value * 3}px, ${value * 0.3}px)`;
  mountains7.style.transform = `translateY(${value * 0.5}px)`;
  Hadi.style.transform = `translateY(${value}px)`;

  if (value >= 127) {
    document.querySelector(".main").style.background = "linear-gradient(#376281, #10001f)";
  } else {
    document.querySelector(".main").style.background = "linear-gradient(to right, #200016, #10001f)";
  }

  if (value >= about.offsetTop - window.innerHeight) {
    Hadi.style.display = 'none';
  } else {
    Hadi.style.display = 'block';
  }
});

const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
