let form1 = document.forms.myForm;

form1.addEventListener('submit', (event)=>{
    event.preventDefault()
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    const formData = {
        name: name,
        lastName: lastName
    };
    
    const formDataJson = JSON.stringify(formData);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = formDataJson;
});