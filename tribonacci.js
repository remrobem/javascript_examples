function tribonacci(signature, n) {

  if (signature.length >= n) {
    return signature
  }
  signature = sumThree(signature)

  return tribonacci(signature, n)

};

function sumThree(array) {
  let sum = array[array.length - 1] + array[array.length - 2] + array[array.length - 3];
  array.push(sum);
  return array;
}

console.log((tribonacci([1, 1, 1], 10)))