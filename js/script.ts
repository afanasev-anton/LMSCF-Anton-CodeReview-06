const locations:any = [];
//all classes
class Loc {
	name:string;
	zipCode:string;
	city:string;
	address:string;
	thumb:string;
	type:string;
	constructor(name,zip,city,address,thumb) {
		this.name = name;
		this.zipCode = zip;
		this.city = city;
		this.address = address;
		this.thumb = thumb;
		this.type = "Locations";
		locations.push(this);
	}

	display(){
		return `<div class="col-md-6 col-lg-3 p-3">
					<div class="card">
						<div class="card-body bg-light" style="height:200px">
		    				<h4 class="card-title">${this.name}</h4>
		    				<p class="card-text">${this.address}, ${this.zipCode} ${this.city}</p>		    				
		    			</div>
		    			<button type="button" class="btn btn-danger">favourite</button>
		    			<img class="card-img-bottom img-fluid" src="${this.thumb}" alt="Thumbnail">
	    			</div>
    			</div>`;
	}
}
class Restaurant extends Loc {
	telNumber:string;
	foodType :string;
	webPage :string;
	constructor(name,zip,city,address,thumb,telefone,type,webPage) {
		super (name,zip,city,address,thumb);
		this.telNumber = telefone;
		this.foodType = type;
		this.webPage = webPage;
		this.type = "Food";
	}
	display(){
		return `<div class="col-md-6 col-lg-3 p-3">
					<div class="card">
						<div class="card-body bg-light" style="height:300px">
		    				<h4 class="card-title">${this.name}</h4>
		    				<p class="card-text">${this.address}, ${this.zipCode} ${this.city}, ${this.telNumber}<br>
		    				${this.foodType} food<br>
		    				<a href="${this.webPage}">${this.webPage}</a></p>
		    			</div>
		    			<button type="button" class="btn btn-danger">favourite</button>
		    			<img class="card-img-bottom img-fluid" src="${this.thumb}" alt="Thumbnail">
	    			</div>
    			</div>`;
	}
}
class EventLoc extends Loc {
	eventDate :string;
	eventTime :string;
	price :number;
	constructor(name,zip,city,address,thumb,date,time,price) {
		super(name,zip,city,address,thumb);
		this.eventDate = date;
		this.eventTime = time;
		this.price = price;
		this.type = "Events";
	}
	display(){
		return `<div class="col-md-6 col-lg-3 p-3">
					<div class="card">
						<div class="card-body bg-light" style="height:300px">
		    				<h4 class="card-title">${this.name}</h4>
		    				<p class="card-text">${this.eventDate}<br>
		    				${this.eventTime}<br>
		    				&euro; ${this.price}<br>
		    				${this.address}, ${this.zipCode} ${this.city}</p>
		    			</div>
		    			<button type="button" class="btn btn-danger">favourite</button>
		    			<img class="card-img-bottom img-fluid" src="${this.thumb}" alt="Thumbnail">
	    			</div>
    			</div>`;
	}
}
//add objects of class Location
let loc1 = new Loc ("Schönbrunn Park","1130","Vienna","Maxingstraße 13b","img/schonn.jpg");
let loc2 = new Loc ("Schloss Belvedere","1030","Vienna","Prinz Eugen-Straße 27","img/belv.jpg");
let loc3 = new Loc ("Singel canal","1010","Amsterdam","Canal Belt","img/amster.jpg");
let loc4 = new Loc ("Aiguille d'Etretat","76790","Étretat","Étretat","img/france.jpg");
//add objects of class Restaurant
let locRest1 = new Restaurant ("BioFrische","1150","Vienna","Stutterheimstraße 6","img/indian.jpg","+43(1)9529215","Indian","https://biofrische.wien/");
let locRest2 = new Restaurant ("Steak House","1010","Vienna","Fleischerhofgasse 7","img/steak.jpg","+43(1)6669991","American","steak-house.wien");
let locRest3 = new Restaurant ("Lenin","1015","Amsterdam","Herengracht 57","img/burgers.jpg","+31(20)45352515","Fast","lenin-loves-burgers.com");

//add objects of class Event
let locEv1 = new EventLoc ("Cats- the musical","1010","Vienna","Ronacher-Seilerstätte 9","img/cats.jpg","Fr., 15.12.2020.","20:00",120);
let locEv2 = new EventLoc ("Guns ‘n Roses","1020","Vienna","Ernst-Happel Stadion, Meiereistraße 7","img/gunsnroses.jpg","Sat, 09.06.2020.","19:30",95.50);

//create a list of Objects in array on Html page
function showLocations(arr,type){
	let list = document.createElement("DIV");
	list.className = `row mt-4`;
	list.innerHTML = `<h3 class="w-100 text-dark">${type}</h3>`;
	document.getElementById("main").appendChild(list);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].type == type) {
			list.innerHTML += arr[i].display();
		}		
	}
}

//show objects
document.getElementById("main").innerHTML = "";
showLocations(locations,"Locations");
showLocations(locations,"Food");
showLocations(locations,"Events");

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