$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,          // Faz o carrossel rodar sozinho
    autoplayTimeout: 3000,   // Tempo em milissegundos (3 segundos por item)
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});