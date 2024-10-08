const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
    ...scrollRevealOption,
    delay: 1200,
});

const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const slider = document.querySelector(".logo__slide").cloneNode(true);
document.querySelector(".logos").appendChild(slider);