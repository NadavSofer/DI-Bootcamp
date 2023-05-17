// let b= 3, d = b, u = d;

// const tree = ++d * d*b * b++ +
// + --d+ + +b-- +
// + +d*b+ +
// u

// const tree2 = 4 * 4*3 * 3
// + 3 + 4 +
//  + 3 * 3 + 
// 3

// console.log(tree)
// console.log(tree2)


// functions -----------------------------------------------------------------------

// getFullName() // --------------------> doesn't have to be after the function

// function getFullName(a = 'thing', b = 'stuff') {
//     console.log(a + ' ' + b)
// }


// function getAge(a, b) {
//     return (a * b);
// }

// let age = getAge(3,5);
// console.log(age)


// const getName2 = (param1, param2) => {
//     console.log(param1, param2);
// }
// getName2('thing2', 'thing3') // -------------------->  has to be after the function


// --------------------------------------------------------------------------------------

// function myAge(age) {
//     let mom_age = age * 2;
//     let dad_age = mom_age * 1.2
//     let out = `dad's age is ${dad_age.toFixed()} and mom's age is ${mom_age}`
//     return out
// }
// console.log(myAge(12))


// --------------------------------------------------------------------------------------

// let pokemon = {
//     name: 'Pikachu',
//     type: 'electric', 
//     trainer: 'Ash',
//     name_type: function() {
//         return `${this.name}: ${this.type}`
//     }
// };
// console.log(pokemon.name_type())


// let x = 5;

// function foo() {
//     let x = 1;
//     console.log(this.x)
// }

// foo()

// let obj = {
//     x:2
// }
// obj.a = foo;

// console.log(obj.a());

// --------------------------------------------------------------------------------------

// let div = document.getElementById('outer');
// let div = document.getElementsByTagName('div');
// let div = document.getElementsByClassName('thing');
// let div = document.querySelector('#outer .thing');
// let title = document.getElementById('title');
// title.innerText = 'hello';
// title.textContent = 'again';
// title.innerHTML = "<span style = 'color: red;'> red </span>"

let root = document.getElementById('root');
let img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg');
root.appendChild(img);