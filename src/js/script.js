$(document).ready(function () {
    $('.nav-toggle').on('click', function () {
        $('.nav__wrapper').slideToggle();
    })

    // progress
    let progress = $('.progpess__load');
    let progressData = $('.progpess__load').data('donate');
    progress.attr('style', 'width:' + progressData)

    // tabs
    $('.tabs__nav a').on('click', function (event) {
        event.preventDefault();
        $('.tabs__item--active').removeClass('tabs__item--active');
        $(this).parent().addClass('tabs__item--active');
        $('.tabs__content .tabs__content-item').hide();
        $($(this).attr('href')).show();
    });
    $('.tabs__nav a:first').trigger('click'); // Default
})

$(window).resize(function () {
    if ($(window).width() >= 567) {
        $('.nav__wrapper').removeAttr('style')
    }
})