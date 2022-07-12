import React from 'react'
/import { Link } from 'react-router-dom'/
import './Login.css'


export default function Login() {
    return (
        <form className="LoginPage">
            <div className="FormTitle"><b>LOGIN PAGE</b></div>

            <div className="PhoneNumber">
                <label for="inputPhone4" className="form-label">Email/Phone Number</label>
                <input type="text" className="form-control" id="inputPhone4"/>
            </div>
            <div className="Password">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
            </div>
        
            <div className="Button">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>

        </form>
    )
}