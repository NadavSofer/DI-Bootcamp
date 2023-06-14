import { useParams } from "react-router-dom"

const Contact = props => {
    const Params = useParams()
    console.log(Params);
    return (
        <h1>Contact</h1>
    )
}

export default Contact