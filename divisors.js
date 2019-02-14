function divisors(integer) {
    let response = [];
    
    maxPossibleDivisor = Math.floor(integer/2);
    
    for (i=2; i <= maxPossibleDivisor; i++) {
      if (integer % i == 0) {
        response.push(i);
      }
    }
     return response.length > 0 ? response :  `${integer} is prime`;
  }



console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"