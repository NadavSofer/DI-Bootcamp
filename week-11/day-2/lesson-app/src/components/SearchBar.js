const SearchBar = props => {
    const {handleChange} = props
    return (
        <div>
            <input type='text' placeholder='search' onChange={(e)=>handleChange(e)}></input>
        </div>
    )
}

export default SearchBar