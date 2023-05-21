let id;
let pos = 0;

function move() {
    let inner = document.getElementById('inner');

    id = setInterval(()=>{
        if (pos >= 350){
            clearInterval(id);
        }
        pos++;
        inner.style.left = pos+'px';
    }, 5)
}

function stop() {
    clearInterval(id);
}


