function removeSmallest(numbers) {
    //   let lowestIndex = numbers.reduce( (lowest,next,index) => { return numbers[lowest] > numbers[index] ? index : lowest },0);
    let lowestIndex = numbers.indexOf(Math.min(...numbers))
    return numbers.filter((element, index) => index !== lowestIndex)
}