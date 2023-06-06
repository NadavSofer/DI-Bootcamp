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
    let minusArray = [];

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
            minusArray.push(totalCount);
        }
    }
    console.log(currentPosition);
    console.log(`first time in left side is in: ${minusArray[0]}`);
}