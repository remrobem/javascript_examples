// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Ruby:

// seven(times(five)) # must return 35
// four(plus(nine)) # must return 13
// eight(minus(three)) # must return 5
// six(divided_by(two)) # must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
console.log(5)
}
function six() {}
function seven() {
console.log(7)
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {
    console.log('*')
}
function dividedBy() {}

console.log(seven(times(five())))