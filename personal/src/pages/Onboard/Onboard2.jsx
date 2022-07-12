import React from 'react'
import { Signup, Login } from '../../components';
import { Register, Hero} from '../../containers';

const Onboard2 = () => {
  return (
    <div style={{paddingTop:"4rem"}}>
        <Register compo={<Signup/>}/>
    </div>
  )
}

export default Onboard2