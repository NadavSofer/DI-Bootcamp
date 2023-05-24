class Bird {
    constructor() {
        console.log("I'm a bird. 🦢");
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();

// A: it will log I'm pink. 🌸 and then it will log I'm a bird. 🦢.