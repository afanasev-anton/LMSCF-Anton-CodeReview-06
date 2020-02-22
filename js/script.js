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
        locations.push(this);
    }
    Loc.prototype.display = function () {
        return "<div class=\"col-md-6 col-lg-3 p-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body bg-light\" style=\"height:200px\">\n\t\t    \t\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t\t<p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + "</p>\t\t    \t\t\t\t\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<button type=\"button\" class=\"btn btn-danger\">favourite</button>\n\t\t    \t\t\t<img class=\"card-img-bottom img-fluid\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t    \t\t\t</div>\n    \t\t\t</div>";
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
        return "<div class=\"col-md-6 col-lg-3 p-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body bg-light\" style=\"height:300px\">\n\t\t    \t\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t\t<p class=\"card-text\">" + this.address + ", " + this.zipCode + " " + this.city + ", " + this.telNumber + "<br>\n\t\t    \t\t\t\t" + this.foodType + " food<br>\n\t\t    \t\t\t\t<a href=\"" + this.webPage + "\">" + this.webPage + "</a></p>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<button type=\"button\" class=\"btn btn-danger\">favourite</button>\n\t\t    \t\t\t<img class=\"card-img-bottom img-fluid\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t    \t\t\t</div>\n    \t\t\t</div>";
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
        return "<div class=\"col-md-6 col-lg-3 p-3\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body bg-light\" style=\"height:300px\">\n\t\t    \t\t\t\t<h4 class=\"card-title\">" + this.name + "</h4>\n\t\t    \t\t\t\t<p class=\"card-text\">" + this.eventDate + "<br>\n\t\t    \t\t\t\t" + this.eventTime + "<br>\n\t\t    \t\t\t\t&euro; " + this.price + "<br>\n\t\t    \t\t\t\t" + this.address + ", " + this.zipCode + " " + this.city + "</p>\n\t\t    \t\t\t</div>\n\t\t    \t\t\t<button type=\"button\" class=\"btn btn-danger\">favourite</button>\n\t\t    \t\t\t<img class=\"card-img-bottom img-fluid\" src=\"" + this.thumb + "\" alt=\"Thumbnail\">\n\t    \t\t\t</div>\n    \t\t\t</div>";
    };
    return EventLoc;
}(Loc));
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
var locEv2 = new EventLoc("Guns ‘n Roses", "1020", "Vienna", "Ernst-Happel Stadion, Meiereistraße 7", "img/gunsnroses.jpg", "Sat, 09.06.2020.", "19:30", 95.50);
//create a list of Objects in array on Html page
function showLocations(arr, type) {
    var list = document.createElement("DIV");
    list.className = "row mt-4";
    list.innerHTML = "<h3 class=\"w-100 text-dark\">" + type + "</h3>";
    document.getElementById("main").appendChild(list);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].type == type) {
            list.innerHTML += arr[i].display();
        }
    }
}
//show objects
document.getElementById("main").innerHTML = "";
showLocations(locations, "Locations");
showLocations(locations, "Food");
showLocations(locations, "Events");
//change style of cards, depend of window size
/*function WinWidth() {
    var w = window.innerWidth;
    console.log(w);
    if (w<=576) {
        var pics = document.getElementsByClassName("card-img-bottom img-fluid");
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
    }
}
var int = setInterval(WinWidth, 1000);
if (window.innerWidth <= 576)
clearInterval(int);*/ 
