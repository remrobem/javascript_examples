let name = {
    firstName: 'Rob',
    lastName: 'Martin'
    // best practice is to have methos outside object
    // printFullName: function () {
    //     console.log(`${this.firstName} ${this.lastName}`)
    // }
}

// move method out of object to a function
let printFullName = function (homeTown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${homeTown}, ${state}`)
}
console.log('call');
// don't use object name when move method out of object

printFullName.call(name, 'Eden', 'NC');

let name2 = {
    firstName: 'Robert',
    lastName: 'Martin'
};

// first parameter sets the 'this' value in call, apply and bind

// call or function borrowing


printFullName.call(name2, 'Quantico', 'VA')
console.log('apply');
// apply
// 2 thru n paramters are an array

printFullName.apply(name2, ['Quantico', 'VA']);

// bind
// bind existing function to new function variable
console.log('bind');
let state = 'VA';
let printMyName = printFullName.bind(name2, 'Quantico', state);
console.log(printMyName);
printMyName();

// the original value of state is bound to printMyName, new value does not work

name2.firstName = 'Hey';
state = 'NC';
printMyName();