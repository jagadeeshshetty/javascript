
class Demo {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

let appleCEO = new Demo('Steve Jobs');
appleCEO.sayHello();

let teslaCEO = new Demo('Elon Musk');
teslaCEO.sayHello();
