let fs = require('fs');
// Exercise 1 : Reading From A File In Node.JS ------------------------------------------------------

fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

// Exercise 2 part 1 : Writing Files With Node JS ---------------------------------------------------

let newContent = "this is definitely a thing";

fs.writeFile('exe2-2.txt', newContent, err =>{
    if (err) {
        console.log(err);
        return
    }
});

// Exercise 2 part 2 : Appending Files With Node JS ---------------------------------------------------

const appendingContent = '!'

fs.appendFile('exe2.txt', appendingContent, err => {
    if (err) {
        console.log(err);
        return
    }
})

// Exercise 2 part 3 : Deleting Files With Node JS ---------------------------------------------------

fs.unlink('exe2-2.txt', err => {
    console.log('file deleted');
})