//  Exercise 1 : Find The Numbers Divisible By 23 -------------------------------------------------------------------

// function isDivisible(num) {
//     let out = 0
//     for (let i = 0; i < 500; i++) {
        
//         if (i % num == 0){
//             console.log(i);
//             out += i
//         }
//     }
//     console.log(out);
// }
// isDivisible(23)


// Exercise 2 : Shopping List -------------------------------------------------------------------

// const stock = { 
//     'banana': 6, 
//     'apple': 0,
//     'pear': 12,
//     'orange': 32,
//     'blueberry':1
// }; 

// const prices = {    
//     'banana': 4, 
//     'apple': 2, 
//     'pear': 1,
//     'orange': 1.5,
//     'blueberry':10
// };

// const shoppingList  = ['banana', 'orange', 'apple'];

// function myBill() {
//     for (const item in shoppingList) {
//         if (shoppingList[item] in stock && stock[shoppingList[item]] > 0) {
//             console.log(prices[shoppingList[item]]);
//             --stock[shoppingList[item]];
//         }
//     }
// };
// myBill();

// Exercise 4 : Vacations Costs -------------------------------------------------------------------

// function hotelCost() {
//     let input = prompt('how many nights will you be staying? ');
//     while (!Number(input)){
//         input = prompt('how many nights will you be staying? (MUST BE A NUMBER) ');
//     }
//     return input*140
// }

// function planeRideCost() {
//     let input = prompt('where do you want to flight to? ');
//     while (!isNaN(input)){
//         input = prompt('where do you want to flight to? (MUST NOT CONTAIN NUMBERS) ');
//     }
//     let out = input == 'London' || input == 'london' ? '183$'
//             : input == 'Paris' || input == 'paris' ? '220$'
//             : '300$'

//     return out
// }


// function rentalCarCost() {
//     let input = prompt('how many would you like to rent? ');
//     while (!Number(input)){
//         input = prompt('how many would you like to rent? (MUST BE A NUMBER) ');
//     }
//     let out = Number(input)*40;
//     if (Number(input) > 10){
//         out = out - (out * 0.05)
//     }
//     return out
// }


// function totalVacationCost() {
//     return `The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}`
// }

// console.log(totalVacationCost()); 



