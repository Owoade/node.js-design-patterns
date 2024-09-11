import { EventEmitter } from "events";

class AsynchronousEvent extends EventEmitter {

    constructor(){
        super()
    }

    find(val, arr){

        if( arr.includes(val) )
            /* 
                This is to simulate asynchrony, 
                defering the trigerring of the event till the next cycle of the event loop
            */
            process.nextTick(()=> this.emit('found', arr.indexOf(val))) 

        return this;

    }

}

const async_event = new AsynchronousEvent();

const async_event_2 = new AsynchronousEvent();

/*
    For an asynchronous event, the listeners can be registered before or after 
*/


async_event.find(3, [1,2,3,4])
// the listener will not be triggered because the event is triggered synchronously
.on('found', ( index => console.log(`1. val found at ${index}`)))

/* The best way to register a listener for a synchronous event is to 
do so before triggering the event
*/

async_event_2
.on('found', ( index => console.log(`2. val found at ${index}`)))
.find(3, [1,2,3,4])
    