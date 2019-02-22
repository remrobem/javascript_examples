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
    A.sort();
    // console.log(A);
    let response = 0;
    var count = {};


    let lastNumber = A[0];
    let lastCount = 0;

    A.forEach(number => {

        if (number != lastNumber) {
            // console.log(`lastNumber: ${lastNumber}`)
            // console.log(`lastCount: ${lastCount}`)
            if (lastCount % 2 != 0) {return lastNumber};
            lastNumber = number;
        }

        count[number] = (count[number] || 0) + 1;
        lastCount = count[number];
       
    });




}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 1]))