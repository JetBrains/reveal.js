$(document).ready(function() {

    var styleMappings = [
        ['resharper-slide', 'resharper-background'],
        ['dottrace-slide', 'dottrace-background'],
        ['dotcover-slide', 'dotcover-background'],
        ['dotmemory-slide', 'dotmemory-background'],
        ['dotpeek-slide', 'dotpeek-background'],
        ['resharper-cpp-slide', 'resharper-cpp-background'],
        ['rider-slide', 'rider-background'],
        ['webstorm-slide', 'webstorm-background'],
        ['appcode-slide', 'appcode-background'],
        ['clion-slide', 'clion-background'],
        ['intellij-slide', 'intellij-background'],
        ['phpstorm-slide', 'phpstorm-background'],
        ['pycharm-slide', 'pycharm-background'],
        ['rubymine-slide', 'rubymine-background'],
        ['teamcity-slide', 'teamcity-background'],
        ['upsource-slide', 'upsource-background'],
        ['youtrack-slide', 'youtrack-background'],
        ['kotlin-slide', 'kotlin-background'],
        ['datagrip-slide', 'datagrip-background'],
        ['hub-slide', 'hub-background'],
        ['mps-slide', 'mps-background'],
    ];

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

            $('body').addClass('blank-background');
        } else {
            $('body').removeClass('blank-background');
        }

        Reveal.configure(config);
    });

});

function selectBackground(styleMappings) {
    var currentSection = $('section.present');

    var matchingStyles = [];

    for (var i = 0; i < styleMappings.length; i++) {

        var oneOfValidSectionStyles = styleMappings[i][0];

        if ($(currentSection).hasClass(oneOfValidSectionStyles)) {
            matchingStyles.push(oneOfValidSectionStyles);

            $('body').removeClass().addClass(styleMappings[i][1]);

            break;
        }
    }

    if (matchingStyles.length === 0) {
        $('body').removeClass().addClass('default-background');
    }
}

