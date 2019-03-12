function factorial(x) {
    // TERMINATION
    if (x < 0) return;
    // BASE
    if (x === 0) return 1;
    // RECURSION
    console.log(`x: ${x}`)
    return x * factorial(x - 1);
  }
//   console.log(`Final: ${factorial(3)}`);


//   function chooseBestSum(maxDistance, numberOfTrips, distances) {

//     return chooseBestSum(maxDistance)

//   };



  
  function chooseBestSum(maxDist, towns, arr) {
    console.log(arr)
      let subsets = filterByLength(subArrays(arr), towns); 
      let trip = []; 
      let myDist = 0; 
    //   console.log(subsets)
      for(var a of subsets){
        let sum = a.reduce((a,b)=>a+b);
        // console.log(sum)
        if (sum <= maxDist && sum >= myDist) {
          myDist = sum; 
        }
      }
    return myDist;  
  }

  function subArrays(arr){
    let kLengths = []; 
    if (arr.length === 1) return [arr];
    else {
        subarr = subArrays(arr.slice(1));
        console.log([[arr[0]]]) // this is an arrya of arrays for each dist except the last, descending seq
        return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
    }
  }
  
  // subArrays([1,2,3,4,5])
  
  // helper to find all subarrays of length N within an array of arrays

  // arr is an array of array's
  function filterByLength(arr, n) {
    //   console.log(`in filterByLength arr: `)
    // console.log(arr)
    const result = arr.filter(a => a.length == n);
    return result;
  }

as = [91, 74, 73, 85, 73, 81, 87];
bs = [91, 74, 73, 85, 73, 81, 87];
cs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
console.log(chooseBestSum(230, 3, as));