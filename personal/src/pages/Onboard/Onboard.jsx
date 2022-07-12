import React from 'react'
import { Signup, Login } from '../../components';
import { Register, Hero} from '../../containers';

const Onboard = () => {
  return (
    <div style={{paddingTop:"4rem"}}>
        <Register compo={<Login/>}/>
    </div>
  )
}

export default Onboard