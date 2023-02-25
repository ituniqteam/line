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
    slidesPerView: 1,
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

