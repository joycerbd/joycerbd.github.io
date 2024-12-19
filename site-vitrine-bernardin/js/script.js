document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu'); 
    const menu = document.getElementById('navigation'); 
    const menuLinks = document.querySelectorAll('nav ul li a'); 
    const boutonVoirMenu = document.querySelector('.btn'); 

    // 🟢 Ouverture / fermeture du menu burger
    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active'); 
            menu.classList.toggle('active'); 
        });
    }

    // 🟢 Défilement fluide lorsqu'on clique sur un lien du menu burger
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('href'); 
            const section = document.querySelector(sectionId); 
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); 
            }
            burgerMenu.classList.remove('active'); 
            menu.classList.remove('active'); 
        });
    });
});
// 🟢 Sélection des images du diaporama
const slides = document.querySelectorAll('.diaporama-a-propos img');

let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active'); // Retire la classe active de l'image actuelle
    currentSlide = (currentSlide + 1) % slides.length; // Passe à l'image suivante
    slides[currentSlide].classList.add('active'); // Ajoute la classe active à la nouvelle image
}

setInterval(changeSlide, 3000); // Change l'image toutes les 3 secondes
