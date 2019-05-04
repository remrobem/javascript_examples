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

    displayProdSize() { return this.printProdSize()}

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