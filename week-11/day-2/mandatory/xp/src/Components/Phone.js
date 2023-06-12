import React from 'react'
class Phone extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }

    changeColor = () => {
        this.setState({color:'yellow'})
    }

    render(){
        return(
            <div>
                <h2>My phone is a {this.state.brand}</h2>
                <h3>it is a {this.state.color} {this.state.model} from {this.state.year}</h3>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Phone