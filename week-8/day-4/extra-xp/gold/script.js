//Exercise 1 : Print Full Name ----------------------------------------------------------------------

function displayStudentInfo(objUser) {
    let { first, last } = objUser;
    return `Your full name is ${first} ${last}.`
}

let fullName = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

// Exercise 2 : Keys And Values ---------------------------------------------------------------------

let obj = { a: 1, b: 2, c: 3 };

const keysAndValues = object => {
    let keys = Object.keys(object);
    let values = Object.values(object);
    return [keys, values]
}

// console.log(keysAndValues(obj));

//Exercise 3 : Counter Class ------------------------------------------------------------------------

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);


// A: will return 3 because counterTwo is a reference.