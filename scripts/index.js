const profilePopup = document.querySelector(".popup_info");
const popupBg = document.querySelector(".popup");
const popupformName = document.querySelector("#name");
const popupformDescription = document.querySelector("#description");
function openPopupContainer(popup) {
    popup.classList.add("popup_opened");
}

document.querySelector('.button__main').addEventListener('click', () => {
    openPopupContainer(profilePopup);
});
document.querySelector('.button__close').addEventListener('click', () => {
    profilePopup.classList.remove('popup_opened');
});
document.querySelector('.button__main_footer').addEventListener('click', () => {
    openPopupContainer(profilePopup);
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('popup_opened'); // Убираем активный класс с фона
        profilePopup.classList.remove('popup_opened'); // И с окна
    }
});

document.querySelector('#name').addEventListener('click', () => {
    popupformName.style.outline = '1px solid #5036E6';
});
document.querySelector('#description').addEventListener('click', () => {
    popupformDescription.style.outline = '1px solid #5036E6';
});


popupformName.onmouseout = function() {
    popupformName.style.outline = 'none';
    popupformName.style.background = '#1A1A1A';
};

popupformDescription.onmouseout = function() {
    popupformDescription.style.outline = 'none';
    popupformDescription.style.background = '#1A1A1A';
};
popupformName.onmouseover = function() {
    popupformName.style.background = 'rgba(26, 26, 26, 0.6)';
};

popupformDescription.onmouseover = function() {
    popupformDescription.style.background = 'rgba(26, 26, 26, 0.6)';
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="team__pagination-dot ' + className + '"></span>';
        },
    },
    breakpoints: {
        321: {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: false,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 28,
        },
    }
});
