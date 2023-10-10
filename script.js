let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay: 200, origin:'top'})
sr.reveal('.home-img',{delay: 400, origin:'top'})
sr.reveal('.about, .services, .cta, .resume, .contact, .redes',{delay: 200, origin:'top'})


let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel(); 
}

function updateCarousel() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

// Função para avançar automaticamente os slides a cada 5 segundos
function autoAdvance() {
    changeSlide(1);
    setTimeout(autoAdvance, 5000); // Mude a cada 5 segundos (5000 milissegundos)
}

autoAdvance(); // Iniciar a auto-avanço
