import { useContext } from "react"
import { AppContext } from "../App"
import SubName from "./SubName"
const Name = props => {
    const {name, count} = useContext(AppContext)
    return (
        <div>
            <h2>my name: {name}</h2>
            <h1>{count}</h1>
            <SubName/>
        </div>
    )
}

export default Name