let fs = require('fs');

fs.readFile('steps.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    stepCounter(data)
});


function stepCounter(str) {
    let totalCount = 0;
    let currentPosition = 0;

    for (const step of str) {

        if (step == '>') {
            currentPosition++
            totalCount++
        }
        else {
            totalCount++
            currentPosition--
        }

        if (currentPosition === -1) {
            console.log(totalCount);
        }
    }
    console.log(currentPosition);
}