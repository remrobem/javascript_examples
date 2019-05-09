
let arr = [
    { name: "Sue", age: 30 },
    { name: "Joe", age: 20 }
];
console.log(arr);

// 2 ways to return object from map.

// this uses set of () and no return
// the () force the parser to treat it as an expression
// since only 1 expression, no need for the {} after the => 
// but the => {} can still be used
let result1 = arr.map(item => ({
    test1: item.name.toLowerCase(),
    test2: item.age
}));

// this returns object  return {}
let result2 = arr.map(item => {
    return {
        test3: item.name.toUpperCase(),
        test4: item.age
    }
});

console.log(result1);
console.log(result2);

