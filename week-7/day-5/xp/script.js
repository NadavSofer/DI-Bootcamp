function playTheGame() {
    let start_input = confirm('would you like to play a game?');
    let counter = 0;

    while(counter < 3){
        if (start_input === true) {
            let game_input = prompt('enter a number between 1-10.');

            if (game_input == null || isNaN(game_input)){
                alert('Sorry Not a number, Goodbye.');
                counter++
            }

            else if (game_input > 10 || game_input < 0){
                alert('Sorry it’s not a good number, Goodbye.');
                counter++
            }

            else{
                let computerNumber = Math.floor(Math.random() * 11);
                let outcome = compareNumbers(game_input, computerNumber);

                if (outcome.includes('WINNER!')){
                    alert(outcome);
                    return
                }
                else {
                    alert(outcome);
                    counter++
                }
                
            }
        }
        else{
            alert('No problem, Goodbye.');
            return
        }
    }
    if (counter => 3) {
        alert('Out of chances');
        counter = 0;
    }
};

function compareNumbers(userNumber, computerNumber) {
    let comparing = userNumber > computerNumber ? `Your number is bigger then the computer’s, guess again \n Your number: ${userNumber} \n Computer number: ${computerNumber}`
    : userNumber < computerNumber ? `Your number is smaller then the computer’s, guess again \n Your number: ${userNumber} \n Computer number: ${computerNumber}`
    : `WINNER! \n The number was ${userNumber}`;
    return comparing;
}