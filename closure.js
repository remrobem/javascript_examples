// lexical scoping describes how a parser resolves variable names when functions are nested. 
// The word "lexical" refers to the fact that lexical scoping uses the location 
// where a variable is declared within the source code to determine where that variable is available. 
// Nested functions have access to variables declared in their outer scope.

// A closure is the combination of a function and the lexical environment within which that function was declared. 
// This environment consists of any local variables that were in-scope at the time the closure was created.



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

// myFunc will now be same as displayNAME() {...} 
// when Myfunc is executed, same as executing displayNAME() with the same lexical scope as makeFunc: var name is still available
// myFunc is the closure
var myFunc = makeFunc();
console.log('myFunc');
myFunc();
myFunc();
myFunc();

function counter() {
  var count = 0;
  function addOne() {
    count++
    console.log(`addOne count: ${count} `)
  }
  return addOne;
}

let myAdd = counter();
myAdd();
myAdd();



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

// coungterTest copied by reference so inherits the lexical scope that has been changed by counter
// changes by counterTest also reflected in counter
let counterTest = counter;
console.log(counterTest.value()); // logs 1
counterTest.increment();
console.log(counterTest.value()); // logs 2
console.log(counter.value()); // logs 2
counterTest.decrement();
console.log(counterTest.value()); // logs 1
console.log(counter.value()); // logs 1


var counterA = (function () {
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

let counterB;
console.log(`counterA: ${counterA.value()}`);
counterA.increment();
console.log(`counterA: ${counterA.value()}`);
counterB = counterA;
console.log(`counterB: ${counterB.value()}`);


// example for front-end

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;
// <a href="#" id="size-12">12</a>
// <a href="#" id="size-14">14</a>
// <a href="#" id="size-16">16</a>