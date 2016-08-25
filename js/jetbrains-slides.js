$(document).ready(function () {

  selectBackground();

  // select the target node
  var target = document.querySelector('section');

  // create an observer instance
  var observer = new MutationObserver(function (mutations) {
    selectBackground();
  });

  // configuration of the observer:
  var config = {attributes: true, childList: false, characterData: false};

  // pass in the target node, as well as the observer options
  observer.observe(target, config);
});

function selectBackground() {
  var currentSection = $('section.present');
  var matchingProductFound = false;

  for (var product in products) {

    if ($(currentSection).attr('data-product') == products[product]) {
      $('body').removeClass().addClass(products[product].concat('-background'));
      matchingProductFound = true;
      break;
    }
  }

  if(matchingProductFound == false) {
    $('body').removeClass().addClass('default-background');
  }
}

function handleActiveProducts() {
  if (!activeProducts) {
    return;
  }

  var slidesToRemove = [];
  var products = [];

  $('.slides section').each(function () {
    var $slide = $(this);
    var slideProduct = $slide.attr('data-product');
    products.push(slideProduct);

    if (activeProducts.indexOf(slideProduct) == -1) {
      slidesToRemove.push($slide);
    }
  });

  products = $.unique(products);

  $(slidesToRemove).each(function () {
    $(this).remove();
  });

  console.log('Available products: %s', products.join(', '));
}