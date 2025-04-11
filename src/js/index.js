import '/src/scss/style.scss'
// import '..style/style.css'
// import '..style/styleaside.css'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const Swiper1 = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
});


const Swiper2 = new Swiper('.myswiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 220,
    freeMode: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// var wiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 220,
//     freeMode: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });


console.log('It works!')


document.getElementById("toggleButton-remon").addEventListener("click", function () {
    const element = document.getElementById("hiddenElement-remon");
    const buttonText = document.getElementById("toggleText-remon");
    const buttonIcon = document.getElementById("toggleIcon-remon");

    if (element.style.display === "none") {
        element.style.display = "block";
        buttonText.textContent = "Скрыть";
        buttonIcon.src = "image/dropup.png"; // Меняем картинку
    } else {
        element.style.display = "none";
        buttonText.textContent = "Показать все";
        buttonIcon.src = "image/icon.svg"; // Возвращаем картинку
        buttonIcon.alt = "Показать";
    }
});



document.getElementById("toggleButton").addEventListener("click", function () {
    let element = document.getElementById("hiddenElement");
    let buttonText = document.getElementById("toggleText");
    let buttonIcon = document.getElementById("toggleIcon");


    if (element.style.display === "none") {
        element.style.display = "block";
        buttonText.textContent = "Скрыть";
        buttonIcon.src = "image/dropup.png"; // Меняем картинку
    } else {
        element.style.display = "none";
        buttonText.textContent = "Показать все";
        buttonIcon.src = "image/icon.svg"; // Возвращаем картинку
        buttonIcon.alt = "Показать";
    }
});




const openMenuLink = document.getElementById('openMenu');
const closeMenuLink = document.getElementById('closeMenu');
const menu1 = document.getElementById('menuaside');

openMenuLink.addEventListener('click', (event) => {
    event.preventDefault();  // Чтобы страница не прыгала вверх
    menu1.style.display = 'block';  // Показываем меню
});

closeMenuLink.addEventListener('click', (event) => {
    event.preventDefault();
    menu1.style.display = 'none';  // Прячем меню
});

function setupMenu(link1Id, link2Id, menuId) {
    let menu = document.getElementById(menuId);
    let isOpen = false; // Флаг состояния

    function toggleMenu(event) {
        event.preventDefault();
        isOpen = !isOpen; // Переключаем флаг
        menu.style.display = isOpen ? "block" : "none";
    }

    document.getElementById(link1Id).addEventListener("click", toggleMenu);
    document.getElementById(link2Id).addEventListener("click", toggleMenu);
}

// Настраиваем первое меню
setupMenu("link1", "link2", "menu1");

// Настраиваем второе меню
setupMenu("link3", "link4", "menu2");
