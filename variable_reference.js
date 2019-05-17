// primitives copied by value
let t1 = 'a';
let t2 = t1;
t1 = 'b';
console.log(`t2: ${t2}`) // a

// non-primitive variables copied by reference

// JavaScript is actually passing a reference by value and 
// if you change one property of an Object or an Array, you are not changing the reference at all.

// object reference does not occur when new object assigned
let treeType = {value: 'oak', height: 'tall'};
let tree = {type: treeType};
treeType = {value: 'pine'};
console.log(tree); // oak

// object reference does occur when object property changed
let carMake = {value: 'Ford'};
let myCar = {make: carMake};
carMake.value = 'Toyota';
console.log(myCar); // Toyota

// array reference: when push or add to original or copied array, both change
let carModels = ['Prius', 'RAV4'];
let carList = carModels;
console.log(`carList: ${carList}`);
carModels.push('Camry');
carList.push('F150');
carModels[4] = 'Focus';
carList[4] = 'Tacoma';
console.log(`carList: ${carList}`); // all models listed
console.log(`carModels: ${carModels}`); // all models listed


// array reference: referncing lost when assigned value using = [...] 
let ingredients = ['cheese', 'noodles', 'pepper'];
let ingredientList = ingredients;
console.log(`ingredients: ${ingredients}`); // cheese,noodles,pepper
console.log(`ingredientList: ${ingredientList}`); //cheese,noodles,pepper
ingredients = ['apples', 'flour'];
console.log(`ingredients: ${ingredients}`); // apples,flour
console.log(`ingredientList: ${ingredientList}`); // cheese,noodles,pepper
ingredientList = ['lemon', 'water'];
console.log(`ingredients: ${ingredients}`); // apples,flour
console.log(`ingredientList: ${ingredientList}`); // lemon,water

// make copies of variable that prevents any changes to the original, 
// or changes to the original affecting the copied value

let inventory = ['banana', 'apple'];

// ES5 >> let purchased = inventory.slice(); // OR let purchased = [].concat(inventory);
// ES6 methods
let purchased = [...inventory]; // OR let purchased = Array.from(inventory);

inventory.push('strawberry');
purchased[1] = 'corn';

console.log(inventory); // ["banana", "apple", "strawberry"]
console.log(purchased); // ["banana", "corn"]

let person1 = { name: 'Vitor', birthYear: 1995 };
// ES6 method
let person2 = Object.assign({}, person1);

person2.name = 'Eduardo';
person1.birthYear = 1992;

console.log(person1); // Object {name: "Vitor", birthYear: 1992}
console.log(person2); // Object {name: "Eduardo", birthYear: 1995}

