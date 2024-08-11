const obj = require('./esm.mjs');

/* 
    Would throw an error because it is not possible to import ES modules from CommonJS modules.
*/

console.log( obj )