// primitives copied by value
let t1 = 'a';
let t2 = t1;
t1 = 'b';
console.log(`t2: ${t2}`) // a

// non-primitive variables copied by reference

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
console.log(`carList: ${carList}`);
console.log(`carModels: ${carModels}`);

let ingredients = ['cheese', 'noodles', 'pepper'];
let ingredientList = ingredients;
console.log(`ingredients: ${ingredients}`);
console.log(`ingredientList: ${ingredientList}`);
ingredients = ['apples', 'flour'];
ingredients[0] = 'Peaches';
console.log(`ingredients: ${ingredients}`);
console.log(`ingredientList: ${ingredientList}`);
ingredientList = ['lemon', 'water'];
ingredientList[0] = 'Bananas';



