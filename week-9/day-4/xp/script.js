let box = document.getElementById('infoBox');

const getData = async ()=>{
    try {
        let spinner = document.createElement('i')
        spinner.classList.add('fa-solid', 'fa-spinner' , 'fa-spin-pulse');
        spinner.style.fontSize = '5rem'
        spinner.style.color = '#cea502'
        box.appendChild(spinner)
        let random_num =  Math.floor(Math.random() * 82)
        let url = await fetch(`https://www.swapi.tech/api/people/${random_num}`);
        if (url.status === 200) {
            let response = await url.json();
            let name = await getPlanet(response['result']['properties']['homeworld']);
            let obj = response['result']['properties'];
            let obj1 = {...obj, homeworld:name}
            spinner.remove()
            renderData(obj1)
        }
    } catch (error) {
        console.log(error);
        throw new Error('invalid number')
    }
}

const getPlanet = async (api)=>{
    try {
        let url = await fetch(api);
        if (url.status === 200) {
            let response = await url.json();
            console.log(response);
            if (response.message === 'ok') {
                return response['result']['properties']['name'];
            }

        }
            return 'none'
    } catch (error) {
        throw new Error(error)
    }
}


let button = document.getElementById('button');

button.addEventListener('click', () =>{
    box.innerHTML = '';
    getData()

})

function renderData(obj) {

    let name = document.createElement('h1')
    name.innerText = obj['name']
    box.appendChild(name)

    let height = document.createElement('h2')
    height.innerText = `Height: ${obj['height']}`
    box.appendChild(height)

    let gender = document.createElement('h2')
    gender.innerText = `Gender: ${obj['gender']}`
    box.appendChild(gender)

    let birth_year = document.createElement('h2')
    birth_year.innerText = `Birth year: ${obj['birth_year']}`
    box.appendChild(birth_year)

    let home_planet = document.createElement('h2')
    home_planet.innerText = `Home planet: ${obj['homeworld']}`
    box.appendChild(home_planet)

    box.appendChild(home_planet)

}