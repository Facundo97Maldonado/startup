import Emitter from '/emitter.js';
import Logger from '/logger.js';
import Actor from '/actor.js';

class movie extends Emitter{

	constructor(title, year, duration){
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.cast = [];
	}
	play(){
		let playButton = document.getElementById("playButton");
		function playEvent(){
			let video = document.getElementById("FastAndFurious");
			video.load();
			video.play();
		}
		FastAndFurious.on("Play", playEvent);
		
		playButton.addEventListener('click', function(){
				FastAndFurious.emit('Play');
		});
	}
	pause(){
		let pauseButton = document.getElementById("pauseButton");
		function pauseEvent(){
			let video = document.getElementById("FastAndFurious");
			video.pause();
		}
		FastAndFurious.on("Pause", pauseEvent);
		
		pauseButton.addEventListener('click', function(){
				FastAndFurious.emit('Pause');
		});
	}
	resume(){
		let resumeButton = document.getElementById("resumeButton");
		function resumeEvent(){
			let video = document.getElementById("FastAndFurious");
			video.play();
		}
		FastAndFurious.on("Resume", resumeEvent);
			resumeButton.addEventListener('click', function(){
				FastAndFurious.emit('Resume');
		});
	}
	addCast(actor){
		if (Array.isArray(actor)) {
	    	for (let i = 0; i < actor.length; i++) {
	    	this.cast.push(actor[i].name);
	   		}
	  	}
	  	else{
	  		this.cast.push(actor)
	  	}
	}
}
let FastAndFurious = new movie("Fast and Furious 8", "2017", "03:44");
let Transformers = new movie("Transformers - The dark side of the moon", "2013", "02:38");
let Terminator = new movie("Terminator III", "2010", "03:15");
console.log(FastAndFurious);
console.log(Transformers);
console.log(Terminator);

let logger = new Logger(event);
FastAndFurious.on('Play', logger.log);
FastAndFurious.on('Pause', logger.log);
FastAndFurious.on('Resume', logger.log);
FastAndFurious.play();
FastAndFurious.pause();
FastAndFurious.resume();

let social = {

	share: function(friendName){
		console.log(friendName + " share " + this.title);
	},

	like: function(friendName){
		console.log(friendName + " like "  + this.title);
	}

}

FastAndFurious = Object.assign(FastAndFurious, social);
FastAndFurious.share('Mike Blessom');
FastAndFurious.like('Vin Diesel');

let toretto = new Actor("Vin Diesel", 46);
let otherCast = [
	oconner = new Actor("Paul Walker", "R.I.P."),
	hobbs = new Actor("Dwayne 'The Rock' Johnson", 40),
	deckard = new Actor("Jason Statham", 43)
];

FastAndFurious.addCast(toretto);
FastAndFurious.addCast(otherCast);
console.log(FastAndFurious.cast);