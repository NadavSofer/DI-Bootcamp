import React from 'react'
import User from './User'
import SearchBar from './SearchBar'

class UsersClass extends React.Component {
    constructor(){
        super()
        this.API = 'https://jsonplaceholder.typicode.com/users'
        this.state = {
            arr:[],
            search:''
        }
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => {
            this.setState({arr:data})
        })
    }

    handleChange = e => {
        this.setState({search:e.target.value})
    }

    componentDidMount = () => {
        this.getData()
    }

    render(){
        const{search} = this.state;

        const filtered = this.state.arr.filter(item=> {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })

        return (
            <div>
                <SearchBar handleChange={this.handleChange}/>
                {
                    filtered.map((item, i) => {
                        return <User robotInfo={item} key={i}/>
                    })
                }
                
            </div>
        )
    }
}


export default UsersClass