// with an iife the function variable can be called directly test()
let test = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(`counter: ${counter}`)
    return counter;
  }
})();
console.log('test');
test();
test();
test();


function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}
// does nothing except var name =  and return function w/out function executing
console.log('makeFunc');
makeFunc();
makeFunc();
makeFunc();

// myFunc is the returned function and the lexical scope of the function(closure)
// iife is anonymous function that executes itself
var myFunc = makeFunc();
console.log('myFunc');
myFunc();
myFunc();
myFunc();




// also uses closure 
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
// these return inside function with the value for x
// add5 and add10 are both closures
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// module pattern (same as iife??)
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1