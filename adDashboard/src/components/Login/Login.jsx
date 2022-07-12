import React,{useState} from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import k from "../../constants.json";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [region,setRegion] = useState('');
  const logIn=async(e)=>{
      e.preventDefault();
      const user = {
        email,
        password
      }
      const res = await axios.post(k.API+"auth/login",user)
      console.log(res.data);
        localStorage.setItem("userID", res.data.userID);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("region",region)
        window.location="/dashboard"
  }

  return (
    <div className="app__login">
        <form action="" onSubmit={logIn}>
        <h3>Login Form</h3>
        <div className="form__group">
                <label htmlFor="email">Email</label>
                <input type="email" className='' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form__group">
                <label htmlFor="email">Password</label>
                <input type="password" className='' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            {/* <div className="form__group">
                <label htmlFor="text">Region</label>
                <input type="text" className='' onChange={(e)=>{setRegion(e.target.value)}}/>
            </div> */}
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