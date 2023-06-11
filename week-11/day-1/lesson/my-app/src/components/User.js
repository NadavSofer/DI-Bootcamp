const User = (props) => {
    const {robotInfo} = props
    const {name, email, id} = robotInfo
    return (
        <div>
            <img className="App-logo" src={`https://robohash.org/${id}`}/>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    )
}

export default User