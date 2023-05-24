// let arr = [2,4,4,1];

// const birthdayCakeCandles = array => {
//     let out = 0;
//     let tallest = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > tallest) {
//             tallest = element;
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element == tallest) {
//             out++
//         }
//     }
//     return out
// }

// let how_many = birthdayCakeCandles(arr);
// console.log(how_many);

// const birthdayCakeCandles1 = array => {
//     let max = Math.max(...array);
//     let filter = array.filter(element => element === max);
//     return filter.length;
// }

// let how_many1 = birthdayCakeCandles1(arr);
// console.log(how_many1);


//---------------------------------------------------------------------------------------------------

// let nums  = [2,5,3,7,2,3,6,8,6];

// const smallest_distance = arr => {
//     let distance = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//             let min = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
//             distance.push(min);
//         }

//     }
//     return (distance.length === 0) ? -1 : distance.sort()[0];
// }

// let res = smallest_distance(nums);

// console.log(res);


// Array destructuring-------------------------------------------------------------------------------

let arr  = [2,5,3,7,2,3,6,8,6];

let [a, b] = arr;


// Array spreading-----------------------------------------------------------------------------------

let arr2 = [8, 4, 6];

let arr3 = [...arr, ...arr2];

// console.log(arr3);


// Array rest parameter -----------------------------------------------------------------------------

let [c,d, ...rest] = arr;

// console.log(rest);


// object methods -----------------------------------------------------------------------------------

let obj = {
    name: 'thing',
    place: 'stuff',
    key3: 'face'
}


let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);

// Object.entries(obj).forEach(([key, value]) => console.log(key, value));


// Object destructuring------------------------------------------------------------------------------

const {name, place} = obj;
// console.log(place);

// Object spreading----------------------------------------------------------------------------------

let obj3 = {...obj, name:'nope'};


// Classes ------------------------------------------------------------------------------------------

class NameOfClass {
    constructor(param1, param2){
        this.a = 'b';
        this.b = param1;
        this.c = param2;
    }

    getName(){
        return this.a + this.b + this.c;
    }

    setA(param){
        this.a = param;
    }
}

let abc = new NameOfClass('b','c');
let cba = new NameOfClass('r', 't');

// console.log(abc.getName());

abc.setA('a');
// console.log(abc.getName());

// console.log(cba.getName());

//  ------------------------------------------------------------------------------------------

class Animal {
    #name
    constructor(name){
        this.#name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }

    getName(){
        return this.name
    }
}

class Dog extends Animal {
    constructor(name, color){
        super(name);
        this.color = color;
    }

    speak(){
        console.log(`${this.name} barks`);
    }

    getColor(){
        return this.color
    }
}

class Frenchi extends Dog {
    constructor(name, color){
        super(name, color);

    }

    getName(){
        return this.name
    }
}

const dog = new Animal('Dog');
const cat = new Animal('Cat');

const buddy = new Dog('Buddy', 'black');
const gili = new Dog('Gili', 'brown');

const fr = new Frenchi('rex', 'white');

buddy.speak()