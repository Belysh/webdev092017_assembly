$(function(){
    $("#message").on("submit", function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();
        $.ajax({
            url: "assets/php/send.php",
            type: "POST",
            dataType: 'JSON',
            data: formData,
            success: function(data) {
                console.log(formData);
            }
         }).fail(function(ans) {
            console.log('На сервере произошла ошибка/ php лагает');
            form.find('.conect__message').text('На сервере произошла ошибка');
  });
    });
});
