import '../Exercise4.css'

const Exercise4 = () => {

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
        <>
            {/* <h1 style={{color:'red', backgroundColor: 'lightblue'}}>title</h1> */}
            <h1 style={style_header}>title</h1>
            <p className='para'>paragraph</p>
            <a src='#'>link</a>
            <form>
                <input type="text" placeholder="input"></input>
                <button type="submit">submit</button>
            </form>
            <ul>
                <li>thing1</li>
                <li>thing2</li>
                <li>thing3</li>
            </ul>
        </>
    )
}

export default Exercise4 