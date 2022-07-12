import React, { useState } from 'react';
import './Signup.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import k from "../../constants.json";

const Signup = () => {
    const [email,setEmail] = useState('');
    const [name,setName]  = useState('');
    const [password,setPassword] = useState('');
    const [ confirmPassword,setConfirmPassword] = useState('');
    const [phone,setPhone]=useState(null);
    const [region,setRegion]=useState('');
    const [staffId,setStaffId]=useState('')
    const [inventoryId,setInventoryId]=useState('');
    const [type,setType] = useState("STAFF")

    const signUp = async(e)=>{
        e.preventDefault();
        const user = {
            email,
            name,
            password,
            confirmPassword,
            phone,
            region,
            staffId,
            inventoryId,
            type
        }
        
        const res = await axios.post(k.API+"auth/signup",user)
        
        localStorage.setItem("userID", res.data.userID);
        localStorage.setItem("token", res.data.token);
        window.location="/login"
    }
    return (
        <div className="app__signup">
            <form action="" onSubmit={signUp}>
            <h3>Signup Form</h3>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className=''/>
                </div>
                <div className="form__group">
                    <label htmlFor="email">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="name" className=''/>
                </div>
                <div className="form__group">
                    <label htmlFor="email">Phone</label>
                    <input type="Number" min="100000000"
                    max = "9999999999" onChange={(e)=>{setPhone(e.target.value)}} className=''/>
                </div>
                <div className="form__group">
                    <label htmlFor="email">Region</label>
                    <input type="text" className='' onChange={(e)=>{setRegion(e.target.value)}}/>
                </div>
                <div className="form__group">
                    <label htmlFor="email">Staff Id</label>
                    <input type="text" className='' onChange={(e)=>{setStaffId(e.target.value)}}/>
                </div>
                {/* <div className="form__group">
                    <label htmlFor="email">Inventory Id</label>
                    <input type="text" className=''  onChange={(e)=>{setInventoryId(e.target.value)}} />
                </div> */}
                <div>
                    <label htmlFor='type'> Admin </label>
                       <input type="radio" name='type' onClick={(e)=>setType("ADMIN")} />
                    <label htmlFor='type'> Staff </label>
                       <input type="radio" name='type' onClick={(e)=>setType("STAFF")} />
                    
                </div>
    
                <div className="form__group">
                    <label htmlFor="email">Password</label>
                    <input type="password" className=''  onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
                <div className="form__group">
                    <label htmlFor="email">Confirm Password</label>
                    <input type="password" className=''  onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                </div>
                <button type='submit'>Submit</button>
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