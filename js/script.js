var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = [];
//all classes
var Loc = /** @class */ (function () {
    function Loc(name, zip, city, address, thumb) {
        this.name = name;
        this.zipCode = zip;
        this.city = city;
        this.address = address;
        this.thumb = thumb;
        this.type = "Locations";
        this.dateOfcreating = new Date();
        this.fav = false;
        locations.push(this);
    }
    Loc.prototype.sayDate = function () { return this.dateOfcreating.toUTCString(); };
    Loc.prototype.display = function () {
        return "<div class=\"card\">\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"card-body bg-light\">\n\t\t    \t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t<p class=\"card-text\">" + this.address + ",<br>\n\t\t    \t\t\t\t" + this.zipCode + " " + this.city + "<br>\n\t\t    \t\t\t\t<span class=\"small text-secondary\">Created: " + this.sayDate() + "</span>\n\t\t    \t\t\t</p>\n\t\t    \t\t</div>\n\t\t    \t\t<img class=\"card-img-bottom img-fluid d-none d-sm-block\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t\t    \t\t<button id=\"" + this.thumb + "\" type=\"button\" class=\"btn btn-danger w-50 mx-auto\">favourite</button>\n    \t\t\t</div>";
    };
    Loc.prototype.setFavourite = function () {
        if (!this.fav) {
            this.fav = true;
        }
        else {
            this.fav = false;
        }
    };
    return Loc;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, zip, city, address, thumb, telefone, type, webPage) {
        var _this = _super.call(this, name, zip, city, address, thumb) || this;
        _this.telNumber = telefone;
        _this.foodType = type;
        _this.webPage = webPage;
        _this.type = "Food";
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"card  bg-light\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t    \t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t<p class=\"card-text\">" + this.address + ",<br>\n\t\t    \t\t\t\t" + this.zipCode + " " + this.city + ", " + this.telNumber + "<br>\n\t\t    \t\t\t\t" + this.foodType + " food<br>\n\t\t    \t\t\t\t<a href=\"" + this.webPage + "\">" + this.webPage + "</a><br>\n\t\t    \t\t\t\t<span class=\"small text-secondary\">Created: " + this.sayDate() + "</span>\n\t\t    \t\t\t</p>\n\t\t    \t\t</div>\n\t\t    \t\t<img class=\"card-img-bottom img-fluid d-none d-sm-block\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t\t    \t\t<button id=\"" + this.thumb + "\" type=\"button\" class=\"btn btn-danger w-50 mx-auto\">favourite</button>\n    \t\t\t</div>";
    };
    return Restaurant;
}(Loc));
var EventLoc = /** @class */ (function (_super) {
    __extends(EventLoc, _super);
    function EventLoc(name, zip, city, address, thumb, date, time, price) {
        var _this = _super.call(this, name, zip, city, address, thumb) || this;
        _this.eventDate = date;
        _this.eventTime = time;
        _this.price = price;
        _this.type = "Events";
        return _this;
    }
    EventLoc.prototype.display = function () {
        return "<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body bg-light\">\n\t\t    \t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t<p class=\"card-text\">" + this.eventDate + "<br>\n\t\t    \t\t\t" + this.eventTime + "<br>\n\t\t    \t\t\t&euro; " + this.price + "<br>\n\t\t    \t\t\t" + this.address + ",<br>\n\t\t    \t\t\t" + this.zipCode + " " + this.city + "<br>\n\t\t    \t\t\t<span class=\"small text-secondary\">Created: " + this.sayDate() + "</span></p>\n\t\t    \t\t</div>\n\t\t    \t\t<img class=\"card-img-bottom img-fluid d-none d-sm-block\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t\t    \t\t<button id=\"" + this.thumb + "\" type=\"button\" class=\"btn btn-danger w-50 mx-auto\">favourite</button>\n\t    \t\t</div>";
    };
    return EventLoc;
}(Loc));
var City = /** @class */ (function () {
    function City(name) {
        this.name = name;
        this.thumb = "img/town.jpg";
    }
    City.prototype.display = function () {
        return "<div class=\"card\">\n\t\t\t\t\t<div class=\"card-img-overlay text-white\">\n\t\t    \t\t\t<h4 class=\"card-title bg-secondary\">" + this.name + "</h4>\n\t\t    \t\t</div>\n\t\t    \t\t<img class=\"card-img-bottom img-fluid d-none d-sm-block\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n    \t\t\t</div>";
    };
    return City;
}());
//add objects of class Location
var loc1 = new Loc("Schönbrunn Park", "1130", "Vienna", "Maxingstraße 13b", "img/schonn.jpg");
var loc2 = new Loc("Schloss Belvedere", "1030", "Vienna", "Prinz Eugen-Straße 27", "img/belv.jpg");
var loc3 = new Loc("Singel canal", "1010", "Amsterdam", "Canal Belt", "img/amster.jpg");
var loc4 = new Loc("Aiguille d'Etretat", "76790", "Étretat", "Étretat", "img/france.jpg");
//add objects of class Restaurant
var locRest1 = new Restaurant("BioFrische", "1150", "Vienna", "Stutterheimstraße 6", "img/indian.jpg", "+43(1)9529215", "Indian", "https://biofrische.wien/");
var locRest2 = new Restaurant("Steak House", "1010", "Vienna", "Fleischerhofgasse 7", "img/steak.jpg", "+43(1)6669991", "American", "steak-house.wien");
var locRest3 = new Restaurant("Lenin", "1015", "Amsterdam", "Herengracht 57", "img/burgers.jpg", "+31(20)45352515", "Fast", "lenin-loves-burgers.com");
//add objects of class Event
var locEv1 = new EventLoc("Cats- the musical", "1010", "Vienna", "Ronacher-Seilerstätte 9", "img/cats.jpg", "Fr., 15.12.2020.", "20:00", 120);
var locEv2 = new EventLoc("Guns ‘n Roses", "1020", "Vienna", "Meiereistraße 7", "img/gunsnroses.jpg", "Sat, 09.06.2020.", "19:30", 95.50);
//create a list of Objects in array on Html page
function showLocations(arr, type) {
    var list = document.createElement("DIV");
    list.className = "row mt-4 p-3";
    list.innerHTML = "<h3 class=\"w-100 text-dark\">" + type + "</h3>";
    document.getElementById("main").appendChild(list);
    if (type == "") {
        for (var i = 0; i < arr.length; i++) {
            list.innerHTML += "<div class=\"col-md-6 col-lg-3 p-3\">" + arr[i].display() + "</div>";
        }
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].type == type) {
                list.innerHTML += "<div class=\"col-md-6 col-lg-3 p-3\">" + arr[i].display() + "</div>";
            }
        }
    }
    //favourite
    var favB = document.getElementsByClassName("btn btn-danger w-50 mx-auto");
    var _loop_1 = function (i_1) {
        document.getElementById(arr[i_1].thumb).addEventListener("click", function () { changeFav(arr[i_1]); });
    };
    //console.log(favB);
    for (var i_1 = 0; i_1 < favB.length; i_1++) {
        _loop_1(i_1);
    }
}
function changeFav(obj) {
    obj.setFavourite();
    console.log(obj);
    console.log("hi");
}
//create a list of favourite locations
function showFavourite(arr) {
    var list = document.createElement("DIV");
    list.className = "row mt-4 p-3";
    list.innerHTML = "<h3 class=\"w-100 text-dark\">Favourite</h3>";
    document.getElementById("main").appendChild(list);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].fav) {
            list.innerHTML += "<div class=\"col-md-6 col-lg-3 p-3\">" + arr[i].display() + "</div>";
        }
    }
}
//create random objects
function showRandom(arr) {
    document.getElementById("main").innerHTML = "";
    console.log(arr.length);
    var r = Math.floor(Math.random() * arr.length);
    console.log(r);
    var list = document.createElement("DIV");
    list.className = "row mt-4 p-3";
    list.innerHTML = "<h2 class=\"w-100 text-dark text-center\">What to visit?<br>\n\t\t\t\t\t<span class=\"small text-danger\">Advice for today</span></h2>\n\t\t\t\t\t<div class=\"col-6 p-3 mx-auto\">" + arr[r].display() + "</div>";
    ;
    document.getElementById("main").appendChild(list);
}
showRandom(locations);
//navigation menu
//-----  home button
document.getElementById("home").addEventListener('click', function () { showRandom(locations); });
//-----  all Locations
document.getElementById("all-locs").addEventListener('click', function () {
    document.getElementById("main").innerHTML = "";
    showLocations(locations, "Locations");
    showLocations(locations, "Food");
    showLocations(locations, "Events");
});
//-----  Restaurants
document.getElementById("rest").addEventListener('click', function () {
    document.getElementById("main").innerHTML = "";
    showLocations(locations, "Food");
});
//-----  Events
document.getElementById("event").addEventListener('click', function () {
    document.getElementById("main").innerHTML = "";
    showLocations(locations, "Events");
});
//-----  Favourite
document.getElementById("fav").addEventListener('click', function () {
    document.getElementById("main").innerHTML = "";
    showFavourite(locations);
});
//sorting
document.getElementById("sort").addEventListener('click', function () {
    switch (document.getElementById("props").value) {
        case "by-dateMax":
            var newArr = locations;
            newArr.sort(function (a, b) { return b.dateOfcreating - a.dateOfcreating; });
            document.getElementById("main").innerHTML = "";
            showLocations(newArr, "");
            break;
        case "by-dateMin":
            var newArr = locations;
            newArr.sort(function (a, b) { return a.dateOfcreating - b.dateOfcreating; });
            document.getElementById("main").innerHTML = "";
            showLocations(newArr, "");
            break;
        case "by-city":
            var newArr = [];
            var cities = [];
            var isCity = false;
            for (var i = 0; i < locations.length; i++) {
                for (var j = 0; j < cities.length; j++) {
                    if (locations[i].city == cities[j]) {
                        isCity = true;
                    }
                }
                if (!isCity) {
                    cities.push(locations[i].city);
                }
                else {
                    isCity = false;
                }
            }
            for (var i = 0; i < cities.length; i++) {
                newArr.push(new City(cities[i]));
                for (var j = 0; j < locations.length; j++) {
                    if (locations[j].city == cities[i]) {
                        newArr.push(locations[j]);
                    }
                }
            }
            document.getElementById("main").innerHTML = "";
            showLocations(newArr, "");
            break;
    }
});
