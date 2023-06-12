import React from 'react'
class Events extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true
        }
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            alert(e.target.value)
        }
    }

    switchButton = e => {
        if (this.state.isToggleOn === false) {
            this.setState({isToggleOn:true})
        } 
        else{
            this.setState({isToggleOn:false})
        }
        console.log(this.state.isToggleOn);
    }

    render(){
        return (
            <div>
                <button onClick={clickMe} >don't click</button>
                <br/>
                <input onKeyDown={this.handleKeyDown} placeholder='press the ENTER key'></input>
                <br/>
                <button onClick={this.switchButton}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        )
    }
}

const clickMe = () => {
    alert('I was clicked!')
}

export default Events