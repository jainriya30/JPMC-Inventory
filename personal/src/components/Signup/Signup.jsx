import React from 'react';
import './Signup.scss'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="app__signup">
        <form action="">
        <h3>Signup Form</h3>
            <div className="form__group">
                <label htmlFor="email">Email</label>
                <input type="email" className=''/>
            </div>
            <div className="form__group">
                <label htmlFor="email">Password</label>
                <input type="password" className=''/>
            </div>
            <div className="form__group">
                <label htmlFor="email">Confirm Password</label>
                <input type="password" className=''/>
            </div>
            <div className="form__group">
                <label htmlFor="text">Location</label>
                <input type="text" className=''/>
            </div>
            <button>Submit</button>
            <div className="form__group">
                <label htmlFor="text">Already have an account?</label>
                <Link to='/login'>
                <a> Login</a>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Signup