// toggler del nav
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Animaciones para la sección hero
gsap.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.8,
});

gsap.from(".hero .btn", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.1,
});

gsap.from(".hero figcaption", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.1,
});

gsap.from(".hero-images img", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 1.3,
  stagger: 0.2,
});

// Animación para las tarjetas de servicios
gsap.from("#servicios .card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#servicios",
    start: "top 80%",
  },
});

// Animaciones Sección Nosotros
gsap.from("#nosotros img", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: "#nosotros",
    start: "top 80%",
  },
});

gsap.from("#nosotros .col-lg-6:last-child", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#nosotros",
    start: "top 80%",
  },
});
// animaciones Testimonios
gsap.from("#testimonios .card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#testimonios",
    start: "top 80%",
  },
});
// animaciones Contacto
gsap.from("#contacto form", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#contacto",
    start: "top 80%",
  },
});
