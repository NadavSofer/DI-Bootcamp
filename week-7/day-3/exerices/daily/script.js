// Daily Challenge: Not Bad -------------------------------------------------

// let sentence = 'The movie is not that bad, I like it'
// let wordNot = sentence.search('not');
// let wordBad  = sentence.search('bad');

// console.log(wordNot)
// console.log(wordBad)

// if (wordNot < wordBad){
//     let res1 = sentence.slice(wordNot, wordBad+3)
//     let out = sentence.replace(res1, 'good')
//     console.log(out)
// }

// Daily Challenge2: Stars -------------------------------------------------

// for (let i = 0; i < 6; i++) {
//     let row = ''
//     for (let j = 0; j <= i ; j++) {
//         row += '*'
//     }
//     console.log(row)
// };

// VVV this is just a second answer VVV

// let row = ''
// for (let i = 0; i < 6; i++){
//     row = '*'.repeat(i+1)
//     console.log(row)
// }

// Daily Challenge GOLD: Bubble Sort -------------------------------------------------

// const numbers = [5,0,9,1,7,4,2,6,3,8];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]){
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
// }

// console.log(numbers.toString())