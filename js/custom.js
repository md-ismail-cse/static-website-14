/*=============================================
                Main Menu
===============================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 10) {
            $("nav").removeClass("navbar-fixed-top");
        } else {
            $("nav").addClass("navbar-fixed-top");
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

/*=============================================
                Skitter
===============================================*/
$(function () {
    $('.skitter-large').skitter();
});


/*=============================================
                New Product
===============================================*/
$(function () {
    $("#new-product-slider").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            // breakpoint from 992 up
            992: {
                items: 4
            }
        }
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/*=============================================
                Recent View Product
===============================================*/
$(function () {
    $("#recent-view-product-slider").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            // breakpoint from 992 up
            992: {
                items: 4
            }
        }
    });
});

/*=============================================
                Top Rated Product
===============================================*/
$(function () {
    $("#top-rated-product-slider").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            },
            // breakpoint from 992 up
            992: {
                items: 4
            }
        }
    });
});

/*=============================================
                Top Rated Product
===============================================*/
$(function () {
    $("#brand-slider").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            320: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 4
            },
            // breakpoint from 992 up
            992: {
                items: 5
            }
        }
    });
});

/*=============================================
                Show Hide Button
===============================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });
});

/*=============================================
                Shop product filtering
===============================================*/
$(function () {
    $(".filter-by-price span").click(function () {
        $(".filter-by-price-div").toggle({
            animate: true
        });
    });
    $(".filter-by-color span").click(function () {
        $(".filter-by-color-div").toggle({
            animate: true
        });
    });
    $(".filter-by-brands span").click(function () {
        $(".filter-by-brands-div").toggle({
            animate: true
        });
    });
    $(".filter-by-size span").click(function () {
        $(".filter-by-size-div").toggle({
            animate: true
        });
    });
    $(".filter-by-categorie span").click(function () {
        $(".filter-by-categorie-div").toggle({
            animate: true
        });
    });
});

/* Filter by price*/
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#filter-price-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#filter-price-amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});


/* Single Product Tabs*/
$(function () {
    $(".single-product-desc").tabs();
});


/*=============================================
                Cart
===============================================*/

/* ============== Quantity buttons ============== */
$('input.qty:not(.table-product-quantity input.qty)').each(function () {
    var min = parseFloat($(this).attr('min'));

    if (min && min > 0 && parseFloat($(this).val()) < min) {
        $(this).val(min);
    }
});

$(document).on('click', '.plus, .minus', function () {

    // Get values
    var $qty = $(this).closest('.quantity').find('.qty'),
        currentVal = parseFloat($qty.val()),
        max = parseFloat($qty.attr('max')),
        min = parseFloat($qty.attr('min')),
        step = $qty.attr('step');

    // Format values
    if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
    if (max === '' || max === 'NaN') max = '';
    if (min === '' || min === 'NaN') min = 0;
    if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

    // Change the value
    if ($(this).is('.plus')) {

        if (max && (max == currentVal || currentVal > max)) {
            $qty.val(max);
        } else {
            $qty.val(currentVal + parseFloat(step));
        }

    } else {

        if (min && (min == currentVal || currentVal < min)) {
            $qty.val(min);
        } else if (currentVal > 0) {
            $qty.val(currentVal - parseFloat(step));
        }

    }

    // Trigger change event
    $qty.trigger('change');
});

/*=============================================
                Checkout
===============================================*/
$(function () {
    $(".ship-to-different-adr input").click(function () {
        $(".ship-to-diff-addr-form").toggle();
    });
});