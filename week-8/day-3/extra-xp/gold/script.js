// Exercise 1 : Analyzing The Map Method ------------------------------------------------------------

[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
});

// A: will return an array with doubled numbers, [2, 4, 6].

// Exercise 2: Analyzing The Reduce Method ----------------------------------------------------------

[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2],
);

// A: will return an array with the last array + the first array concatenated, [1, 2, 0, 1, 2, 3].

// Exercise 3 : Analyze This Code -------------------------------------------------------------------

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    // console.log(num, i);  // ---> will log the number (num) and it's index.
    // alert(num); //---> will send a number of alerts equal to the length of the array with the number (num).
    return num * 2; //---> will return an array with the numbers (num) doubled.
})

// A: answer in the code

// Exercise 4 : Nested Arrays -----------------------------------------------------------------------

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
let fixed_array = array.flat(2);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];


let full_greeting = ''

let fixed_greeting = greeting.map(Element => {
    str_element = Element.toString().replaceAll(',', ' ');
    console.log(str_element);
    full_greeting += str_element+ ' ';
});

console.log(full_greeting);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let trapped_no_more = trapped.flat(Infinity);


