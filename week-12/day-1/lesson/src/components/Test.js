import { connect } from 'react-redux';
import { changePropTwo } from '../redux/actions'; 
const Test = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.changeTwo}>change title</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('test state=>' ,state);
    return {
        a: state.property_one,
        title: state.property_two
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    changeTwo: () => dispatch(changePropTwo('hello from test'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)