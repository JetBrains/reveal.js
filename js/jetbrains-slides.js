$(document).ready(function () {
    selectBackground();

    var initialConfig = $.extend({}, Reveal.getConfig());

    function initStuff(event) {
        selectBackground();

        var video = event.currentSlide.querySelector('video.stretch');
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

            $('body').addClass('fullscreen-mode');
        } else {
            $('body').removeClass('fullscreen-mode');
        }

        Reveal.configure(config);
    }

    Reveal.addEventListener('ready', initStuff);
    Reveal.addEventListener('slidechanged', initStuff);
});

function selectBackground() {
    var currentSection = $('section.present');
    var matchingProductFound = false;

    for (var product in allProducts) {
        if ($(currentSection).hasClass('no-background')) {
            $('body').removeClass().addClass('black-background');
            $(currentSection).css('padding-top', 0);
            matchingProductFound = true;
            break;
        }

        if ($(currentSection).attr('data-product') == allProducts[product]) {
            $('body').removeClass().addClass(allProducts[product].concat('-background'));
            matchingProductFound = true;
            break;
        }
    }

    if (matchingProductFound == false) {
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