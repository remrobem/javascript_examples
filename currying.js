// currying is when a function returns another function
// constructed by chaining closures

// let planets = function(planet1) {
//     return function(planet2) {
//         return `The 2 planets are ${planet1} and ${planet2} `
//     }
// };

let planets = (planet1) => (planet2) => `The 2 planets are ${planet1} and ${planet2} `;


let pickAPlanet = planets("Earth");

console.log(pickAPlanet("Mars"));

console.log(planets("Mars")("Jupiter"));