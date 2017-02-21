var allProducts = getAllProducts();

var conferenceType = {

    cpp: [
        allProducts.appcode,
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
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm
    ],

    team: [
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack
    ],

    database: [
        allProducts.datagrip,
        allProducts.resharper,
        allProducts.rider,
        allProducts.youtrack
    ],

    web: [
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm,
        allProducts.rubymine
    ],

    mobile: [
        allProducts.appcode,
        allProducts.kotlin,
        allProducts.intellijIdea,
        allProducts.webstorm,
        allProducts.clion
    ],

    ios: [
        allProducts.appcode
    ]

};

// to switch on a playlist for a specific conference type,ª
// assign it to the currentPlaylist variable, i.e.:
// var currentPlaylist = conferenceType.dotnet;
var currentPlaylist = conferenceType.dotnet;
