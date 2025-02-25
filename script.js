document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when a nav link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // Hide menu on larger screens
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active"); // Hide menu on desktop
      hamburger.classList.remove("active"); // Ensure the hamburger isn't active
    }
  });

  // Form submission success message
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const successMessage = document.getElementById("success-message");
      form.reset();
      if (successMessage) {
        successMessage.hidden = false;
      }
    });
  }
});
