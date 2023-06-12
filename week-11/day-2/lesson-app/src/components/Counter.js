import { useState, useEffect } from "react"
const Counter = props => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    
    useEffect(()=> {
        console.log(name);
        console.log(count);
    },[name, count]) // <--- this is dependencies for whatever is in the function

    const handleClick = () => {
        setCount(count+1)
        
    }

    return (
        <div>
            <h1>counter:</h1>
            <h2>{count}</h2>
            
            <button onClick={handleClick}>Add</button>
            <h2>{name}</h2>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        </div>
    )
}

export default Counter