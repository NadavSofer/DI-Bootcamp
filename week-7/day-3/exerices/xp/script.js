// Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];


// people.shift() //-----  1

// people[2] = 'Jason' //-----  2

// people.push('Nadav') //-----  3

// mary_index = people.indexOf('Mary') //-----  4

// no_mary = people.slice(1) //-----  5

// foo_index = people.indexOf('Foo') // it don't exist  //-----  6

// let last = people[people.length-1] //-----  7

// part 2 

// for (const person in people) {
//     if (Object.hasOwnProperty.call(people, person)) {
//         const element = people[person];
//         console.log(element)
//     }
// } //-----  1

// for (const person in people) {
//     const element = people[person];
//     if (element == 'Jason') {
//         console.log(element)
//         break
//     }
//     console.log(element)
// } //-----  2



// Exercise 2 : Your Favorite Colors ------------------------------------------------------

// const colors = ['red', 'black', 'purple', 'blue', 'green'];
// const suffixs = ['st', 'nd', 'rd', 'th', 'th']

// for (const color in colors) {
//     if (Object.hasOwnProperty.call(colors, color)) {
//         const element = colors[color];
//         let str = `My ${Number(color)+1+suffixs[color]} choice is ${element}`
//         console.log(str)
//     }
// }

// Exercise 3 : Repeat The Question -------------------------------------------------------

// let res = prompt('number ');
// if (Number(res)) {
//     while (Number(res) < 10) {
//         res = prompt('number ');
//         console.log(res);
//     }
//     console.log(res);
// };


// Exercise 4 : Building Management -----------------------------------------------------

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors)


// let num_of_pips = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
// console.log('there are ' + num_of_pips + 'in the first and third floors')


// console.log(building.nameOfTenants[1]  + ' ' + building.numberOfRoomsAndRent.dan[0])

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200
//     console.log(building.numberOfRoomsAndRent.dan[1])
// }


// let family = {
//     thing1: 'thing1_v',
//     thing2: 'thing2_v',
//     thing3: 'thing3_v',
//     thing4: 'thing4_v',
//     thing5: 'thing5_v',
// }

// for (i in family){
//     console.log(i)
// }
// for (i in family){
//     console.log(family[i])
// }


// Exercise 6 : Rudolf -----------------------------------------------------

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
// }

// for (i in details){
//     console.log(i, details[i])
// }

// const details = { my: 'name', is: 'Rudolf', the: 'reindeer' }; 
// let output = '';

// for (let key in details) {
//     output += key + ' ' + details[key] + ' '} 
// console.log(output.trim()); 

// Exercise 7 : Secret Group -----------------------------------------------------

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// names.sort()
// out = []
// for (i in names){
//     out.push(names[i][0])
// }
// console.log(out.join(''))
// console.log(names)