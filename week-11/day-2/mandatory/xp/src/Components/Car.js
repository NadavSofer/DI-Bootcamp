import React from 'react'
import Garage from './Garage'
class Car extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            color:'red'
        }
    }
    

    render(){
        const {carInfo} = this.props
        const {model} = carInfo
        return(
            <div>
                <h2>This car is a {this.state.color} {model}</h2>
                <Garage size='small'/>
            </div>
        )
    }

}

export default Car