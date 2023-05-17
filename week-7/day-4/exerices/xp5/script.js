//  -------------------------------  2

let div = document.getElementsByTagName('div')[0];
// console.log(div);

let pete = document.getElementsByClassName('list')[0].lastElementChild;
pete.textContent = 'Richard';

let sarah = document.getElementsByClassName('list')[1].children[1];
sarah.remove();

for (let i = 0; i < 2; i++) {
    let first = document.getElementsByClassName('list')[i].firstElementChild;
    first.textContent = 'Nadav';
};

//  -------------------------------  3

let ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].classList.add('student_list');
}
ul[0].classList.add('university');
ul[0].classList.add('attendance');

//  -------------------------------  4

div.style.backgroundColor = "lightblue";

let hidden = document.querySelector('.list').firstElementChild
hidden.style.display = "none";

let border = document.querySelector('.list').lastElementChild
border.style.border = 'solid 1px black';

let body = document.getElementsByTagName('body')[0];
body.style.fontSize = '2rem'