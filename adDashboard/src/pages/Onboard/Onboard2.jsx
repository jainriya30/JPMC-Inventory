import React from 'react'
import { Signup, Login,Navbar2,Footer2 } from '../../components';
import { Register, Hero} from '../../containers';

const Onboard2 = () => {
  return (
    <>
    <Navbar2/>
    <div style={{paddingTop:"4rem"}}>
        <Register compo={<Signup/>}/>
    </div>
    <Footer2/>
    </>
  )
}

export default Onboard2