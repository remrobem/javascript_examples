// spread expands iterables into one or more arguments

let trees = ['oak', 'hickory'];
console.log(`typeof trees: ${typeof trees} isArray: ${Array.isArray(trees)}`);
console.log([...trees, 'pine']); // returns all 3 trees as array


// Each individual member of the array was plucked from its location and kept inside the receiver. 
// The receiver, in this case, is a function. 
// So the individual items become function arguments.
let text = 'Then there was only one';
let spreadText = [...text];
console.log(`typeof spreadText: ${typeof spreadText} isArray: ${Array.isArray(spreadText)}`); // object true
// Each individual member of the array was plucked from its location and kept inside the receiver. 
// The receiver, in this case, is a function. 
// So the individual items become function arguments.
console.log(...text); // returns a string
console.log(spreadText); // returns an array

function Paint(type, use, color, finish) {
    this.type = type;
    this.use = use;
    function attributes(color, finish) {
        this.color = color;
        this.finish = finish;
    }

    this.attributes = new attributes (color,finish);
    // get color() { return this.attributes.color };
    // get finish() { return this.attributes.finish }
};

let kitchenPaint = new Paint('latex', 'indoor', 'white', 'eggshell');
console.log('kitchen Paint:' + ' ' + JSON.stringify(kitchenPaint));
console.log(kitchenPaint.attributes.finish)


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


console.log(bathroomPaint);
console.log(bathroomPaint.color);
console.log(bathroomPaint.finish);


function cimdb(name, review, year) {

    function nestedConstructor(name, review, year) {
        this.name = name;
        this.review = review;
        this.year = year
    };

    this.name = name;
    this[name] = new nestedConstructor(name, review, year);

}



var lionking = new cimdb("The Lion King", "The lion King review ..", 2015);
console.log(lionking)