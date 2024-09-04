import { readFile } from "fs";

function read_json_carelessly(path, callback){

    readFile( path, 'utf-8', (err, data)=> {

        if( err ) return callback(err);

        callback(null, JSON.parse(data));

    })

}

function callback( err, data ){

    if(err) return console.error(err);

    console.log(data);

}

/*
    The try...catch block will not catch the error in the call back because 
    the callback is invked asynchronously therefore in a fresh stack
*/

try {

    read_json_carelessly( 'book.txt', callback );

}
catch(e){

    console.error(e);
    
}
