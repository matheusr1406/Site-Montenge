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
sr.reveal('.about, .services, .cta, .resume, .contact, .redes, .footer-section',{delay: 200, origin:'top'})


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
    setTimeout(autoAdvance, 4000); // Mude a cada 4 segundos (5000 milissegundos)
}

autoAdvance(); // Iniciar a auto-avanço


document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const toggleThemeButton = document.getElementById("toggle-theme");

    // Verifique o localStorage para obter a preferência de tema do usuário
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Atualize o ícone com base no tema atual
        updateThemeIcon(currentTheme);
    } else {
        // Use o estilo do CSS para definir o tema padrão
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            body.classList.add("dark-mode");
            // Atualize o ícone
            updateThemeIcon("dark-mode");
        }
    }

    // Função para alternar entre os temas
    function toggleTheme() {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            updateThemeIcon("light-mode");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            updateThemeIcon("dark-mode");
        }
    }

    // Função para atualizar o ícone com base no tema atual
    function updateThemeIcon(theme) {
        const themeIcon = document.getElementById("toggle-theme");
        if (theme === "dark-mode") {
            themeIcon.classList.remove("bx-moon");
            themeIcon.classList.add("bx-sun");
        } else {
            themeIcon.classList.remove("bx-sun");
            themeIcon.classList.add("bx-moon");
        }
    }

    toggleThemeButton.addEventListener("click", toggleTheme);
});

