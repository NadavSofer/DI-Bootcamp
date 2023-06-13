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

    componentDidUpdate  = () => {
        console.log("after update")
    }

    shouldComponentUpdate = () => {
        return true
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate")
    }

    changeColor = () => {
        this.setState({favoriteColor:'blue'})
    }

    changeShow = () => {
        this.setState({show: false})
    }

    render(){
        return(
            <div>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
                <button onClick={this.changeColor}>Change Color</button>
                <br/>
                { this.state.show && <Child/>}
                
                <button onClick={this.changeShow}>delete header</button>
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