// import {useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { add, minus } from '../redux/actions';

const Counter = props => {
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
export default Counter