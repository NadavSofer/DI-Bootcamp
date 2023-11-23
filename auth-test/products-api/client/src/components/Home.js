import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { appContext } from '../App'
import {jwt_decode} from 'jwt-decode'
const Home = (props) => {
    const {token} = useContext(appContext);

    useEffect(()=>{
        // if (token) console.log(token);
        // const decode = jwt_decode(token.token);
        // console.log(decode.id, decode.email);

        fetch('/api/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=> {
            console.log(err);
        })
    },[])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home