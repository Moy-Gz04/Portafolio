// Menu icon navbar
let menuIcon = document.querySelector('#menu-icon'); // Corregido 'menuIcoin' a 'menuIcon'
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) { 
            navLinks.forEach(links => {
                links.classList.remove('active');
                let link = document.querySelector('header nav a[href*="' + id + '"]');
                if (link) link.classList.add('active'); // Previene errores si no encuentra el enlace
            });
        }
    });

    let header = document.querySelector('.header');

    if (window.scrollY > 100) {
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }

    // Remove menu icon navbar when clicking a navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// dark ligth mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

//scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img',{origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{origin: 'right'});