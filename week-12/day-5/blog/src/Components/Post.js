import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
const blog = require('../blog.png')
const Post = props => {
    const {id} = useParams();
    const post = useSelector(state => state.posts[id-1]);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: 'delete_post', payload: id });
    };

    return (
        <div>
            <div className="post card" key={id}>
                <img src={blog} alt="pic"/>
                <div className="content">
                    <h3>{post.title}</h3>
                    <p style={{paddingBottom:'2rem'}}>{post.body}</p>
                </div>
            </div>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default Post