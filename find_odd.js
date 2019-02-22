// Given an array, find the int that appears an odd number of times
// There will always be only one integer that appears an odd number of times.

// function doTest(a, n) {
//     console.log("A = ", a);
//     console.log("n = ", n);
//     Test.assertEquals(findOdd(a), n);
//   }
//   Test.describe('Example tests', function() {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//   });

function findOdd(A) {

    // initialize object used to get count for each value in array
    var count = {};

    // create object with value:count pairs
    //      count[number] is the key ( the array value)
    //      count[number] =  sets the value(the count)
    A.forEach(number => {
        count[number] = (count[number] || 0) + 1;
    });
 
    // loop over object returning first value that is odd
    for (let number of Object.keys(count)) {
        if (count[number] % 2 != 0) { return number };
    }
    return undefined;
}

// bitwise XOR - the values that occur an even number of times cancel themselves out. 
// 5 ^ 5 = 0
// the remaining odd value is the response 
const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

// this has to filter every entry in the array
function findOdd2(arr) {
    let count = {};
    arr.map(num => count[num] ? count[num] += 1 : count[num] = 1);
    return (Object.keys(count).filter(num => count[num] % 2 !== 0).join(''));
}

console.log(findOdd([20, 5, -1, 2, -2, 3, 3, 5, 1, 2, 4, 20, 4, -1, -2, 1, 1, 5]));
console.log(findOdd1([20, 3, 3, 5, 5, 20, 5]));
console.log(findOdd2([20, 5, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 1, 1]));