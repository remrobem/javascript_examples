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

function operation(number) {

    if (typeof num1 == 'number') {
        switch (operand) {
            case '+':
                answer = (number + num1);
                break;
            case '-':
                answer = (number - num1);
                break;
            case '*':
                answer = (number * num1);
                break;
            case '/': answer = (Math.floor(number / num1));
                break;
        }
        num1 = ' ';
        return answer;
    } else {
        num1 = number
    }
}

function zero() { return operation(0); }
function one() { return operation(1); }
function two() { return operation(2); }
function three() { return operation(3); }
function four() { return operation(4); }
function five() { return operation(5); }
function six() { return operation(6); }
function seven() { return operation(7); }
function eight() { return operation(8); }
function nine() { return operation(9); }

function plus() { operand = '+'; }
function minus() { operand = '-'; }
function times() { operand = '*'; }
function dividedBy() { operand = '/'; }

console.log(two(times(four())))
console.log(five(plus(one())))
console.log(seven(minus(six())))
console.log(nine(dividedBy(five())))
console.log(eight(dividedBy(eight())))