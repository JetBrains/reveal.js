$(document).ready(function () {

  selectBackground();

  Reveal.addEventListener('slidechanged', function () {
    selectBackground();
  });

});

function selectBackground() {
  var currentSection = $('section.present');
  var matchingProductFound = false;

  for (var product in allProducts) {

    if ($(currentSection).attr('data-product') == allProducts[product]) {
      $('body').removeClass().addClass(allProducts[product].concat('-background'));
      matchingProductFound = true;
      break;
    }
  }

  if(matchingProductFound == false) {
    $('body').removeClass().addClass('default-background');
  }
}

function handleActiveProducts() {
  if (!currentPlaylist) {
    return;
  }

  var slidesToRemove = [];
  var products = [];

  $('.slides section').each(function () {
    var $slide = $(this);
    var slideProduct = $slide.attr('data-product');
    products.push(slideProduct);

    if (currentPlaylist.indexOf(slideProduct) == -1) {
      slidesToRemove.push($slide);
    }
  });

  products = $.unique(products);

  $(slidesToRemove).each(function () {
    $(this).remove();
  });

  console.log('Available products: %s', products.join(', '));
}