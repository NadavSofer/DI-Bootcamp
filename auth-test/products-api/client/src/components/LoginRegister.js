import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Box, TextField, Button } from '@mui/material'
import { appContext } from '../App'

function LoginRegister(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMessage] = useState('');
    const Navigate = useNavigate();

    const {setToken} = useContext(appContext);

    const handleAction = async () =>{
        if (props.title === 'Register'){
            try {
                const response = await axios.post('/users/register', {
                    email,
                    password,
                })
                console.log(response.data);
                if(response.status === 200){
                    setMessage('')
                    Navigate('/login')
                }
                
            } catch (error) {
                setMessage(error.response.data.msg)
            }
        }
        else{
            try {
                const response = await axios.post('/users/login', {
                    email,
                    password,
                })
                console.log(response.data);
                if(response.status === 200){
                    setMessage('')
                    setToken(response.data)
                    Navigate('/')
                }
                
            } catch (error) {
                setMessage(error.response.data.msg)
            }
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
                <TextField
                sx={{m:1}}
                id='email'
                type='email'
                label='enter email'
                variant='outlined'
                onChange={e=> setEmail(e.target.value)}
                />

                <TextField
                sx={{m:1}}
                id='password'
                type='password'
                label='enter password'
                variant='outlined'
                onChange={e=> setPassword(e.target.value)}
                />
            </Box>
            <Button variant='contained' onClick={handleAction}>{props.title}</Button>
            <div>
                <p>
                    {msg}
                </p>
            </div>
        </div>
    )
}

export default LoginRegister