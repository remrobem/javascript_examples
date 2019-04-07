let test = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
})();

console.log(test())
console.log(test())
console.log(test())
