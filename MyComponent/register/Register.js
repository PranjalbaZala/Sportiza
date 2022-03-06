import React, {useState} from "react"
import "./Register.css"
import axios from "axios"

const Register = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/Register", user)
            alert("Registered Successfully")
        } 
        else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            <h1>Login</h1>
            <input type="text" name="name" placeholder="Your Name" onChange={ handleChange }></input>
            <input type="email" name="email" placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Register}>Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}
export default Register