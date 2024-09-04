import { readFile } from "fs";

function read_json_carefully(path, callback){

    readFile( path, 'utf-8', (err, data)=> {

        if( err ) return callback(err);

        let parsed_data;

        try {

            parsed_data = JSON.parse( data );

        }
        catch(e){

            return callback(e)

        }

        callback(null, parsed_data);

    })

}

function callback( err, data ){

    if(err) return console.error(err);

    console.log(data);

}

read_json_carefully( 'book.txt', callback );