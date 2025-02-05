$('.kids-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000
        }
    }
});
