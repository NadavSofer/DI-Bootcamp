
function number(num){
    out.value += num;
}
function operator(operator){
    out.value += operator;
}
function equal(){
    let res = eval(calc);
    out.value = res;
    
}

function reset1() {
    out.value = '';
}

function clear1() {
    out.value = '';
}

let div = document.getElementsByClassName('output')[0];
let out = document.createElement('input');
div.appendChild(out);