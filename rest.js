// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// *arguments to a function

function f0(...list) {
    return console.log(list);
}

function f1(...[a, b, c]) {
    return a + b + c;
  };



let test1 = (...testList) => {testList.map( item => (console.log(`test1: ${item}`)))};

  f0(1,'a',2,'b');
  console.log(f1(1));          // NaN (b and c are undefined)
  console.log(f1(1, 2, 3));    // 6
  console.log(f1(1, 2, 3, 4)); // 6 (the fourth parameter is not destructured)
  test1(3,4,5);
  test2;