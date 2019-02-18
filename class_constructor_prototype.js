class A {
    constructor() {
        this.item = '100a';
    }
}

class B extends A {
    constructor() {
        super()
    this.item = '100b';
    this.day = 'today';
    };
}

class C extends B {
    constructor() {
        super();
        this.item = '100c';
        this.season = 'Summer'
    }
}

const {season, ...rest} = new C;
console.log(rest);