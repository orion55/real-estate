$(document).ready(function () {
    $('#slider1').bxSlider(
        {
            preloadImages: true,
            mode: 'fade',
            controls: false,
            auto: true,
            autoStart: true,
            pause: 5000,
            pager: false
        }
    );
    $('#slider2').bxSlider(
        {
            preloadImages: true,
            controls: false,
            auto: true,
            autoStart: true,
            pause: 5000,
            pager: true
        }
    );
    $('#slider-post').bxSlider(
        {
            preloadImages: true,
            controls: true,
            auto: true,
            mode: 'fade',
            autoStart: true,
            pause: 5000,
            pager: true
        }
    );
});
