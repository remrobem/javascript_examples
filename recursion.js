// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible
// to please Mary and John- ?
// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.
// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)
// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Test.describe("chooseBestSum",function() {
//     Test.it("Basic tests ",function() {        
//       var ts = [50, 55, 56, 57, 58]
//       Test.assertEquals(chooseBestSum(163, 3, ts), 163)
//       ts = [50]
//       Test.assertEquals(chooseBestSum(163, 3, ts), null)
//       ts = [91, 74, 73, 85, 73, 81, 87]
//       Test.assertEquals(chooseBestSum(230, 3, ts), 228)
//   })})

function chooseBestSum(maxDistance, numberOfTrips, distances) {

    // need to to loops numberOfTrips times - this code assuming 3
    console.log(`${maxDistance} ${numberOfTrips} ${distances}`)
    let bestTripDistance = 0;
    // let tripDistance = 0;
    if (distances.length < numberOfTrips) {
        return null
    }

    // for (let i = 0; i <= distances.length - numberOfTrips; i++) {
    //     for (let j = i + 1; j < distances.length; j++) {
    //         for (let k = j + 1; k < distances.length; k++) {
    //             tripDistance = distances[i] + distances[j] + distances[k]
    //             console.log(` ${distances[i]} ${distances[j]} ${distances[k]} ${tripDistance}`)

    //             if (tripDistance <= maxDistance && tripDistance >= bestTripDistance) {
    //                 bestTripDistance = tripDistance;
    //             }
    //         }
    //     }
    // }

    // for (let i = 0; i <= distances.length - numberOfTrips; i++) {

    //     console.log('**************');

    //     for (let j = i; j < distances.length; j++) {
    //         // for (let j = i + 1; j < distances.length; j++) {
    //         console.log(`${i} ${j}`);

    //         tripDistance = sumTripDistances(i, j);
    //         if (tripDistance <= maxDistance && tripDistance > bestTripDistance) {
    //             bestTripDistance = tripDistance;
    //         }
    //     };
    // };

    // return bestTripDistance == 0 ? null : bestTripDistance

    // function sumTripDistances(baseIndex, startIndex) {


    //     if (startIndex + numberOfTrips <= distances.length) {
    //         // tripDistance = distances[baseIndex];
    //         tripDistance = 0;
    //         for (let tripCounter = 0; tripCounter < numberOfTrips; tripCounter++) {
    //             tripDistance += distances[startIndex + tripCounter];
    //             // console.log(tripDistance)
    //             console.log(`${baseIndex} ${startIndex} ${tripCounter} ${startIndex + tripCounter}`)
    //             // console.log(`${distances[startIndex + tripCounter]}`)
    //         }
    //     } else {
    //         return 0;
    //     };

    //     // console.log(`${tripDistance} ${distances[baseIndex]}`)
    //     return tripDistance
    // };



const subSeq = (s) => {
   
    if (s.length == 1) return ['', s] 
    
    // All the subSeq without the first char:
    const ss = subSeq(s.slice(1))
    console.log(`ss: ${ss}`)
   

    // Return both those with and those without the first char
    return [...ss.map(
        ch => {
            
            // console.log(`s0: ${s[0]} ch: ${ch} ss: ${ss}`)
            return s[0] +  ch}
        ), ...ss]
}

return subSeq(distances);
// const ss = subSeq(distances.slice(1));
// console.log([...distances.map(distance => distances[0] + distance), ...distances]);




};

as = [91, 74, 73, 85, 73, 81, 87];
bs = [91, 74, 73, 85, 73, 81, 87];
cs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
console.log(chooseBestSum(230, 3, as));
// console.log(chooseBestSum(331, 5, bs));
// console.log(chooseBestSum(230, 4, vs));
