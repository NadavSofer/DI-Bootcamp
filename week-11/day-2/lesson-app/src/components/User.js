const User = (props) => {
    const {robotInfo} = props
    const {name, email, id} = robotInfo
    return (
        <div>
            <img className="tc grow bg-light-blue br4 ma2 dib bw2 shadow-5" src={`https://robohash.org/${id}`}/>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}

export default User