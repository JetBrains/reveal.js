var allProducts = getAllProducts();

var conferenceType = {

    cpp: [
        allProducts.appcode,
        allProducts.clion,
        allProducts.resharperCpp
    ],

    dotnet: [
        allProducts.resharper,
        allProducts.resharperCpp,
        allProducts.dottrace,
        allProducts.dotcover,
        allProducts.dotmemory,
        allProducts.dotpeek
    ]
};

var currentPlaylist = conferenceType.cpp;
