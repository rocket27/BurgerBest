$(document).ready(function() {
    $('.menu-list__trigger').on('click', function (e) {
        e.preventDefault();

        var menuListItem = $(this).closest('.menu-list__item');
        var menuListText = menuListItem.find('.menu-list__text');
        var menuListContent = menuListItem.find('.menu-list__content');
        var menuListItemInactive = menuListItem.siblings();
        
        if (menuListItem.hasClass('menu-list__item_active')) {
            menuListItem.removeClass('menu-list__item_active');
        } else {
            menuListItem.addClass('menu-list__item_active');
            menuListItemInactive.removeClass('menu-list__item_active');
        }
    }); 
});