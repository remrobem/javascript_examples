"use strict"
const test = Object.freeze({a:1});
// test.a = 2; // not allowed because of freeze
console.log(test.a)

function Paint(type='unknown', use='unknown', color, finish) {
    this.type = type;
    this.use = use;
    function Attribute(color, finish) {
        this.color = color;
        this.finish = finish;
    };
    this.attributes = new Attribute (color,finish);
    if (finish) {
        this.attributes.finish = finish;
    };
    if (color) {
        this.attributes.color = color;
    };
};

// put methods in prototype only so not all instances have a copy
 Paint.prototype.color = function () { return this.attributes.color };
 Paint.prototype.finish = function () { return this.attributes.finish };

let kitchenPaint = new Paint('latex', 'indoor', 'white', 'eggshell');
console.log('kitchen Paint:' + ' ' + JSON.stringify(kitchenPaint));
console.log(`kitchenPaint.attributes.finish: ${kitchenPaint.attributes.finish}`); // eggshell
console.log(`kitchenPaint.color(): ${kitchenPaint.color()}`); // white
console.log(`kitchenPaint.finish(): ${kitchenPaint.finish()}`); // eggshell

let type, use, color;
let finish = 'gloss';
let emptyPaint = new Paint(type, use, color, finish);
console.log('empty Paint:' + ' ' + JSON.stringify(emptyPaint));
console.log(`emptyPaint.attributes.finish: ${emptyPaint.attributes.finish}`); // eggshell
console.log(`emptyPaint.color(): ${emptyPaint.color()}`); // white
console.log(`emptyPaint.finish(): ${emptyPaint.finish()}`); // eggshell

// object literal
let bathroomPaint = {
    type: 'latex',
    use: 'indoor',
    attributes: {
        color: '#a63f50',
        finish: 'satin'
    },
    get color() { return this.attributes.color },
    get finish() { return this.attributes.finish }
};
console.log('bathroom paint:')
// don't need to call getter/setter like a method - no ()
console.log(bathroomPaint);
console.log(bathroomPaint.color);
console.log(bathroomPaint.finish);