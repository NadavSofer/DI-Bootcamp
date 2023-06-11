import React from 'react'
import './Hello.css'

const Hello = () => {
    const users = [
        {
            name: 'thing',
            email: 'thing@gmail.com',
            id: 1
        },
        {
            name: 'thing2',
            email: 'thing2@gmail.com',
            id: 2
        },
        {
            name: 'thing3',
            email: 'thing3@gmail.com',
            id: 3
        }
    ]
    const returnUsers = users.map(item => {
        return (
            <div key={item.id} style={{color:'red', backgroundColor: 'goldenrod'}}>
                <p className="test-p" id="test-p">{item.name} - <span>{item.email}</span></p> 
            </div>
        )
    })

    return (
        <div>
            <h1>Hello,</h1>
            <> 
                {returnUsers}
            </>
        </div>
    )
}

export default Hello