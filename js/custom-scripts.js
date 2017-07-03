$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    $('.select-control').click(function() {

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).children('span').text();
            var newPhone = $(this).find('a').html();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-city').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').html(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.select-location ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).children('span').text();
            var newLocation = $(this).find('.location-hidden').html();

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-location').find('.current-city').text(newCity);
            $(this).parents('.select-location').siblings('.link-phone').html(newLocation);

            $(this).parents('.select-location').removeClass('active');

        }

    });

    $('.callback').click(function() {
        $('.window-callback').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $( "#order-date" ).datepicker();

    $( "#order-time" ).timepicker({
        timeOnlyTitle: 'Выберите время',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Минуты',
        secondText: 'Секунды',
        currentText: 'Сейчас',
        closeText: 'Закрыть'
    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('header[role="banner"] nav').toggleClass('active');
    });

});
