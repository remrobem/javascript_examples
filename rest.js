// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// *arguments to a function

function f0(...list) {  // argument comes in as an object index:value . arguments and list are the same
  console.log(`f0 list:  ${list}`); // shows values only
  console.log(`f0 arguments:  ${JSON.stringify(arguments)}`); // shows object
  console.log(`f0 table list:`); 
  console.table(list); // same as arguments
  console.log(`f0 table arguments:`); 
  console.table(arguments); // same as list
  return console.log(`f0 list: ${list}`);
}
function f00(...[a, b, c]) {
  console.log(`f00 log arguments:`); 
  console.log(arguments);// shows as Arguments array and object
  console.log(JSON.stringify(arguments)); // shows as object
  console.log(`f00 table arguments:`);  
  console.table(arguments);
  return;
};

function f1(...[a, b, c]) {
  console.log('f1 table agrguments')
  console.table(arguments);
  return a + b + c;
};



let test1 = (...testList) => { testList.map(item => (console.log(`test1: ${item}`))) };
let test2 = (...[testList]) => { testList.map(item => (console.log(`test2: ${item}`))) };

f0(1, 'a', 2, 'b');
f00(4, 'a', 5, 'e');
console.log(f1(1));          // NaN (b and c are undefined)
console.log(f1(1, 2, 3));    // 6
console.log(f1(1, 2, 3, 4)); // 6 (the fourth parameter is not destructured)
test1(3, 4, 5); // test1 executes 3 times showing each value 
test1([3, 4, 5]); // array pased as single value, shows 1 value: returned = array
test2([3, 4, 5]); // test2 executes 3 times showing each value 