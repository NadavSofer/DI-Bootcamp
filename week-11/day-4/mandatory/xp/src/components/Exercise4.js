import React, { useEffect } from 'react';
const Exercise4 = props => {

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://webhook.site/e198add8-819b-4e4b-8dde-8ef3debb9ba5', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27
            })
        })
        console.log(data)
    }
}

export default Exercise4