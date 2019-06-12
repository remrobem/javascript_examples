// spread expands iterables into one or more arguments

let trees = ['oak', 'hickory'];
console.log([...trees, 'pine']); // returns all 3 trees

let wallPaint = {
    type: 'latex',
    use: 'indoor',
    attributes: {
        color: '#a63f50',
        finish: 'satin'
    },
    get color() { return this.attributes.color },
    get finish() { return this.attributes.finish }
};


console.log(wallPaint.color);
console.log(wallPaint.finish);