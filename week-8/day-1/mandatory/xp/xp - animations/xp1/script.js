let div = document.getElementById('container');
let button = document.getElementById('clear')


setTimeout(()=>{
    let par = document.createElement('p');
    par.innerText = 'hello world';
    div.appendChild(par);
    alert('hello world');
},2000);

let counter = setInterval(()=>{
    let par = document.createElement('p');
    par.innerText = 'hello world';
    div.appendChild(par);

    if (div.children.length === 5){
        clearInterval(counter);
        console.log(1);
    };
}, 2000);

button.addEventListener('click', ()=>{
    clearInterval(counter);
});

