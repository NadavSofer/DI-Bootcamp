const query = window.location.search;


const queryParams = new URLSearchParams(query);
const fName = queryParams.get('name');
const lName = queryParams.get('lastName');
const body = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.innerText = `First name: ${fName} \n Last name: ${lName}`;
body.appendChild(div);