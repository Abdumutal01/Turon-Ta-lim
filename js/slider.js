const slider = document.querySelector('.slider');

let currentSlide = 0;

const slideWidth = () => document.querySelector('.card').offsetWidth + 20;

const moveToNextSlide = () => {
    if (currentSlide < slider.children.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${slideWidth() * currentSlide}px)`;
};

// Avtomatik ravishda kartalarni almashish uchun interval
setInterval(moveToNextSlide, 900);