$(function() {
	// Custom JS
    $('#slider-products').slick({
        dots: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        responsive: [{
            breakpoint: 1380,
            settings: {
                slidesToShow: 4,
                infinite: true
            }
        },{
            breakpoint: 1180,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        }]
    });

    $('.next').click(function(){
        $("#slider-products").slick('slickNext');
    });

    $('.prev').click(function(){
        $("#slider-products").slick('slickPrev');
    });

});
