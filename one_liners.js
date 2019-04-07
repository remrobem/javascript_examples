// remove dups from array
const array = [1, 2, 3, 1, 2, 3, 3, 4, 5, 2, 6, 7, 8];
const unique = [...new Set(array)];
console.log(unique);

// sleep in async function
async function sleeper() {
    const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));
    console.time('sleeper');
    await sleep(2000)
    console.timeEnd('sleeper');
};
sleeper();

// check number is finite
console.log(`Finite: ${[...array].every(Number.isFinite)}`);

// all truthy from array
const falseyTruthy = [1, 'f', '', null, undefined, 0];
console.log(`truthy: ${[...falseyTruthy].filter(Boolean)}`);

// destructuring
const [v1, v2, v3, v4] = ['a', 'b', 'c', 'd'];
console.log(v1, v2, v3, v4);

const testObj = { a: 12, b: 24 };
const { a, b } = testObj;
console.log(a, b);

// loop to wrap around array
for (i = 0; i < 20; i++) {
    console.log(array[i % array.length]);
};