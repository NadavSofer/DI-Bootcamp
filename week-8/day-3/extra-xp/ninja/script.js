// Exercise 1 : Dog Competition ----------------------------------------------------------

const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];

let dog_age = [];

let dog_arr = data.filter(Element => Element['type'] === 'dog');
dog_arr.forEach(element => {
    dog_age.push(element['age']*7);
});

dog_age_total = dog_age.reduce((accumulator, currentValue) => accumulator +  currentValue);


// Exercise 2 : Email ----------------------------------------------------------

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '.trim();


// Exercise 3 : Employees #3 ----------------------------------------------------------

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

let new_users = users.map(element => ({
    [element['firstName'] + ' ' + element['lastName']]: element['role']
}));


// console.log(new_users);

// Exercise 4 : Array To Object ----------------------------------------------------------

const letters = ['x', 'y', 'z', 'z'];
let out = {}
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    if (element in out == true){
        out[element] = out[element]+1;
    } else {
        out[element] = 1;
    }
}
console.log(out);

let out_reduce = letters.reduce((acc, element) => {
    if (element in acc) {
    acc[element] = acc[element] + 1;
    } else {
    acc[element] = 1;
    }
    return acc;
}, {});

console.log(out_reduce);