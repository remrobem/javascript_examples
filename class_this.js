class GreeterTraditional {
    constructor() {
      this.name = "Joe";
    }
    greet() {
      setTimeout(function () {
        console.log(`Hello ${this.name}`);
      }, 1000); // inner function has its own this with no name
    }
  }
  let greeterTraditional = new GreeterTraditional();
  greeterTraditional.greet(); // "Hello "
  
  class GreeterBound {
    constructor() {
      this.name = "Steven";
    }
    greet() {
      setTimeout(function () {
        console.log(`Hello ${this.name}`);
      }.bind(this), 1000); // passing this from the outside context
    }
  }
  let greeterBound = new GreeterBound(); // "Hello Steven"
  greeterBound.greet();
  
  class GreeterArrow {
    constructor() {
      this.name = "Ravi";
    }
    greet() {
      setTimeout(() => {
        console.log(`Hello ${this.name}`);
      }, 1000); // arrow function inherits this by default
    }
  }
  let greeterArrow = new GreeterArrow();
  greeterArrow.greet(); // "Hello Ravi"