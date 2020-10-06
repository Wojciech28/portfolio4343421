
/*carousel*/
$(".slider").owlCarousel({
	
	loop: true,
	autoplay: true,
	autoplayTimeout: 4000,
	margin: 10,
	nav: true,
    dots: false,
    slideBy: 2,
    responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1,
        slideBy: 1
    },
    // breakpoint from 480 up
    480 : {
        items: 1,
        slideBy: 1
    },
    // breakpoint from 768 up
    768 : {
        items: 2,
        slideBy: 1
    },
    1140 : {
        items: 3,
    }
    },
	navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    })
