import React from 'react'

class CounterClass extends React.Component {
    constructor(){
        super()
        // this.count = 0
        this.state = {
            count: 0
        }
        console.log(1, 'constructor');
    }

    handleClick = () => {
        this.setState ({count: this.state.count + 1})
        // this.count++
        // console.log(this.count);
        // this.forceUpdate()
        
    }

    // componentDidMount = () => {
    //     console.log(3, 'componentDidMount');
    // }

    // componentDidUpdate = () => {
    //     console.log('re-render', this.state.count);
    // }
    

    render(){
        console.log(2, 'render');
        return (
            <div>
                <h1>counter:</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default CounterClass