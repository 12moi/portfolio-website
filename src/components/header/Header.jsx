import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocial from './Headersocial'
import ME from '../../assets/me.jpg'
function Header() {
  return (
    <header>
      <div className='container header_container'>
      <h5>Hello, I'm</h5>
      <h1>Moi Shadrack</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className='me'>
     <img src={ME} alt='me' />
      </div>
      <a href='#contact' className='scroll__downd'>Scroll Downd</a>
      </div>

    </header>
  )
}

export default Header