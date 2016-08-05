$(document).ready(function () {

  selectBackground();

  Reveal.addEventListener('slidechanged', function () {
    selectBackground();
    selectBackground(styleMappings);

    var initialConfig = $.extend({}, Reveal.getConfig());

    // Video slide handler
    Reveal.addEventListener('slidechanged', function (event) {
        selectBackground(styleMappings);

        var video = event.currentSlide.querySelector('video');
        var hasVideo = video != null;
        var viewport = {
            width: $(window).width(),
            height: $(window).height()
        };
        var config = {
            width: initialConfig.width,
            height: initialConfig.height,
            minScale: initialConfig.minScale,
            maxScale: initialConfig.maxScale,
            margin: initialConfig.margin
        };

        if (hasVideo) {
            config = {
                width: viewport.width,
                height: viewport.height,
                minScale: 1,
                maxScale: 1,
                margin: 0
            };

            $(video).css({
                width: viewport.width,
                height: viewport.height
            });
  });
            $('body').addClass('blank-background');
        } else {
            $('body').removeClass('blank-background');
        }

        Reveal.configure(config);
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