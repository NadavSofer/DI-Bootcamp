// async / await 

function simpleAsync() {
    return new Promise((yep, nope) =>{
        yep('1')
    })
}

async function simpleAsync2() {
    return '1'
}

// simpleAsync()
// .then(res => {
//     console.log(res);
// })

// simpleAsync2()
// .then(res => {
//     console.log(res);
// })


function returnPromise() {
    return new Promise((yep,nope) => {
        setTimeout(()=> {
            console.log('executing code...');
            yep('data')
        }, 3000)
    })
}

async function exe() {
    let name = 'john'
    let p = await returnPromise()
    console.log(p);
    console.log(name);
}

// exe()


async function userAsync(api) {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);;
}

// userAsync('https://jsonplaceholder.typicode.com/users')



// -!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  don't use forEach in Async functions
// don't do this


const Timeout = async (milliseconds, id) =>{
    await new Promise((yep, nope) =>{
        setTimeout(()=>{
            console.log(id, 'done!');
            yep()
        }, milliseconds)
        
    })
}

async function x() {
    console.log('before');
['first', 'second', 'third'].forEach(async item => {
    await Timeout(2000, item)
})
    console.log('after');
}

// x()

const promise1 = new Promise((yep, nope) => {
    setTimeout(()=> {
        console.log('1');
    }, 2000)
})

const promise2 = new Promise((yep, nope) => {
    setTimeout(()=> {
        console.log('2');
    }, 2000)
})

const promise3 = new Promise((yep, nope) => {
    setTimeout(()=> {
        console.log('3');
    }, 2000)
})


const data = async () => {
    try {
        let res = await Promise.all([promise1, promise2, promise3])
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
// data()

//---------------------------------------------------------------------------------------------------