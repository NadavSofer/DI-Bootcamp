import { useState, useEffect } from "react"
import User from './User'

const Users = props => {

    const [arr, setArr] = useState([])

    useEffect(()=> {
        handleClick()
    },[])

    const handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => {
            setArr(data)
        })
    }

    return (
        <div>
            <button onClick={handleClick}>render</button>
        {
            arr.map(item => {
                return <User robotInfo={item} key={item.id}/>
            })
        }
        </div>
    )
}


export default Users