//Currying
const y = a => b => a+b;

//Compose
const x = (a,b) => (c) => a(b(c));

const sum2 = num => num * 2;
const sum = num => num + 1;

let a = x(sum,sum2)(6);
console.log(a);

//---------------------------------------------------------------------------------------------

let arr1 = [1,2,3];
let arr2 = arr1;
let arr3 = [...arr1];

arr2[1] = 5;

console.log(arr1);
console.log(arr2);
console.log(arr3);

