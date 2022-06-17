import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscNewFolder} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
     <div className='about__me'>
       <div className='about__me-image'>
       <img src={ME} alt='About Image'/>
       </div>
     </div>
     <div className='about__content'>
      <div className='about__cards'>
       <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>1 year working</small>
       </article>
       
       <article className='about__card'>
        <VscNewFolder className='about__icon'/>
        <h5>Projects</h5>
        <small>20+ Completed </small>
       </article>
      </div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
     </div>
    </div>

    </section>
  )
}

export default About