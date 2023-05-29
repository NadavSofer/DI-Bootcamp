// try and catch

// console.log('before');

// function x() {

//     try {
//         a;
//     } catch (error) {
// console.log(error.message);
// console.log(error.name);
// console.log(error.stack);
//         throw new Error('error in x function')
//     }
// }

// try {
//     x()
// } catch (error) {
//     console.log(error);
// }

// console.log('after');


// promises ----------------------------------------------------------------

// bad code -----------------------> x will be undefined

// function getX() {
//     setTimeout(()=> {
//         return 5;
//     },2000)
// }

// function getY() {
//     return 5;
// }

// function getXY() {
//     let x = getX();
//     let y = getY();
//     console.log(x+y);
// }

// getXY();

// bad code -----------------------> old way of doing promises

// function getX(callback) {
//     console.log('waiting for x');
//     setTimeout(()=> {
//         console.log('getting x');
//         callback(5)
//     },2000)
// }

// function getY(callback) {
//     console.log('getting y');
//     callback(6)
// }

// function getXY() {
//     getX((x)=>{
//         getY((y)=>{
//             console.log(x+y);
//         })
//     })
// }

// getXY();

// promise -----------------------

// const p = new Promise((resolve, reject)=>{
//     resolve('resolved promise');
// })
// console.log(p);

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return (coin < 2) ? 
//             (coin === 3) ? 'head' : 'tail': 'side'
// }

// const flipCoin = new Promise((yep, nope)=>{
//         const flipRes = flip()
//         if (flipRes == 'head' || flipRes == 'tail'){
//             yep(flipRes)
//         }
//         else{
//             nope(flipRes)
//         }
//     })

//     console.log(flipCoin);
//     flipCoin
//     .then((res)=>{
//         console.log('resolve', res);
//     })
//     .catch((e)=>{
//         console.log( 'reject', e);
//     })


//-----------------------------------------------------------------------------




//-----------------------------------------------------------------------------
const parseAPI = API => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        let map1 = data.map(element => element)
        x(map1)
    });
};


let users = parseAPI('https://jsonplaceholder.typicode.com/users')

function x(arr){
    console.log(arr);
}
