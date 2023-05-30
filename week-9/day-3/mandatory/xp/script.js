// Exercise 1 : Giphy API ---------------------------------------------------------------------------

const fetchGifs = async (q , rating , key, limit, offset) => {
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

const logData = async (q , rating, limit, offset) => {
    let response = await fetchGifs(q , rating, limit,  offset);
    console.log(response);
}

// let url = logData('hilarious', 'g', 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')



// Exercise 2 : Giphy API ---------------------------------------------------------------------------

// let sunURL = logData('sun', 'g','hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', 20, 2)



// Exercise 3 : Async Function ----------------------------------------------------------------------

let starWars = async () => {
    let response = await fetch('https://www.swapi.tech/api/starships/9/');
    let json = await response.json();
    return json
}

const logStarWars = async () => {
    let response = await starWars();
    console.log(response);
}

// logStarWars();


// Exercise 4: Analyze ------------------------------------------------------------------------------

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// A: will log 'calling', wait 2 seconds and then log 'resolved'.