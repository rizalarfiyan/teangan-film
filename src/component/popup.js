import $ from 'jquery';

const modalButton = $('[data-modal-target]')
const closeButton = $('[data-close-button]')
const overlay = $('#overlay')

modalButton.on('click', function () {
    let target = $(this).data('modal-target');
    if ($('body').find(target) != null) {
        $(target).addClass('active');
        $(overlay).addClass('active');
    }
});

overlay.on('click', function () {
    closeModal();
});

closeButton.on('click', function () {
    closeModal($(this).closest('.modal'));
});

$(document).on('keyup',function(data) {
    if (data.keyCode == 27 && $('.modal').has('.active')) {
        closeModal();
    }
});

function closeModal(data) {
    data == null || data == '' ? data = $('.modal.active') : data;
    data.removeClass('active')
    overlay.removeClass('active');
    $('body').css('overflow-y', 'auto');

    const modal = $('.modal');
    const image = modal.find('img');
    image.remove();
    modal.find('.label, .wrapdetail').html('');
    modal.find('.is-broken').removeClass('is-broken')
}