const getPlanet = async ()=>{
    try {
        let url = await fetch('https://v6.exchangerate-api.com/v6/c78461ce3c6d642bde59cd2c/codes');
        let response = await url.json();
        return response['supported_codes']
    } catch (error) {
        throw new Error(error);
    }
}

let from = document.getElementById('from');
let to = document.getElementById('to');
let amount = document.getElementById('amount');
let finalResult = document.getElementById('result');

getPlanet()
.then((res)=> {
    for (const element of res) {
    let option = document.createElement('option');
    option.innerText = `${element[0]} - ${element[1]}`;
    option.setAttribute('value', element[0]);
    from.appendChild(option);

    let option2 = document.createElement('option');
    option2.innerText = `${element[0]} - ${element[1]}`;
    option2.setAttribute('value', element[0]);
    to.appendChild(option2);
    }
});

amount.addEventListener('input' , () => {
});

const fetchConversion = async (currencyFrom , currencyTo) => {
    result = await fetch(`https://v6.exchangerate-api.com/v6/c78461ce3c6d642bde59cd2c/latest/${currencyFrom}`);
    resultJson = await result.json();
    return resultJson.conversion_rates[currencyTo]
};
const displayResult = (value) => {
    finalResult.innerHTML = (value*amount.value).toFixed(2);
};
amount.addEventListener('input' , () => {fetchConversion(from.value , to.value).then(result => displayResult(result))});
to.addEventListener('input' , () => {fetchConversion(from.value , to.value).then(result => displayResult(result))});
from.addEventListener('input' , () => {fetchConversion(from.value , to.value).then(result => displayResult(result))});