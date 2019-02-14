var uniqueInOrder = function (iterable) {
    // create array of the iterable input. the return value is an array
    let iterableArray = Array.isArray(iterable) ? iterable.slice() :  iterable.split('');
    // filter array, return only if first entry or current value not equal previous value
    return iterableArray.filter((element, index, array) => {
        return index == 0 || element != array[index - 1] ? true : false;
    })
}
var uniqueInOrder1 = function (iterable) {
return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

console.log(uniqueInOrder('AAABCCcDDDeE'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder(['A', 'b', 'C', 'C', 'D', 'D', 'E', 'F']));

console.log(uniqueInOrder1('AAABCCcDDDeE'));
console.log(uniqueInOrder1([1, 2, 2, 3, 3]));
console.log(uniqueInOrder1(['A', 'b', 'C', 'C', 'D', 'D', 'E', 'F']));