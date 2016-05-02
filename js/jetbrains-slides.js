
$(document).ready(function() {

    var styleMappings = [
        ['resharper-slide', 'resharper-background'],
        ['dottrace-slide', 'dottrace-background'],
        ['dotcover-slide', 'dotcover-background'],
        ['resharper-ultimate-intro', 'resharper-ultimate-background'],
        ['resharper-intro', 'resharper-intro-background'],
        ['resharper-cpp-slide', 'resharper-cpp-background'],
    ];

    // TODO Select the right body style on load, not only on mutation
    $('body').removeClass().addClass('resharper-ultimate-background');

    // select the target node
    var target = document.querySelector('section');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {

        var currentSection = $('section.present');

        var matchingStyles = [];

        for (var i = 0; i < styleMappings.length; i++) {

            var oneOfValidSectionStyles = styleMappings[i][0];

            if ($(currentSection).hasClass(oneOfValidSectionStyles))
            {
                matchingStyles.push(oneOfValidSectionStyles);

                $('body').removeClass().addClass(styleMappings[i][1]);

                break;
            }
        }

        if(matchingStyles.length === 0) {
            $('body').removeClass().addClass('default-background');
        }

    });

    // configuration of the observer:
    var config = { attributes: true, childList: false, characterData: false };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

});
