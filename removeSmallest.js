function removeSmallest(numbers) {
    let lowest = numbers.reduce( (lowest,next) => { return lowest > next ? next : lowest },Infinity);
    let output = numbers.slice(0);
    output.splice(output.indexOf(lowest),1);
    return output;
  }