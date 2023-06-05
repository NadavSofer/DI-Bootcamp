const getData = async () =>{
    let url = await fetch('http://localhost:3000/test');
    let response = await url.json();
    return response
}

getData()
.then(res => {
    console.log(res);
})

