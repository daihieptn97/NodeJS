var events = require('events');
var until = require('util');


// Create an eventEmitter object
var myEmitter = new events.EventEmitter();
// A Listener
var ring1 = who => {
    console.log(who + " ring 1");
}
// A Listener
var ring2 = who => {
    console.log(who + " ring 2");
}


// Add Event Listeners
myEmitter.addListener("bellRing", ring1);
myEmitter.addListener("bellRing", ring2);


// ----- Testing ------

// Fire bellRing event!!
myEmitter.emit('bellRing', 'Tom');


