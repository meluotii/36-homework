let active = false;

function toggleGallery() {
    const gallery = $('.block-gallery');
    const galleryActive = $('.block-active');


    if (!active) {
        gallery.fadeToggle(50);
        galleryActive.fadeToggle(1000);
        active = true;
    } else {
        $('html, body').animate({
            scrollTop: $('#gallery').offset().top
        });
        galleryActive.fadeToggle(0);
        gallery.fadeToggle(1000);
        active = false;

    }

}

$('.block-gallery__button').click(toggleGallery);
$('.block-active__button').click(toggleGallery);
