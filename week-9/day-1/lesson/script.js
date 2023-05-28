let form1 = document.forms.myForm;

let elems = form1.elements;

let select = elems.numselect



function handle(e) {
    e.preventdefault();
    let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value)
    console.log(selected);
};