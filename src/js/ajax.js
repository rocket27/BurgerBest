// $(document).ready(function() {
//     $('#order-form').on('submit', function(e) {
//         e.preventDefault();

//         var form = $(this),
//             formData = form.serialize();

//         $.ajax({
//             url : '../form.php',
//             type : 'POST',             
//             data : formData,
//             success : function(data) {

//                 var messageSent = data.status ? '#success' : '#error';
                
//                 $.fancybox.open([
//                     {href : messageSent}
//                 ], {
//                     type : 'inline',
//                     maxWidth : 345,
//                     fitToView : false,
//                     padding : 0,
//                     afterClose : function() {
//                         form.trigger('reset');
//                     }
//                 });
//             }
//         })
//     });
// });

// $('.messageSent__close').on('click', function(e) {
//     e.preventDefault();
//     $.fancybox.close();
// })

$(document).ready(function() {
    $('#order-form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this),
            formData = form.serialize();
        $.ajax({
            url: "../form.php",
            data: formData,
            type: "POST"
        }).done(function(message) {
            //Что то выполняет при получении ответа от сервера
            var errorMessage = $('.messageSent__text_error');
            var result = $.parseJSON(message);

            if (!result.error) {
                $.fancybox.open({
                    src : '#success',
                    type : 'inline',
                    // maxWidth : 345,
                    // fitToView : false,
                    // padding : 0,
                    opts : {
                        afterClose : function() {
                            form.trigger('reset');
                        }
                    }
                });
            } else {
                errorMessage.text(result.error);
                $.fancybox.open({
                    src : '#error',
                    type : 'inline',
                    // maxWidth : 345,
                    // fitToView : false,
                    // padding : 0,
                });
            }
        })
    });
});

$('.messageSent__close').on('click', function(e) {
    e.preventDefault();
    $.fancybox.close();
})