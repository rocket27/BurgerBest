$(window).on('load', function() {
    var sections = $('.section'),
        display = $('.mainContent');
        inScroll = false;
    var scrollToSection = function(sectionEq) {
        var position = 0;

        if (!inScroll) { // if (inScroll == false)
            inScroll = true;
            position = (sections.eq(sectionEq).index() * -100) + '%';
            sections.eq(sectionEq).addClass('section_active')
                .siblings().removeClass('section_active');
            display.css({
                'transform' : 'translate3d(0, ' + position + ', 0)'
            });

            setTimeout(function() {
                inScroll = false;
                $('.pointer__item').eq(sectionEq).addClass('pointer__item_active')
                    .siblings().removeClass('pointer__item_active');
            }, 1300);
        }
    }

    $('.wrapper').on('wheel', function(e) {
        var deltaY = e.originalEvent.deltaY,
            activeSection = sections.filter('.section_active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();
        
        if (deltaY > 0) { // Scroll down
            if (nextSection.length) {
                scrollToSection(nextSection.index());
            }
        }

        if (deltaY < 0) { // Scroll up
            if (prevSection.length) {
                scrollToSection(prevSection.index());
            }
        }
    });

    // $('#mapContainer').on('wheel', function() {
    //     scrollToSection(7);
    // });

    $('.pointer__link, .menu__link, .button_order').on('click', function(e) {
        e.preventDefault();
        var href = parseInt($(this).attr('href'));
        scrollToSection(href);
    });

    $(document).on('keydown', function(e) {
        var activeSection = sections.filter('.section_active'),
            nextSection = activeSection.next(),
            prevSection = activeSection.prev();

        switch (e.keyCode) {

            case 40 : // Scroll down
            if (nextSection.length) {
                scrollToSection(nextSection.index());
            } break;

            case 38 : // Scroll up
            if (prevSection.length) {
                scrollToSection(prevSection.index());
            } break;
        }
    });

    $('.down-arrow').on('click', function(e) {
        e.preventDefault();
        scrollToSection(1);
    });

});