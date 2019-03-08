var n = function (digit) {
    console.log(`digit: ${digit}`)
    return function (op) {
        console.log(`op: ${op} digit: ${digit}`)
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function (l) { return l + r; }; };
function minus(r) { return function (l) { return l - r; }; };
function times(r) { return function (l) { 
    console.log(`l: ${l} r: ${r}`)
    return l * r; }; };
function dividedBy(r) { return function (l) { return Math.floor(l / r); }; };

console.log(two(times(four())));
// console.log(five(plus(one())));
// console.log(seven(minus(six())));
// console.log(nine(dividedBy(five())));
// console.log(eight(dividedBy(eight())));