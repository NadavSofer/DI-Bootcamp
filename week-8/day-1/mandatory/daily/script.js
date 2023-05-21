const form = document.forms[0]

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click' , (e) => {
    e.preventDefault();

    const words = []

    for (input of form.getElementsByTagName('input')){
        input.value = input.value.replaceAll(" " , "")
        if(input.value.length >= 3){
            words.push(input.value)
        }
    }
    sentence = `${words[2]} jumped in the ${words[1]} ${words[0]} and gone with the ${words[3]} in ${words[4]}.`
    let span = document.getElementById('story');
    span.innerText = sentence;

})

