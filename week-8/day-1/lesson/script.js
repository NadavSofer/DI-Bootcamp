// function handleclick(e) {
//     console.log(e);
// }

// function handleinput(e) {
//     console.log(e.target.value);
// }

// let outerdiv = document.getElementById('outerdiv');

// let butB = document.createElement('button');

// butB.innerText = 'click B';

// outerdiv.appendChild(butB);

// butB.addEventListener('click', function(e) {
//     console.log(e.target);
// });
// -----------------------------------------------------------------------------------------

// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');
// const but = document.getElementById('button');

// div1.addEventListener('click', function (e) {
//     alert('div1');
// })

// div2.addEventListener('click', function (e) {
//     alert('div2');
// })

// but.addEventListener('click', function (e) {
//     alert('button');
//     e.stopPropagation();
// })

// -----------------------------------------------------------------------------------------

// const frm = document.forms.form1;
// const elements = frm.elements;

// elements.username.value = 'hello'

// function handlesubmit(e) {
//     e.preventDefault();

//     let val = elements[0].value
//     console.log(val);

//     e.target.submit();
// }

// -----------------------------------------------------------------------------------------

function x() {
    console.log('hello');
}

setTimeout(()=>{
    x()
}, 1000*3)


let counter = 0;
let id = setInterval(()=> {
    counter++
    console.log(counter);

    if (counter > 5){
        clearInterval(id)
    }
},1000*3)