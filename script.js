const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

windows.addEventListener('resize', function () {
    const menu = document.getElementById('hamburger');
    const hamburger = document.getElementById('menu');

    if (window.innerWidth > 768) {
        hamburger.style.display = 'none';
        menu.style.width = '0';
    } else {
        hamburger.style.display = 'block'
    }
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = event.target;
        const successMessage = document.getElementById('success-message');

        form.reset();
        successMessage.hidden = false;
    })


});

window.dispatchEvent(new Event('resize'))
