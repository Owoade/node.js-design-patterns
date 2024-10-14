import fs from 'fs';
// /* 
//     One of the most dangerous situations is to have an API that behaves synchronously 
//     under certain conditions and asynchronously under others. Let's take the following 
//     code as an example:
// */

const cache = new Map();

function inconsistet_file_read( file_name, cb ){

    if( cache.has(file_name) ){
        cb( cache.get(file_name) )
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

    inconsistet_file_read(file_name, ( data )=> listeners.forEach( listener => listener(data) ));

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
