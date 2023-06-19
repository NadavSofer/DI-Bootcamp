import { useState } from "react";
import { connect } from "react-redux";
import { INSERT, UPDATE, UPDATE_INDEX, DELETE } from "../redux/actions";

const TransactionForm = props => {
const [transaction,setTransaction] = useState({
    accountNumber: '',
    FSC: 0,
    name: '',
    amount: 0
})

const handleInputChange = (e) => {
    const data = e.target.value;
    setTransaction({...transaction, [e.target.name]: data})
}

const handleSubmit = (e) => {
    e.preventDefault()
    props.add(transaction);
    console.log(props.info);
    
}

return (
    <div>
        <form style={{display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
            accountNumber: <input type="text" name="accountNumber" id="accountNumber" onChange={handleInputChange}/>
            FSC: <input type="text" name="FSC" id="FSC" onChange={handleInputChange}/>
            name: <input type="text" name="name" id="name" onChange={handleInputChange}/>
            amount: <input type="text" name="amount" id="amount" onChange={handleInputChange}/>
            <button type="submit">submit</button>
        </form>
    </div>
)

}

const mapStateToProps = state => {
    return {
        info: state.transactions
    }
}

const mapDispatchToProps = dispatch => {
    return {
    add: (payload) => dispatch(INSERT(payload)),
    update: (payload) => dispatch(UPDATE(payload)),
    update_index: (index) => dispatch(UPDATE_INDEX(index)),
    delete: (index) => dispatch(DELETE(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)