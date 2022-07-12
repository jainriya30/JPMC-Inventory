import React from 'react';
import{AiOutlineHome , AiOutlineUser, AiOutlineMessage} from'react-icons/ai';
import{FiDownload}from'react-icons/fi';
import {MdWorkOutline} from 'react-icons/md';
import {Link} from'react-router-dom';
import {SiAtom} from 'react-icons/si';
import './Navbar.scss';

const Navbar2 = () => {
  return (<>
      <nav className='app__navbar'>
        {/* Nvabr-Bigscreen */}
        <div className='app__navbar-logo'>
          <img src="https://www.stjudechild.org/images/logo.png" alt="logo" />
        </div>
        <ul className='app__navbar-links'>
        <Link to='/' className='links'>
        <li  className='app__flex p-text' >
            <a href='#home'>Home</a>
        </li>
        </Link>
          {['about'].map((item)=>(
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <Link to='/login' className='links'>
        <a href='#connect' id='Connect' >Sign In</a>
        </Link>
      </nav>
    {/* Navbar small screen */}
    <div className="app__navbar-float">
            <ul>
              <a href='#'><AiOutlineHome/></a>
              <a href='#about'><AiOutlineUser/></a>
              {/* <a href='#contact'><AiOutlineMessage/></a> */}
            </ul>
    </div>
    </>
    )
}

export default Navbar2