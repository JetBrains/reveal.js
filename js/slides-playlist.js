var products = getAllProducts();

var conferenceType = {

    cpp: [
        products.appcode,
        products.clion,
        products.resharperCpp
    ],

    dotnet: [
        products.resharper,
        products.resharperCpp,
        products.dottrace,
        products.dotcover,
        products.dotmemory,
        products.dotpeek
    ]
};

var activeProducts = conferenceType.cpp;
