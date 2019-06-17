"use strict"
const test = Object.freeze({ a: 1 });
// test.a = 2; // not allowed because of freeze
console.log(test.a)

// standard constructor function
// this instance allows for nested object
function Paint(type = 'unknown', use = 'unknown', color = 'N/A', finish = 'N/A', price = 'N/A') {
    this.type = type;
    this.use = use;
    this.price = price;
    this.priceChanges = [];
    this.attributes = new Attribute(color, finish);
    this.attributes.style = 'wall'; // not passed in argument list

    // defines the nested object. used above to create attributes
    function Attribute(color, finish) {
        this.color = color;
        this.finish = finish;
    };

    // define getter for constructor
    // these execute implicitly when price is referenced or updated
    Object.defineProperty(this, "price", {
        get() {
            return typeof price == 'number' ? `$${price}` : price;
        },
        set(newPrice) {
            // store price change details
            let priceChange = ((newPrice * 100) - (price * 100)) / 100;
            if (priceChange != 0) {
                this.priceChanges.push(
                    {
                        'originalPrice': price,
                        'newPrice': newPrice,
                        'change': priceChange
                    }
                )
            }
            console.log(`Price Change: ${priceChange}`)
        }
    });
};
// put methods in prototype only so not all instances have a copy
Paint.prototype.getColor = function () { return this.attributes.color };
Paint.prototype.getFinish = function () { return this.attributes.finish };

let kitchenPaint = new Paint('latex', 'indoor', 'white', 'eggshell', 27.50);
kitchenPaint.price = 12.14;
kitchenPaint.price = 41.23;
kitchenPaint.price = 27.90;
console.log(`kitchen Paint: ${JSON.stringify(kitchenPaint)}`);

// null and undefined parameters
let type, use, color, finish, price;
finish = null;
color = undefined;
price = 0;
let emptyPaint = new Paint(type, use, color, finish);
console.log(`empty Paint: ${JSON.stringify(emptyPaint)}`);
console.log(`emptyPaint.getColor(): ${emptyPaint.getColor()}`);
console.log(`emptyPaint.getFinish(): ${emptyPaint.getFinish()}`);


// object literal
// allows use of getter/setter directly
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

// this pattern avoids use of this
// each method returns a function (closure)
// the closure keeps values in _firstName and _lastName
// sand those variables are private
// mark: 
// { fullName: [Function],
//   firstName: [Function],
//   lastName: [Function] }

function Person(firstName, lastName) {
    var _firstName = firstName,
        _lastName = lastName;

    var my = {};

    my.fullName = function () {
        return _firstName + ' ' + _lastName;
    };

    // Getter/setters
    my.firstName = function (value) {
        if (!arguments.length) return _firstName;
        _firstName = value;

        return my;
    };

    my.lastName = function (value) {
        if (!arguments.length) return _lastName;
        _lastName = value;

        return my;
    };

    return my;
}

// Use it like this:
var mark = Person('Mark', 'Twain'); // note: no `new` keyword!
console.log(`mark: ${JSON.stringify(mark)}`);
console.log(mark);
mark.firstName('Samuel');
mark.lastName('Clemens');
console.log(mark.fullName()); // Samuel Clemens

module.exports = Paint;