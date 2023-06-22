import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const blog = require('../blog.png')
const Home = props => {
    const posts = useSelector(state => state.posts);
    return (
        <div className="home">
            <h1 className="center">Home</h1>
            {
                posts.map((item, i)=> {
                    return (
                    <div className="post card" key={i}>
                        <img src={blog} alt="pic"/>
                        <div className="content">
                            <Link to={`/Post/${item.id}`}><h3>{item.title}</h3></Link>
                            <p>{item.body}</p>
                        </div>
                    </div>
                    )
                })
            }

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rerum eligendi saepe qui 
                ducimus dolores eveniet, reiciendis ab? Eligendi quos mollitia neque est enim sit debitis minus aliquam 
                praesentium ducimus, nostrum quia cum atque magnam consequuntur id voluptate 
                voluptatibus facilis architecto iure vel aperiam. Maiores cumque at fuga repellendus neque.
            </p>
            
        </div>
    )
}

export default Home