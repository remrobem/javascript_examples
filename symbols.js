// const seasons = {
//     Winter: Symbol('Winter'),
//     Spring: Symbol('Spring'),
//     Summer: Symbol('Summmer'),
//     Fall: Symbol('Fall')
// };
// console.log(seasons);
// console.log(seasons.WinterSeason)
// console.log([seasons.WinterSeason])

// var size = Symbol('size');
// class Collection {
//     constructor() {
//         this[size] = 0;
//     }

//     add(item) {
//         this[this[size]] = item;
//         this[size]++;
//     }

//     static sizeOf(instance) {
//         return instance[size];
//     }

// }

// var x = new Collection();
// x.add('foo');
// console.log(size)
// console.log(x.sizeOf)



let symbol1 = Symbol();
let symbol2 = Symbol();
 
console.log( symbol1 === symbol2 ); 

let myObject = { 
    publicProperty: 'Value of myObject[ "publicProperty" ]'
};

myObject[ symbol1 ] = 'Value of myObject[ symbol1 ]';
myObject[ symbol2 ] = 'value of myObject[ symbol2 ]';

console.log( myObject );


console.log( myObject[ symbol1 ] );

