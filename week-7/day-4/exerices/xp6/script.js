//  -------------------------------  2
let navbar = document.getElementById('navBar');
navbar.setAttribute('id', 'socialNetworkNavigation');

//  -------------------------------  3

let ul = document.getElementsByTagName('ul')[0];
let add_li = document.createElement('li');
add_li.innerText = 'Logout';
ul.appendChild(add_li)


let first_li = ul.firstElementChild
console.log(first_li.textContent);

let last_li = ul.lastElementChild
console.log(last_li.textContent);