// spread expands iterables into one or more arguments

let trees = ['oak', 'hickory'];
console.log(`typeof trees: ${typeof trees} isArray: ${Array.isArray(trees)}`);
console.log([...trees, 'pine']); // returns all 3 trees as array


// Each individual member of the array was plucked from its location and kept inside the receiver. 
// The receiver, in this case, is a function. 
// So the individual items become function arguments.
let text = 'Then there was only one';
let spreadText = [...text];
console.log(`typeof spreadText: ${typeof spreadText} isArray: ${Array.isArray(spreadText)}`);
// Each individual member of the array was plucked from its location and kept inside the receiver. 
// The receiver, in this case, is a function. 
// So the individual items become function arguments.
console.log(...text); // returns a string
console.log(spreadText); // returns an array

function Paint(type, use, color, finish) {
    this.type = type;
    this.use = use;
    this.attributes.color = color; 
    this.attributes.finish = finish;
    
    get color() { return this.attributes.color };
    get finish() { return this.attributes.finish }
};

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