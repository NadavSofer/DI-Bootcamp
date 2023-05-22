// Exercise 1 : Find The Sum -------------------------------------------------------------------------------------------

// let sum = (num1, num2) => num1 + num2;


// Exercise 2 : Kg And Grams -------------------------------------------------------------------------------------------

// function KG_to_G_declaration(num) {
    // return num * 1000;
// };
// this is hoisted^^^

// let KG_to_G_expression = function (num) {
    // return num * 1000;
// };
// this isn't hoisted^^^

// let KG_to_G_arrow = num => num * 1000;


// Exercise 3 : Fortune Teller -------------------------------------------------------------------------------------------

// (function fortune_teller(num_children, partner_name, location, job_title) {
//     let sentence = `You will be a ${job_title} in ${location}, and married to ${partner_name} with ${num_children} kids.`
//     let body = document.getElementsByTagName('body')[0];
//     let p = document.createElement('p');
//     p.innerText = sentence;
//     body.appendChild(p);
// })();


// Exercise 5 : Juice Bar -------------------------------------------------------------------------------------------

function makeJuice (size) {
    let ingredients = []
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        let body = document.getElementsByTagName('body')[0];
        let sentence = `The client wants a ${size} juice, containing `;
        let p = document.createElement('p');

        ingredients.forEach(element => {
            sentence += element + ' '
        });

        p.innerText = sentence;
        body.appendChild(p);
    }

    addIngredients('strawberry', 'banana', 'dragon fruit');
    addIngredients('kiwi', 'passion fruit', 'orange');
    displayJuice();
}

makeJuice('normal');