import fs from 'fs';
/* 
    One of the way to prevent inconsitency in the behaviour of a function is to make the function act async even if it naturally could act sync
    by using process.nextTick
*/

const cache = new Map();

function consistent_file_read( file_name, cb ){

    if( cache.has(file_name) ){
       process.nextTick(()=>cb( cache.get(file_name) )) 
    }
    else {

        fs.readFile(file_name, 'utf-8', ( err, data )=>{
            cache.set(file_name, data);
            cb(data)
        })

    }
}

function create_file_reader( file_name ){

    const listeners = [];

    consistent_file_read(file_name, ( data )=> listeners.forEach( listener => listener(data) ));

    return {
        on_data_ready( listener ){
            listeners.push( listener )
        }
    }

}

const reader_1 = create_file_reader('book.txt');

reader_1.on_data_ready( (data)=>{ 

    console.log(`First call: ${data}`);

    const reader_2 = create_file_reader('book.txt');

    reader_2.on_data_ready((data)=> console.log(`Second call: ${data}`));

})
