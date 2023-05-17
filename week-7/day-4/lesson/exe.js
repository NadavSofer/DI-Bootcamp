// 1. Use the firstElementChild property to access an element.
// 2. Use the lastElementChild property to access an element.
// 3. Use the nextElementSibling property to access an element.
// 4. Use the previousElementSibling property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.

let header = document.getElementById('header');
let first = header.firstElementChild;
let last = header.lastElementChild;
let next = header.nextElementSibling;

let content = document.getElementById('content');
let previous = content.previousElementSibling;
let parent = content.parentElement;
let children = content.childNodes;