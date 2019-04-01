
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

function sum3(num) {
  if (num >= 3) { return `*3 final: ${num}` };
  num += 1;
  // this line executes sum3 until a return is hit
 
  const sums = sum3(num);
   // in this case, sums = `*3 final: 3`
  // runs num times initially and has 3 sum3 executions in the call stack
  // before this line executes
  // num = 3
  console.log("sums: " + sums);

  console.log(`3 before return ${num}`);
  return sum3(num);
  // not executed
  console.log(`3 after return ${num}`);
}
// console.log(sum(0));
// console.log(sum1(0));
// console.log(sum2(0));
console.log(sum3(0));