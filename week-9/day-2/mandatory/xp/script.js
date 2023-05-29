// Exercise 1 : Comparison --------------------------------------------------------------------------
const compareToTen = num => {
    return new Promise((yep, nope)=> {
        num < 10 ? yep('yep') : nope('nope')
    })
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//Exercise 2 : Promises -----------------------------------------------------------------------------

const in_a_bit = new Promise((yep, nope) => {
    setTimeout(()=> {
        yep('success');
    }, 4000)
})

in_a_bit
.then(res => console.log(res))
.catch(error => console.log('Ooops something went wrong.'))


//Exercise 3 : Resolve & Reject ---------------------------------------------------------------------

const promiseResolve = Promise.resolve(3);

promise.then(result => {
    console.log(result);
});

const promiseReject = Promise.reject("Boo!");

promise.catch(error => {
    console.log(error); 
});
