// Format a string of names like 'Bart, Lisa & Maggie'
// from an array of objects
function list(names) {
    let list = names.map((firstName) => firstName.name);
    console.log(list)
    if (names.length > 1) {
        let last = list.pop();
        return list.join(', ').concat(' & ', last);
    } else {
        return list.toString();
    }
}

let names = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Marge'} ];
console.log(list(names));