import { useDispatch, useSelector } from "react-redux";
import { DELETE, UPDATE_INDEX } from "../redux/actions";

const TransactionList = props => {
    const transactions = useSelector(state=> state.transactions)
    const dispatch = useDispatch()

    const transactionStyle = {border: 'solid 1px white', padding: '0.5rem'}
    return (
        <div>
            <hr/>
            <h2>Transaction List:</h2>
            <table>
                <tbody>
                    {
                        transactions.map((item, i)=>{
                            return (
                                <tr key={i}>
                                    <td style={transactionStyle}>{item.accountNumber}</td>
                                    <td style={transactionStyle}>{item.FSC}</td>
                                    <td style={transactionStyle}>{item.name}</td>
                                    <td style={transactionStyle}>{item.amount}</td>
                                    <td style={transactionStyle}><button onClick={() => dispatch(UPDATE_INDEX(i))}>Edit</button></td>
                                    <td style={transactionStyle}><button onClick={() => dispatch(DELETE(i))}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList