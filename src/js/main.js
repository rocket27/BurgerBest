// Slider
$(function() {

    var carousel = $('.owl-carousel').owlCarousel({
        items : 1,
        loop : true,
        nav : false,
        dots : false,
        smartSpeed : 750
    })

    $('.slider__previous').on('click', function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
    });

    $('.slider__next').on('click', function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
    });

});

// Phone Mask
$(function() {
    $('.order-form__input_phone-mask').inputmask('+7 (999) 999 99 99');
});

// FancyBox
$(function() {
    $('.button_review').fancybox({
        type : 'inline',
        maxWidth : 460,
        fitToView : false,
        padding : 0
    })

    $('.detailedReview__close').on('click', function(e) {
        e.preventDefault();

        $.fancybox.close();
    });
});

// YandexMap
$(function() {
    ymaps.ready(init);
    var myMap;

    function init() {     
        myMap = new ymaps.Map("mapContainer", {
            center: [48.48635341, 135.08066686],
            zoom: 15,
            controls: []
        });

        myMap.behaviors.disable('scrollZoom');

        myPlacemark1 = new ymaps.Placemark([48.49010454, 135.08344181], {
            hintContent: 'BurgerBest',
            balloonContent: 'Ким Ю Чена, 44, ТЦ "Магазины радости"'
        }, {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                iconImageHref: '../img/svg/map-marker.svg',
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-23, -57]
        });

        myPlacemark2 = new ymaps.Placemark([48.48550122, 135.06709990], {
            hintContent: 'BurgerBest',
            balloonContent: 'Льва Толстого, 19, ТЦ "На Пушкина"'
        }, {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                iconImageHref: '../img/svg/map-marker.svg',
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-23, -57]
        });

        myPlacemark3 = new ymaps.Placemark([48.48418713, 135.09199745], {
            hintContent: 'BurgerBest',
            balloonContent: 'Ленина, 85/19, ТРЦ "Энерго-Плаза"'
        }, {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                iconImageHref: '../img/svg/map-marker.svg',
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-23, -57]
        });
            
        myMap.geoObjects.add(myPlacemark1)
            .add(myPlacemark2)
            .add(myPlacemark3);
    }
});