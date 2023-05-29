// 1rst Daily Challenge -----------------------------------------------------------------------------

// const  makeAllCaps = arr => {
//     return new Promise((yep, nope) => {
//         let out = []
//         if (arr.every(element => typeof element ==='string')) {

//             arr.forEach(element1 => {
//                 out.push(element1.toUpperCase())
//             });
//             yep(out)
//         }
//         else {
//             nope('NaN detected')
//         }
//     })
// }
// let list = ['thing', 'athing1', 'thing2', 'thing3', 'thing4']
// let test = makeAllCaps(list)

// test
// .then((res => {
//     console.log(res);
// }))
// .catch((e => {
//     console.log(e);
// }))

// function sortWords(arr) {
//     return new Promise((yep, nope) => {
//         if (arr.length > 4) {
//             yep(arr.sort())
//         }
//         else{
//             nope('list too short')
//         }
//     })
// }

// let test2 = sortWords(list)

// test2
// .then((res => {
//     console.log(res);
// }))
// .catch((e => {
//     console.log(e);
// }))

// 2nd Daily Challenge ------------------------------------------------------------------------------

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

function toJs(arr) {
    return new Promise((yep, nope) => {
        if (arr.length > 0) {
            yep(JSON.parse(arr))
        }
        else {
            nope('string empty')
        }

    })
};

const toMorse = obj => {
    let input = prompt('input a word');
    let out = []
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        for (const j in element) {
            if (Object.hasOwnProperty.call(element, j)) {
                const element1 = obj[element];
                out.push(element1)
            }
            else {
                throw new Error('this character is not in morse code')
            }
        }

    }
    return out
}

const joinWords = arr => {
    let out = arr.join()
    return out
}

toMorse(morse, toJs)
    .then(result => {
        const joinedWords = joinWords(result);
        console.log(joinedWords);
    })
    .catch(error => {
        console.error(error);
    });