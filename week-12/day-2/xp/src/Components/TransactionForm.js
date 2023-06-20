import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INSERT, UPDATE } from "../redux/actions";

const TransactionForm = props => {
    const [transaction,setTransaction] = useState({})
    const currentIndex = useSelector(state=> state.currentIndex)
    const list = useSelector(state=> state.transactions)

    const dispatch = useDispatch()

    useEffect(()=> {
        if (currentIndex !== -1) {
            const trx = list[currentIndex]
            setTransaction({
                accountNumber: trx.accountNumber|| '',
                FSC: trx.FSC|| '',
                name: trx.name|| '',
                amount: trx.amount|| ''
            })
        }
    },[currentIndex])

    const handleInputChange = (e) => {
        setTransaction({...transaction, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentIndex === -1) {
            dispatch(INSERT(transaction))
        }
        else{
            dispatch(UPDATE(transaction))
        }

        setTransaction({})
    }

    return (
        <div>
            <h2>Transaction List:</h2>
            <form style={{display:'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                accountNumber: <input name="accountNumber" 
                    onChange={handleInputChange}
                    placeholder="account number"
                    value={transaction.accountNumber}/>

                FSC: <input name="FSC" 
                    onChange={handleInputChange}
                    placeholder="FSC"
                    value={transaction.FSC}/>

                name: <input name="name" 
                    onChange={handleInputChange}
                    placeholder="name"
                    value={transaction.name}/>

                amount: <input name="amount" 
                    onChange={handleInputChange}
                    placeholder="amount"
                    value={transaction.amount}/>

                <input type="submit" value={currentIndex === -1 ? 'Submit' : 'Update'}/>
            </form>
        </div>
    )
}

export default TransactionForm