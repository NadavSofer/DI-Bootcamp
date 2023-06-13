import React from 'react';

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    add = () => {
        this.setState({count:this.state.count+1})
    }

    render(){
        if (this.state.count > 5) {
            throw Error('crashed... number above 5')
        }
        return(
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.add}>add</button>
            </>
        )
    }
}

export default Counter