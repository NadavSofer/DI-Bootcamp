const greeting = (name) => {
    console.log(`Hello, ${name}.`);
}

const sayBye = name => {
    console.log(`bye, ${name}.`);
}

module.exports = {
    greeting,
    sayBye: sayBye
    //or just greeting if the key and function name are the same
}

