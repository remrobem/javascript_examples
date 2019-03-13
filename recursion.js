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
    // console.log(arr)
    // subArrays function executes from here one time
      let subsets = filterByLength(subArrays(arr), towns); 
    //   let trip = []; 
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
    // let kLengths = []; 
    if (arr.length === 1) return [arr];
    else {
      // recursive call. 6 times, dropping 1st entry each time.
      // last array entry has 2 values
      console.log(arr)
        subarr = subArrays(arr.slice(1));
        // post recursive happens 6 times
        console.log('post recursive')
        console.log(arr)
        console.log(subarr)
        // console.log('before return [[arr[0]]] :')
        // console.log([[arr[0]]]) // this is an arrya of arrays for each dist except the last, descending seq
        return subarr.concat(subarr.map(e => 
            { 
                // console.log('in return arr[0] :');
                // console.log(e + ' ' + arr[0] + ' ' + [[arr[0]]]);
                // console.log(e.concat(arr[0]));
                // console.log([[arr[0]]]);
                return e.concat(arr[0]);
            }
            ), [[arr[0]]]);
    }
  }
  
  // subArrays([1,2,3,4,5])
  
  // helper to find all subarrays of length N within an array of arrays

  // arr is an array of array's
  function filterByLength(arr, n) {
      // console.log('start in filterByLength arr: ');
      // console.log(arr);
    // console.log(arr)
    const result = arr.filter(a => a.length == n);
    // console.log('end in filterByLength arr: ');
    // console.log(result);
    return result;
  }

as = [91, 74, 73, 85, 73, 81, 87];
bs = [91, 74, 73, 85, 73, 81, 87];
cs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
console.log(chooseBestSum(230, 3, as));