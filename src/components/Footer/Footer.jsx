import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'

function Footer() {
  return (
    <footer>
      <a href='' className='footer__logo'>Moi</a>
      <ul className='pernalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__social'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://twitter.com'><GrTwitter/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        
      </div>
    </footer>
  )
}

export default Footer