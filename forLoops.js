// common
let array = ['a',2,'e'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

let message = 'this is a test';

for (let value of message) {
    console.log(value);
};

let person = {
    name: 'Rob',
    print: function() { return this.name }
};
console.log(`for of loop`);
// for of loop of an object requires use of iterable values
for (let value of Object.keys(person)) {
    console.log(value);
};
for (let value of Object.values(person)) {
    console.log(value);
};
for (let value of Object.entries(person)) {
    console.log(value);
};
for (let value of array) {
    console.log(value);
};

// for in loop of an object requires use of enumerable
// best way to loop over object
console.log(`for in loop`);
let product = {
    name: 'widget',
    print: function() { return this.name }
};
for (let value in product) {
    console.log(`${value}: ${product[value]}`);
};
for (let value in array) {
    console.log(`${array[value]}`);
};