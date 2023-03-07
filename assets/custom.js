$('.email-form-open').on('click', function(e){
  e.preventDefault();
  console.log('here');
  if(window.innerWidth >= 760){
  //call the desktop creative
  window.__attentive.trigger(null,null,null,290164)
  } else {
  //call the mobile creative
  window.__attentive.trigger(null,null,null, 290163)
  }
});

function reduceZIndex() {
  // console.log($('#smile-ui-container'));
  $('#smile-ui-container').attr('style', 'z-index: 9 !important');

  setTimeout(function(){
    reduceZIndex();
  }, 1000);
}

$(document).on('click', '.collection__top-filter-open', function(){
  $('.collection-mobile-filter-content').addClass('active');
})

$(document).on('click', '.Drawer.filterNav .Button--close', function(){
  $('.collection-mobile-filter-content').removeClass('active');
});


const thumbsSlider = $('.mainImages').slick({
  asNavFor: '.Gallery__thumbnails .wrapper',
  arrows: true,
  prevArrow: $('.Gallery__nav .previous'),
  nextArrow: $('.Gallery__nav .next'),

});
const mainImageSlider = $('.Gallery__thumbnails .wrapper').slick({
  asNavFor: '.mainImages',
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  vertical: true
})

$(document).on('change', '[data-single-option-selector]', function(e){
  const sizeValue = $(this).val().toLowerCase();
  const imageIndex = $(this).data('image-index');
  if(imageIndex) {
    $(`[data-media-index="${ imageIndex }"]`).trigger('click');

  }
  $('.Gallery__thumbnails .item').hide();
  $(`.Gallery__thumbnails .item[data-size="${ sizeValue }"]`).show();
  $(`.Gallery__thumbnails .item[data-size="all"]`).show();
  $('.Gallery__item').hide();
  $(`.Gallery__item[data-size="${ sizeValue }"]`).show();
  $(`.Gallery__item[data-size="all"]`).show();
  // mainImageSlider.reInit();
  // thumbsSlider.reInit();
})


reduceZIndex();

if($('.GiftWrap').length > 0) {
  setInterval(() => {
    $('.GiftWrap').find('.row:first-child label').html('Purchase Gift Box');
    $('.GiftWrap').find('.row:nth(1) label').html('Receiver Name');
  }, 100);
}

if($('.image-gallery').length > 0) {
  $('.image-gallery').slick({
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
}