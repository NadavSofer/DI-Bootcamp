import React from 'react'
class Color extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favoriteColor: 'red',
            show: true
        }
    }
    componentDidMount = () => {
        setTimeout(()=>{
            this.setState({favoriteColor:'yellow'})
        },5000)
    }

    componentDidUpdate = () => {
        
    }

    shouldComponentUpdate = () => {
        return true
    }

    changeColor = () => {
        this.setState({favoriteColor:'blue'})
    }

    render(){
        return(
            <div>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick={this.changeColor}>Change Color</button>
                
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillUnmount = () => {
        alert('component unmounted')
    }
    
    render(){
        return(
            <header>
                <h2>Hello World!</h2>
            </header>
        )
    }
}

export {Color, Child}