import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
function Nav() {
  return (
   
    <nav>
     <a href='#'><FaHome/></a>
     <a href='#about'><AiOutlineUser/></a>
     <a href='#experience'><BiBook/></a>
     <a href='#services'><RiServiceLine/></a>
     <a href='#contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav