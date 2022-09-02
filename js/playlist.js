var allProducts = getAllProducts();

var conferenceType = {

    cpp: [
        allProducts.clion,
        allProducts.resharperCpp,
        allProducts.general
    ],

    dotnet: [
        allProducts.resharper,
        allProducts.resharperCpp,
        allProducts.dottrace,
        allProducts.dotcover,
        allProducts.dotmemory,
        allProducts.dotpeek,
        allProducts.rider
    ],

    java: [
        allProducts.intellijIdea,
        allProducts.kotlin,
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm
    ],

    go: [
        allProducts.goland,
        // allProducts.teamcity,
        // allProducts.upsource,
        // allProducts.youtrack,
        allProducts.webstorm,
        allProducts.datagrip
    ],

    team: [
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.space,
        allProducts.teamcity
    ],

    velocity: [
        allProducts.teamcity,
        allProducts.webstorm,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.space
    ],

    database: [
        allProducts.datagrip
    ],

    web: [
        allProducts.teamcity,
        allProducts.space,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm,
        allProducts.rubymine
    ],

    mobile: [
        allProducts.appcode,
        allProducts.kotlin,
        allProducts.intellijIdea,
        allProducts.webstorm
    ],

    ios: [
        allProducts.appcode
    ],

    python: [
        allProducts.pycharm
    ],

    php: [
        allProducts.phpstorm
        // allProducts.datagrip,
        // allProducts.webstorm
    ],

    devopscon: [
        allProducts.teamcity,
        allProducts.pycharm,
        allProducts.upsource,
        allProducts.youtrack
    ],

    gaming: [
        allProducts.general,
        allProducts.GameDevIntro,
        allProducts.GameDevUnityIntro,
        allProducts.riderUnity,
        allProducts.GameDevUnrealIntro,
        allProducts.resharperCpp,
        allProducts.clion,
        allProducts.riderCppPreview,
        allProducts.GameDevTeamIntro,
        allProducts.teamcity,
        allProducts.space,
        allProducts.youtrack
    ]
};

// to switch on a playlist for a specific conference type,ª
// assign it to the currentPlaylist variable, i.e.:
// var currentPlaylist = conferenceType.dotnet;
var currentPlaylist = conferenceType.gaming;
