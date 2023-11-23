import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { appContext } from "../App";

export const Auth = props =>{
    const [redirect, setRedirect] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const verify = async () => {
            try {
                let response = await axios.get('users/token', {

                })
                if (response.status === 200) {
                    setRedirect(true)
                }
            } catch (error) {
                navigate('/login')
            }
        }
    })

    return redirect ? props.children : <h1>Unauthorized</h1>
}