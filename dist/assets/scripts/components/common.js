function size(){
    var a = $(window).width();
        if (a <= '320'){
        $(".traingle-box__item").removeAttr("preserveAspectRatio");
    } else {
        $(".traingle-box__item").attr("preserveAspectRatio", 'none');
    }
};

$(window).on('load resize', size);
