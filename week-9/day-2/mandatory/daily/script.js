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

const toJs  = arr => {
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
    return new Promise((yep,nope) => {
        let out = []
        for (let letter of input) {
            if (obj.hasOwnProperty(letter)) {
                    const element1 = obj[letter];
                    out.push(element1)
            } else{
                nope('this character is not in morse code')
            }
        }
        yep(out)
    })
}

const joinWords = arr => {
    let out = arr.join()
    return out
} 

toJs(morse)
.then(toJs_res => {
    return toMorse(toJs_res)
})
.then(toMorse_res => {
    console.log(joinWords(toMorse_res));
})