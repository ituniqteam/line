new Swiper('.our-team-slider', {
    slidesPerView: 2.5,
    spaceBetween: 43,
});

new Swiper('.comments-slider', {
    slidesPerView: 2,
    spaceBetween: 30,

    pagination: {
        el: ".slider-pagination",
        clickable: true,
    },

    breakpoints: {
        840: {
            spaceBetween: 69
        },

        640: {
            slidesPerView: 2
        }
    }
})

