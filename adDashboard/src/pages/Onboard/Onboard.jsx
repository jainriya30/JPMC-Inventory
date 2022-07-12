import React from 'react'
import { Signup, Login, Navbar2,Footer2 } from '../../components';
import { Register, Hero} from '../../containers';

const Onboard = () => {
  return (
    <>
    <Navbar2 />
    <div style={{paddingTop:"4rem"}}>
        <Register compo={<Login/>}/>
    </div>
    <Footer2 />
    </>
  )
}

export default Onboard