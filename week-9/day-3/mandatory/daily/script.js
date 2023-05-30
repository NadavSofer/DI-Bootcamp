const fetchGifs = async (q, rating, key, limit, offset) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${q}&rating=${rating}&api_key=${key}&limit=${limit}&offset=${offset}`;
        let response = await fetch(url);
        if (response.status !== 200) {
            throw new Error('nopers')
        }
        let json = await response.json();

        return json;

    } catch (error) {
        return error
    }
}

const renderData = async (q, rating, key, limit, offset) => {
    let response = await fetchGifs(q, rating, key, limit, offset);

    let box = document.createElement('div');
    box.classList.add('box');

    let gif = document.createElement('iframe');
    gif.setAttribute('src', response.data[0].embed_url);
    box.appendChild(gif);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'delete';
    deleteButton.onclick = () => deleteBox(box)
    box.appendChild(deleteButton);

    document.getElementsByClassName('gif_container')[0].appendChild(box);
}

let form = document.forms.gifForm;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let inputValue = form.Qinput.value;
    renderData(inputValue, 'g', 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', 1)

})

let deleteAllButton = document.createElement('button');
deleteAllButton.innerText = 'delete all'

let body = document.getElementsByTagName('body')[0]
body.appendChild(deleteAllButton)

deleteAllButton.addEventListener('click', () => {
    let container = document.getElementsByClassName('gif_container');
    for (let i = 0; i < container.length; i++) {
        let box = container[i];
        box.innerHTML = '';
    }
});

const deleteBox = (div) => {
    div.remove();
}