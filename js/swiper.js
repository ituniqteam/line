new Swiper('.our-team-slider', {
    slidesPerView: 1.6,
    spaceBetween: 24,

    breakpoints: {
        840: {
            spaceBetween: 43,
            slidesPerView: 2.5,
        }
    }
});

new Swiper('.comments-slider', {
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        840: {
            spaceBetween: 69,
            slidesPerView: 2,
        },
    },

    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },
})

