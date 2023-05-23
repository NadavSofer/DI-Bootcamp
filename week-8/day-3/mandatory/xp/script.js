// Exercise 1 : Analyzing ----------------------------------------------------------

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// A: will return a single list as if you pushed the elements in the other list into it a the correct index.

// ------2------
const country = "USA";
// console.log([...country]);

// A: will split every element and add them individually into a list.

// ------Bonus------
let newArray = [...[,,]];
// console.log(newArray);

// A: will make a list of undefined elements.

// Exercise 2 : Employees ----------------------------------------------------------

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
            { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
            { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
            { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
            { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
            { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
            { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let hello_user = users.map(x => 'hello ' + x['firstName']);


let filtered_user = users.filter(x => x['role'] === 'Full Stack Resident');
let filtered_last_name = users.filter(x => x['role'] === 'Full Stack Resident').map(x => x['lastName']);



// Exercise 3 : Star Wars ----------------------------------------------------------

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let epic_reduce = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);

// Exercise 4 : Employees #2 ----------------------------------------------------------


const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
            {name: "Liam", course: "Computer Science", isPassed: false}, 
            {name: "Jenner", course: "Information Technology", isPassed: true}, 
            {name: "Marco", course: "Robotics", isPassed: true}, 
            {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
            {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter(x => x['isPassed'] == true);

let congratulation = list => {
    list.forEach(element => {
        console.log(`Congratulation ${element['name']}! You passed your ${element['course']} course.`);
    });
}

// congratulation(passed); // ---> i put it in a function just as an easy way the switch on and off.