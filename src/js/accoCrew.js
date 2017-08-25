$(document).ready(function() {
    $('.crew-list__trigger').on('click', function(e) { 
        e.preventDefault();

        var crewListItem = $(this).closest('.crew-list__item');
        var crewListAbout = crewListItem.find('.crew-list__about');
        var reqHeight = crewListAbout.outerHeight(true);
        var crewListHidden = crewListItem.find('.crew-list__hidden');
        var crewListItemInactive = crewListItem.siblings();
        var crewListHiddenInactive = crewListItemInactive.find('.crew-list__hidden');

        if (crewListItem.hasClass('crew-list__item_active')) {
            crewListHidden.css('height', 0);
            crewListItem.removeClass('crew-list__item_active');
        } else {
            crewListItem.addClass('crew-list__item_active');
            crewListHidden.css('height', reqHeight);
            crewListHiddenInactive.css('height', 0);
            crewListItemInactive.removeClass('crew-list__item_active');
        }
    });
}); 