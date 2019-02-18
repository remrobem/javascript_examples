// Convert enumerable to iterable
let enumerable = {prop : 1, meth : ()=>{} };

console.log('keys:');
for (let key of Object.keys(enumerable)) {
    console.log(key)
}

console.log('\nvalues:');
for (let val of Object.values(enumerable)) {
    console.log(val);
}

console.log('\nentries:');
for (let entry of Object.entries(enumerable)) {
    console.log(entry);
}