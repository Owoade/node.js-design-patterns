class Person {
    name;
    constructor( name ){
        this.name = name;
    }

    sayName(){
        console.log( this.name );
    }
}

const new_person = new Person('Seyi');

module.exports = new_person;