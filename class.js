"use strict";

// example for Class
// must use constructor

class Product {
    constructor() {
        let testName = 'widget'
        this.name = testName;
        this.size = '16';
        this.size_uom = 'lb';
    }

    printProdSize() {
        return `${this.name}: ${this.size}${this.size_uom}`;
    }
};

let FooWidget = class {
    constructor() {
        let testName = 'fooWidget'
        this.name = testName;
        this.size = '3';
        this.size_uom = 'oz';
    }

    printProdSize() {
        return `${this.name}: ${this.size}${this.size_uom}`;
    }
};

let NewProduct = class {
    constructor(name, size = 0, size_uom = 'lb') {
        this.name = name;
        this.size = size;
        this.size_uom = size_uom;
    }

    displayProdSize() { return this.printProdSize() }

    printProdSize() {
        return `${this.name}: ${this.size}${this.size_uom}`;
    }
};

let widget = new Product();
let barWidget = new FooWidget()
let qaz = new NewProduct('qaz', 12);

console.log(widget.printProdSize());
console.log(barWidget.printProdSize());
console.log(qaz.displayProdSize());

class RetailCustomer {
    constructor(name, address, type = 'R') {
        this.name = name;
        this.address = address;
        this.type = type;
    }

    printCustomer() {
        return (`Name: ${this.name} Address: ${this.address} Type: ${this.type}`)
    }
}


//Create an empty constructor function
function Person(){
    this.test = 'aa';
}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new Person();
var person2 = new Person();

//Add a new element to the friends array
person1.friends.push("Amit");

person1.test = 'bb';

// friends array is on prototye so any change affect all objects assigned from Person
console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person1.test);
console.log(person2.test);