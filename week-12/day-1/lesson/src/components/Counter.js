// import {useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { add, minus } from '../redux/actions';

const Counter = props => {
    // const [count, setCount] = useState(0)
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(add())}>+</button>
            {count}
            <button onClick={() => dispatch(minus())}>-</button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//     add: () => dispatch(add()),
//     minus: () => dispatch(minus())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter