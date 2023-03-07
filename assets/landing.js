setTimeout(function () {

  console.log($('[data-landing-image-slide]').length);
  
  $('[data-landing-image-slide]').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_148_3011)"><circle cx="27" cy="26" r="25" fill="white"/><circle cx="27" cy="26" r="24.75" stroke="#E9E9E9" stroke-width="0.5"/></g><path d="M25.5 22.25L29.25 26L25.5 29.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_d_148_3011" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_3011"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_3011" result="shape"/></filter></defs></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);"><g filter="url(#filter0_d_148_3011)"><circle cx="27" cy="26" r="25" fill="white"/><circle cx="27" cy="26" r="24.75" stroke="#E9E9E9" stroke-width="0.5"/></g><path d="M25.5 22.25L29.25 26L25.5 29.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_d_148_3011" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="1"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_3011"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_3011" result="shape"/></filter></defs></svg></button>',
    infinite: true
  });
}, 1000);
