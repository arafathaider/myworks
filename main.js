$(document).ready(function(){
    let owl = $(".slider").owlCarousel({
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        dotsData:true,
        loop: true,
        margin: 0,
        nav: true,
        center: false,
        items: 1
    });

    $('.owl-dot').click(function() {
        owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
    })
});