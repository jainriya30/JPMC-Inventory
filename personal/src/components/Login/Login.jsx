import React from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="app__login">
        <form action="">
        <h3>Login Form</h3>
            <div className="form__group">
                <label htmlFor="email">Email</label>
                <input type="email" className=''/>
            </div>
            <div className="form__group">
                <label htmlFor="password">Password</label>
                <input type="password" className=''/>
            </div>
            <div className="form__group">
                <label htmlFor="text">Location</label>
                <input type="text" className=''/>
            </div>
            <button>Submit</button>
            <div className="form__group">
                <label htmlFor="text">Don't have an account?</label>
                <Link to='/signup'>
                <a> SignUp</a>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Login