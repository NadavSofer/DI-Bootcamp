const data = require('../data.json')
const PostList = props => {
    return (
        <>
            <h1>title</h1>
            <>
                {
                data.map(item=>{
                    return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                    )
                })
                }
            </>
        </>
    )
}

export default PostList