
// this example stacks the recursive returns because it adds num on the return statememt
function sum(num) {
  if (num >= 10) { return `final: ${num}` };
  console.log(`before return ${num}`)
  return num + sum(num + 1);
  // not executed
  console.log(`after return ${num}`)
}

function sum1(num) {
  if (num >= 10) { return `1 final: ${num}` };
  console.log(`1 before return ${num}`)
  return sum1(num + 1)
  // not executed
  console.log(`1 after return ${num}`)
}

function sum2(num) {
  if (num >= 10) { return `2 final: ${num}` };
  num += 1;
  console.log(`2 before return ${num}`)
  return sum2(num)
  // not executed
  console.log(`2 after return ${num}`)
}

console.log(sum(0));
console.log(sum1(0));
console.log(sum2(0));