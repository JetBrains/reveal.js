$(document).ready(function() {

    var styleMappings = [
        ['resharper-slide', 'resharper-background'],
        ['dottrace-slide', 'dottrace-background'],
        ['dotcover-slide', 'dotcover-background'],
        ['dotmemory-slide', 'dotmemory-background'],
        ['dotpeek-slide', 'dotpeek-background'],
        ['resharper-ultimate-intro', 'resharper-ultimate-background'],
        ['resharper-intro', 'resharper-intro-background'],
        ['resharper-cpp-slide', 'resharper-cpp-background'],
        ['rider-slide', 'rider-background'],
        ['webstorm-slide', 'webstorm-background'],
        ['webstorm-intro', 'webstorm-intro-background'],
        ['appcode-slide', 'appcode-background'],
        ['appcode-intro', 'appcode-intro-background'],
        ['clion-slide', 'clion-background'],
        ['clion-intro', 'clion-intro-background']
    ];

    selectBackground(styleMappings);

    // select the target node
    var target = document.querySelector('section');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        selectBackground(styleMappings);
    });

    // configuration of the observer:
    var config = { attributes: true, childList: false, characterData: false };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

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

