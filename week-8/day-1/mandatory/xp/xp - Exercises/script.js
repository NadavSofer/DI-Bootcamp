// Exercise 1 : Change The Article --------------------------------------------------------------------------

// let header = document.getElementsByTagName('h1')[0];
// console.log(header);

// let last = document.getElementsByTagName('article')[0].lastElementChild;

// let Change_color = document.getElementsByTagName('h2')[0];
// Change_color.addEventListener('click', ()=> {Change_color.style.backgroundColor = 'red'})

// let hidden = document.getElementsByTagName('h3')[0];
// hidden.addEventListener('click', ()=> {hidden.style.display = 'none'})

// let article = document.getElementsByTagName('article')[0]

// let bold_button = document.createElement('button')
// bold_button.setAttribute('id', 'bold-button')
// bold_button.innerText = 'bold button'
// article.appendChild(bold_button)

// bold_button.addEventListener('click', ()=>{
//     let par = document.getElementsByTagName('p');

//     for (const i of par) {
//         i.style.fontWeight = 'bold'
//     }
// })



// header.addEventListener('mouseover', ()=>{
//     random_num = Math.floor(Math.random() * 100);
//     header.style.fontSize = random_num + 'px';
// })

// Change_color.addEventListener('mouseover',  ()=> {
//     Change_color.style.transition = '1s'
//     Change_color.style.opacity = 0;
// })

// Exercise 2 : Work With Forms --------------------------------------------------------------------------

// const frm = document.forms[0];
// console.log(frm);

// let fname_id = document.getElementById('fname');
// let lname_id = document.getElementById('fname');

// const elements = frm.elements;

// let fname_name = elements.fname;
// let lname_name = elements.lname;

// frm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     let fname_value = fname_name.value;
//     let lname_value = lname_name.value;

//     fname_value = fname_value.replaceAll(' ', '');
//     fname_value = fname_value.trim();

//     lname_value = lname_value.replaceAll(' ', '');
//     lname_value = lname_value.trim();

//     if (fname_value.length !== 0 || lname_value.length !== 0 ){
//         let ul = document.getElementsByClassName('usersAnswer')[0];

//         let fname_answer = document.createElement('li');
//         let lname_answer = document.createElement('li');

//         fname_answer.innerHTML = fname_value;
//         lname_answer.innerHTML = lname_value;

//         ul.appendChild(fname_answer);
//         ul.appendChild(lname_answer);
//     }
// })


// Exercise 3 : Transform The Sentence --------------------------------------------------------------------------

// let allBoldItems = []

// function getBold_items() {
//     let items = document.getElementsByTagName('strong');
//     for (const item of items) {
//         allBoldItems.push(item);
//     }
// }
// getBold_items()

// function highlight() {
//     for (const item of allBoldItems) {
//         item.style.color = 'blue';
//     }
// }

// function return_normal() {
//     for (const item of allBoldItems) {
//         item.style.color = 'black';
//     }
// }

// let par = document.getElementsByTagName('p')[0];

// par.addEventListener('mouseover', highlight);
// par.addEventListener('mouseout', return_normal);


// Exercise 4 : Volume Of A Sphere --------------------------------------------------------------------------

// const form = document.forms[0];
// const submit = document.getElementById('submit');
// const radius = form.radius;
// submit.addEventListener('click' , (e) => {e.preventDefault();form.volume.value = 4/3 * Math.PI * Math.pow(radius.value, 3)});



// Exercise 5 : Event Listeners --------------------------------------------------------------------------

// let par = document.getElementsByTagName('p')[0];

// function highlight() {
//     par.style.color = 'blue';
// }

// function return_normal() {
//         par.style.color = 'black';
// }

// function click_on() {
//     par.style.border = 'black solid 1px';
// }

// par.addEventListener('mouseover', highlight);
// par.addEventListener('mouseout', return_normal);
// par.addEventListener('click', click_on);