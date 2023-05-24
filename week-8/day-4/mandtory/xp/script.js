//  Exercise 1 : Location----------------------------------------------------------------------------

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// A: I am John Doe from Vancouver, Canada. 49.2827, -123.1207


//  Exercise 2: Display Student Info----------------------------------------------------------------------------

function displayStudentInfo(objUser){
    let {first, last} = objUser;
    return `Your full name is ${first} ${last}.`
}

let fullName = displayStudentInfo({first: 'Elie', last:'Schoppik'});
// console.log(fullName);

//  Exercise 3: User & Id----------------------------------------------------------------------------

const users = { user1: 18273, user2: 92833, user3: 90315 };

let out = [];
Object.entries(users).forEach((key) => out.push(key));

// console.log(out);


//  Exercise 4 : Person Class----------------------------------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
// console.log(typeof member);

// A: will return object

//  Exercise 5 : Dog Class----------------------------------------------------------------------------

class Dog {
    constructor(name) {
        this.name = name;
    }
};

// A: 2 is the correct way the extend Dog.

// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };

//  Exercise 6 : Challenges----------------------------------------------------------------------------

let test = {} === {};
let test2 = [2] === [2];

// A: both are false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;

// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// A: both object2 and object3 will return 4 and object4 will remain 5.
// that is because object2 and object3 are copies(not really, they share the same space in the memory) of object1.
//so every change to object1 will reflect on object2 and object3.

//  Exercise 6 : Challenges again ----------------------------------------------------------------------------

class Animal {
    name
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    

    sound(param){
        return `${param} I'm a ${this.type}, named ${this.name} and I'm ${this.color}.`
    }
}

const cow = new Mammal('Lilly', 'Cow', 'brown and white');

console.log(cow.sound('mooooooooooooo'));
