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
    // sort the array
    A.sort();
    // initialize object used to get count for each value in array
    var count = {};
    // create object with value:count pairs
    A.forEach(number => {
        count[number] = (count[number] || 0) + 1;
    });

    // loop over object returning first value that is odd
    for (let key of Object.keys(count)) {
        if (count[key] % 2 != 0) { return parseInt(key) };
    }
    return undefined;
}

const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 5, -1, 2, -2, 3, 3, 5, 1, 2, 4, 20, 4, -1, -2, 1]))
console.log(findOdd1([20, 3,3,5, 5, 20, 5]))