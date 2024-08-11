import fs, { readFile } from "fs";
import { syncBuiltinESMExports } from "module";

const original_method = fs.readFile;

fs.readFile = ( str ) => console.log('this is a mocked function');

fs.readFile('tesing');

/* 
    The code below will print false because the monkey patching only applies to default export
    not the named export
*/
console.log( fs.readFile === readFile );

/* 
    This function call enables the propagation of our monkey patch to the named export
*/
syncBuiltinESMExports();

console.log( fs.readFile === readFile );

