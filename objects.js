"use strict"
const test = Object.freeze({a:1});
// test.a = 2; // not allowed because of freeze
console.log(test.a)

// standard constructor function
// allows for nested object
function Paint(type = 'unknown', use = 'unknown', color = 'N/A', finish = 'N/A') {
    this.type = type;
    this.use = use;
    this.attributes = new Attribute (color,finish);
    this.attributes.style = 'wall';
    
    function Attribute(color, finish) {
        this.color = color;
        this.finish = finish;
    };
};
// put methods in prototype only so not all instances have a copy
 Paint.prototype.getColor = function () { return this.attributes.color };
 Paint.prototype.getFinish = function () { return this.attributes.finish };

let kitchenPaint = new Paint('latex', 'indoor', 'white', 'eggshell');
console.log(`kitchen Paint: ${JSON.stringify(kitchenPaint)}`);

// null and undefined parameters
let type, use, color, finish;
finish = null;
color = undefined;
let emptyPaint = new Paint(type, use, color, finish);
console.log(`empty Paint: ${JSON.stringify(emptyPaint)}`);
console.log(`emptyPaint.getColor(): ${emptyPaint.getColor()}`); 
console.log(`emptyPaint.getFinish(): ${emptyPaint.getFinish()}`); 


// object literal
let bathroomPaint = {
    type: 'latex',
    use: 'indoor',
    attributes: {
        color: '#a63f50',
        finish: 'satin'
    },
    get getColor() { return this.attributes.color },
    get getFinish() { return this.attributes.finish }
};
console.log('bathroom paint:')
// don't need to call getter/setter like a method - no ()
console.log(bathroomPaint);
console.log(bathroomPaint.getColor);
console.log(bathroomPaint.getFinish);