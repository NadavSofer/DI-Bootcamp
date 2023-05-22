// Exercise 2 : Ternary Operator ----------------------------------------------------------------------------------

// let experiencePoints;

// let winBattle = () => {
//     return true;
// };

// winBattle() == true ? experiencePoints = 10 : experiencePoints = 1;


// Exercise 3 : Is It A String --------------------------------------------------------------------------------------

// let Exercise_3 = argument => typeof(argument) == 'string' ?  true : false;

// let test = 'thing';

// console.log(Exercise_3('test'));


// Exercise 4 : Colors ---------------------------------------------------------------------------------------------

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, i) => {
//     console.log(`${i+1}# choice is ${element}.`);
// });

// let Violet_check = colors.includes('Violet') ? 'yeah' : 'nope';

// console.log(Violet_check);

// Exercise 5 : Colors #2 -------------------------------------------------------------------------------------------

// const ordinal = ["th","st","nd","rd"];

// colors.forEach((element, i) => {
//     i > 3 ? console.log(`${i+1}${ordinal[3]} choice is ${element}.`)
//     : console.log(`${i+1}${ordinal[i]} choice is ${element}.`);
// });

// Exercise 6 : Bank Details -------------------------------------------------------------------------------------------

let bankAmount = 20000;

let Israel_VAT  = 0.17;

let details = ["+200", "-100", "+146", "+167", "-2900"];

details.forEach((element, i, arr) => {
    num_element = Number(element);
    tax = num_element * Israel_VAT;
    num_element = num_element + tax
    arr[i] = num_element;
});

console.log(details);