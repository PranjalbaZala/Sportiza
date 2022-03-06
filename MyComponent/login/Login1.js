import React, {useState} from 'react'
import './Login.css';
import axios from "axios"

//import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

export default function Login1() {

    const [ user, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/Login1", user)
        .then(res => {
            alert(res.data.message)
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  placeholder="Enter your Password" onChange={ handleChange }></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}
