import { useContext } from "react"
import { AppContext } from "../App"
const SubName = props => {
    const {setName, setCount} = useContext(AppContext)
    return (
        <div>
            <input onChange={(e)=> setName(e.target.value)}/>
            <input type="number" min={0} onChange={(e)=> setCount(e.target.value)}/>
        </div>
        
    )
}

export default SubName