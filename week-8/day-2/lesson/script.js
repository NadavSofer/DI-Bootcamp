// nested functions -----------------------------------------------------------------------

function x1() {
    function y1() {
        return 1;
    }
    return y1;
};

let sum_x = x1()();

// console.log(sum_x);


//Currying ---------------------------------------------------------------------------------

const sum = (x) => (y) => x + y;

const sum1 = x => { // ----- the same as this ^^^^
    const total = y =>{
        x + y
    }
    return total
}

let s = sum(10); // ---> it will remember the parameter 
let t = s(5);// ---> so this will be equal to sum(10)(5)


//Compose ---------------------------------------------------------------------------------

const x = (a, b) => {
    return (c) => {
        return a(b(c));
    }
}

const x_short = (a, b) => (c) => a(b(c)); // ----- the same as this ^^^^

const sum_num1 = (num) => num * 2; // ---- this will be a
const sum_num2 = (num) => num + 1; // ---- this will be b

let total = x(sum_num1, sum_num2)(6);

// const x = (a,b) => (c) => a(b(c));

// const sum2 = num => num * 2;
// const sum = num => num + 1;

// let a = x(sum,sum2)(6);
// console.log(a);

//copies ---------------------------------------------------------------------------------

let arr1 = [1,2,3];
let str_arr = ['thing1', 'thing2', 'thing3'];
let arr2 = arr1;
let arr3 = [...arr1];

arr2[1] = 5;

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);