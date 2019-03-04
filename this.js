function food(kind) {
    this.kind = kind;
    this.cook = cook; // functions are hoisted, so it's perfectly
                      // fine to call or assign function names
                      // before they are defined.
    function cook(sec) {
      setTimeout(function() {
        console.log(this.kind + " cooked for " + sec + " seconds.");
      }, sec * 1000);
    }
  }
let soup = new food("soup"); // <--- this.kind = "soup"
soup.cook(2); // undefined cooked for 2 seconds.

function food1(kind) {
    this.kind = kind;
    this.cook = cook; // functions are hoisted, so it's perfectly
                      // fine to call or assign function names
                      // before they are defined.
    let that = this;
    function cook(sec) {
      setTimeout(function() {
        console.log(that.kind + " cooked for " + sec + " seconds.");
      }, sec * 1000);
    }
  }
let soup1 = new food1("soup"); // <--- this.kind = "soup"
soup1.cook(2); // undefined cooked for 2 seconds.

function food2(kind) {
    this.kind = kind;
    this.cook = cook; // functions are hoisted, so it's perfectly
                      // fine to call or assign function names
                      // before they are defined.
    
    function cook(sec) {
        setTimeout(() => {
            console.log(this.kind + " cooked for " + sec + " seconds.");
        }, sec * 1000);
    }
  }
let soup2 = new food2("soup"); // <--- this.kind = "soup"
soup2.cook(2); // undefined cooked for 2 seconds.