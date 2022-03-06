import React,{useState} from 'react';
import './Adminlogin.css';
import axios from "axios";
import Navbar from '../Navbar';

import { useHistory } from 'react-router';

const AdminLogin = ({ setAdminUser}) => {
    const history = useHistory()

    const [ admin, setUser] = useState({
        email:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...admin,
            [name]: value
        })
    }

    const adminlogin = () => {
        axios.post("http://localhost:9002/Adminlogin", admin)
        .then(res => {
            alert(res.data.message)
            setAdminUser(res.data.admin)
            history.push("/Adminpage")
        })
    }

    return (
        <>
        <Navbar />
        <div className="login">
            <h1>Admin Login</h1>
            <input type="text" name="email" placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password"  placeholder="Enter your Password" onChange={ handleChange }></input>
            <div className="button" onClick={adminlogin}>Login</div>
        </div>
        </>
    )
}

export default AdminLogin;