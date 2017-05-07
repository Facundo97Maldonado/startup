class Emitter{

	constructor(){
		this.events = {};
	}
	on(event, cb){
		if(this.events[event] === undefined)
			this.events[event] = [];
		this.events[event].push(cb);
	}
	emit(eventName, data) {
		let event = this.events[eventName];
		if( event ) {
		    event.forEach(fn => {
		      	fn.call(null, data);
		  	});
		}
	}
	off(event){
		if(!(this.events[event] === undefined))
			delete this.events[event];
	}

}
let event = new Emitter();

function firstLog(){
	console.log("First Log");
}
event.on('First Event', firstLog);
function secondLog(){
	console.log("Second Log");
}
event.on('Second Event', secondLog);

let eventButton = document.getElementById("firstEvent");
let otherButton = document.getElementById("secondEvent");
	
eventButton.addEventListener('click', function(){
	event.emit('First Event');
});
otherButton.addEventListener('click', function(){
	event.emit('Second Event');
});

event.off('First Event');
