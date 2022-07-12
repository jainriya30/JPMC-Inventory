import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
     <div id="home" className='app__header'>
    <div>
      <div className="app__header-title">
        <p className='head2-text'>Welcome to,</p>
        <h1 className='head2-text'>St. Judes India <br/> ChildCare Centre</h1>
      </div>
      <div className="app__header-title">
        <p className='head2-text'>A home away from home
for underprivileged families during their child's<br/>
treatment for cancer</p>
      </div>
    </div>
    <div 
    className='app__header-img'>
      <img src="https://www.stjudechild.org/images/resource/For%20circular%20image%2001.jpg" />
    </div>
  </div>

    <div className='app__about'>
    <h2 id='about'>About Us</h2>
    
  </div>
  <div className='app__header'>
     <div className='app__header-img2'>
      <img src="https://www.stjudechild.org/images/resource/For%20circular%20image%2001.jpg" />
    </div>
    <div>
      <div className="app__header-title">
        <p className='head2-text'>
            Holistic care for families coping with a child's cancer treatment Having a child diagnosed with cancer is  <br/> one of the most traumatic events that can happen to a family and may cause a significant emotional and  <br/> financial burden. St Judes provides a holistic care model that looks after every need of the  <br/> child and parent.</p>
      </div>
      <div className="app__header-title">
        <p className='head2-text'>A home away from home
for underprivileged families during their child's<br/>
treatment for cancer</p>
      </div>
    </div>
    </div>

    </>
  )
}

export default Hero