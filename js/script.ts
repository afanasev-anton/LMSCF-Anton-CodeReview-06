const locations:any = [];
//all classes
class Loc {
	name:string;
	zipCode:string;
	city:string;
	address:string;
	thumb:string;
	type:string;
	dateOfcreating:any;
	fav:boolean;
	constructor(name,zip,city,address,thumb) {
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
	sayDate(){return this.dateOfcreating.toDateString();}
	display(){
		return `<div class="card">						
					<div class="card-body bg-light">
		    			<h4 class="card-title">${this.name}</h4>
		    			<p class="card-text">${this.address},<br>
		    				${this.zipCode} ${this.city}<br>
		    				<span class="small text-secondary">Created: ${this.sayDate()}</span>
		    			</p>
		    		</div>
		    		<img class="card-img-bottom img-fluid d-none d-sm-block" src="${this.thumb}" alt="Thumbnail">
		    		<button id="${this.thumb}" type="button" class="btn btn-danger w-50 mx-auto">favourite</button>
    			</div>`;
	}
	setFavourite(){
		if (!this.fav) {this.fav = true;} else {this.fav = false;}
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
		return `<div class="card  bg-light">
					<div class="card-body">
		    			<h4 class="card-title">${this.name}</h4>
		    			<p class="card-text">${this.address},<br>
		    				${this.zipCode} ${this.city}, ${this.telNumber}<br>
		    				${this.foodType} food<br>
		    				<a href="${this.webPage}">${this.webPage}</a><br>
		    				<span class="small text-secondary">Created: ${this.sayDate()}</span>
		    			</p>
		    		</div>
		    		<img class="card-img-bottom img-fluid d-none d-sm-block" src="${this.thumb}" alt="Thumbnail">
		    		<button id="${this.thumb}" type="button" class="btn btn-danger w-50 mx-auto">favourite</button>
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
		return `<div class="card">
					<div class="card-body bg-light">
		    			<h4 class="card-title">${this.name}</h4>
		    			<p class="card-text">${this.eventDate}<br>
		    			${this.eventTime}<br>
		    			&euro; ${this.price}<br>
		    			${this.address},<br>
		    			${this.zipCode} ${this.city}<br>
		    			<span class="small text-secondary">Created: ${this.sayDate()}</span></p>
		    		</div>
		    		<img class="card-img-bottom img-fluid d-none d-sm-block" src="${this.thumb}" alt="Thumbnail">
		    		<button id="${this.thumb}" type="button" class="btn btn-danger w-50 mx-auto">favourite</button>
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
	list.className = `row mt-4 p-3`;
	list.innerHTML = `<h3 class="w-100 text-dark">${type}</h3>`;
	document.getElementById("main").appendChild(list);
	if (type == "") {
		for (var i = 0; i < arr.length; i++) {
			list.innerHTML += `<div class="col-md-6 col-lg-3 p-3">${arr[i].display()}</div>`;
		}
	} else {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].type == type) {
				list.innerHTML += `<div class="col-md-6 col-lg-3 p-3">${arr[i].display()}</div>`;
				//favourite
				document.getElementById(arr[i].thumb).addEventListener("click",function(){
					arr[i].setFavourite();
				});
			}
		}
	}
}
//create a list of favourite locations
function showFavourite(arr){
	let list = document.createElement("DIV");
	list.className = `row mt-4 p-3`;
	list.innerHTML = `<h3 class="w-100 text-dark">Favourite</h3>`;
	document.getElementById("main").appendChild(list);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].fav) {
			list.innerHTML += `<div class="col-md-6 col-lg-3 p-3">${arr[i].display()}</div>`;
		}		
	}

}
//create random objects
function showRandom(arr){
	document.getElementById("main").innerHTML = "";
	console.log(arr.length);
	let r = Math.floor(Math.random()*arr.length);
	console.log(r);
	let list = document.createElement("DIV");
	list.className = `row mt-4 p-3`;
	list.innerHTML = `<h2 class="w-100 text-dark text-center">What to visit?<br>
					<span class="small text-danger">Advice for today</span></h2>
					<div class="col-6 p-3 mx-auto">${arr[r].display()}</div>`;;
	document.getElementById("main").appendChild(list);	
}

showRandom(locations);

//navigation menu
//-----  home button
document.getElementById("home").addEventListener('click',function(){showRandom(locations)});
//-----  all Locations
document.getElementById("all-locs").addEventListener('click',function(){
	document.getElementById("main").innerHTML = "";
	showLocations(locations,"Locations");
	showLocations(locations,"Food");
	showLocations(locations,"Events");
});

//-----  Restaurants
document.getElementById("rest").addEventListener('click',function(){
	document.getElementById("main").innerHTML = "";
	showLocations(locations,"Food");
});

//-----  Events
document.getElementById("event").addEventListener('click',function(){
	document.getElementById("main").innerHTML = "";
	showLocations(locations,"Events");
});

//-----  Favourite
document.getElementById("fav").addEventListener('click',function(){
	document.getElementById("main").innerHTML = "";
	showFavourite(locations);
});

//sorting
document.getElementById("props").addEventListener('click',function(){
	switch ((<HTMLSelectElement>document.getElementById("props")).value) {
		case "by-dateMax":
			locations.sort(function(a, b){return b.dateOfcreating - a.dateOfcreating});
			showLocations(locations,"");
			break;
		case "by-dateMin":
			locations.sort(function(a, b){return a.dateOfcreating - b.dateOfcreating});
			showLocations(locations,"");
			break;
		case "by-city":
			showLocations(locations,"");
			break;
	}
});