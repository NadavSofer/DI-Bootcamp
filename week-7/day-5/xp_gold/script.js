let div = document.getElementsByClassName('output')[0];
let out = document.createElement('input');
div.appendChild(out);

function number(num){
    out.value += num;
}

function operator(operator){
    out.value += operator;
}

function equal(){
    let res = eval(out.value);
    out.value = res;
}

function reset1() {
    out.value = '';
}