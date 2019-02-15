
// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
// Test.assertEquals(rowSumOddNumbers(1), 1);
// Test.assertEquals(rowSumOddNumbers(42), 74088);



function rowSumOddNumbers(n) {
    let sum = 0;
    let oddNumber = -1;
 
 // this "builds" pyramid from top down
 // uses fact that each row number = number of cells/values in the row
 // so this loops n times adding n new oddNumbers in each row.
 // it also accumulates a sum for each row. The sum for the last (or nth row) is returned
     for (let i = 1; i <= n; i++) {
         sum = 0;
         for (let j = 1; j <= i; j++) {
             oddNumber += 2
             sum += oddNumber
         }
     }
     return sum;
 }

 // for math majors
 function rowSumOddNumbers1(n) {

     return Math.pow(n,3)
 }

// console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(42));
console.log(rowSumOddNumbers1(42));
