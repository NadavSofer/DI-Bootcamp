let register = document.getElementById('registerForm');

register.addEventListener('submit', (event) => {
    event.preventDefault()
    getMyProducts()
})

const getMyProducts = async () => {
    let formData = new FormData(register);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    try {
        const res = await fetch('http://localhost:3030/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: formDataJsonString
        })
        const data = await res.json();
        render(data)

    } catch (error) {
        console.log(error);
    }
}


const render = data => {
    console.log(data);
    document.getElementById('root').innerHTML = data;
};
