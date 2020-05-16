$('.main__circle-arrow').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('#about').offset().top
        })
}
);

$('.header__logo').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('body').offset().top
        })
}
);

$('.info-brand__logo').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('body').offset().top
        })
}
);


document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', event => {
        $('.tab-item__circle.active').removeClass('active');

        const tab = (event.target.getAttribute('data-tab'));
        event.target.querySelector('span').classList.add('active');
        if (tab == 'contact') {
            $('html, body').animate({
                scrollTop: $(`#${tab}`).offset().top - 400
            }, 1000)
        } else {
            $('html, body').animate({
                scrollTop: $(`#${tab}`).offset().top
            }, 1000)
        }

    })
})



$('.js-menu-toggler').click(function () {
    $(this).toggleClass('header__toggler--open');
    $('.js-menu').fadeToggle();
    $('.header').toggleClass('toggled')

});
