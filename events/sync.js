import { EventEmitter } from "events";

class SynchronousEvent extends EventEmitter {

    constructor(){
        super()
    }

    find(val, arr){

        if( arr.includes(val) ) this.emit('found', arr.indexOf(val));

        return this;

    }

}

const sync_event = new SynchronousEvent();

sync_event.find(3, [1,2,3,4])
// the listener will not be triggered because the event is triggered synchronously
.on('found', ( index => console.log(`First listener: val found at ${index}`)))

/* The best way to register a listener for a synchronous event is to 
do so before triggering the event
*/

sync_event
.on('found', ( index => console.log(`Second listener: lval found at ${index}`)))
.find(3, [1,2,3,4])
    