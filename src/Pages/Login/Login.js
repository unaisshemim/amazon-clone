import React, { useState } from 'react'
import './login.scss'
import { Link, useHistory } from "react-router-dom";





function Login() {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const signin=(e)=>(
    e.preventDefault()
    
)

    return (
        <div className='login'>
            <Link to='/'>

            <img src="https://kfinancial.com/wp-content/uploads/2019/02/amazon-logo-vector-png-vector-png-free-amazon-logos-705.jpg" alt="" />
            </Link>
            <form className="login-container">
                <h1>Sign In</h1>
                <h5>email</h5>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <h5>password</h5>
                <input  value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" />
                <button  onClick={signin} type='submit'>Sign in</button>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button style={{backgroundColor:"darkGrey"}}>Create New Account</button>
            </form>
        </div>
    )
}

export default Login
