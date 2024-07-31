const { user } = require('./user');

const { colors } = require('./color');

const func = require('./function');

const File = require('./class');

const new_person = require('./instance');

const new_file = new File('book.txt');

new_file.readFileSync();

const another_person = new new_person.constructor('Kemi');

func('All is well')

console.log( user, colors, another_person )