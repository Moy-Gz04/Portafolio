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

//Evaluacion para correo
    document.querySelector("form").addEventListener("submit", function(event) {
        let name = document.querySelector("input[name='name']").value.trim();
        let email = document.querySelector("input[name='email']").value.trim();
        let message = document.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            event.preventDefault(); // Evita que el formulario se envíe si falta información
        }
    });

    //Mensaje al enviar
    document.addEventListener("DOMContentLoaded", function() {
        // Seleccionamos los elementos del DOM
        const form = document.querySelector("form");
        const modal = document.getElementById("success-modal");
        const closeModalBtn = document.getElementById("close-modal");
        const closeXBtn = document.querySelector(".close-btn");
    
        // Aseguramos que el modal esté oculto al inicio
        modal.style.display = "none";
    
        // Solo ejecutamos la función cuando el formulario se envía
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue
    
            // Mostramos el modal
            modal.style.display = "flex";
    
            // Agregamos eventos para cerrar el modal
            function closeModal() {
                // Oculta el modal
                modal.style.display = "none";
            
                // Limpia los campos del formulario después de cerrar el modal
                form.reset();
            
                // Eliminamos los event listeners después de usarlos
                closeModalBtn.removeEventListener("click", closeModal);
                closeXBtn.removeEventListener("click", closeModal);
            
                // Opcional: Redirigir o actualizar la página después de cerrar el modal
                setTimeout(() => {
                    form.submit(); // Si quieres que se envíe realmente, mantenlo, si no, elimínalo
                }, 500);
            }
            
    
            // Eventos para cerrar el modal
            closeModalBtn.addEventListener("click", closeModal);
            closeXBtn.addEventListener("click", closeModal);
        });
    });
    
    
