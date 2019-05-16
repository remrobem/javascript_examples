// primitives copied by value
let t1 = 'a';
let t2 = t1;
t1 = 'b';
console.log(`t2: ${t2}`)

// non-primitive variables copied by reference

// object reference does not occur when new object assigned
let treeType = {value: 'oak', height: 'tall'};
let tree = {type: treeType};
treeType = {value: 'pine'};
console.log(tree); // oak

// object reference does occur when objext property changed
let carMake = {value: 'Ford'};
let myCar = {make: carMake};
carMake.value = 'Toyota';
console.log(myCar); // Toyota

