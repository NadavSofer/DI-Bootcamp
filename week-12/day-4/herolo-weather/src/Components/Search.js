import { useState } from 'react'
const data = require('../data.json')
const Search = props => {
    const [cities, setCities] = useState([])

    const searchValue = (e) => {
        const value = e.target.value;
        const key = 'NQEAKhQ1XOXI5L8d0fVIUoKgn4TboDJ2'
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${value}`)
        .then(res=> res.json())
        .then(data=> {
            setCities(data || [])
            console.log(cities);
            
        })
    }

    return (
        <div>
            <h2>Search:</h2>
            <input/>
            <div>
                {
                    data.map(item=> {
                        return (
                            <p>{item.LocalizedName}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search