import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vj9w8b9', 'template_gl1cfqb', form.current, 'llt8xd5VV0kMCfTju')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineMail className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>moishadrack@gmail.com</h5>
           <a href='mailto:moishadrack.com' target="_blank" className=''>Send a Message</a>
        </article>
        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
           <h4>LinkIn</h4>
           <h5>Moi Shadrack profile</h5>
           <a href='www.linkedin.com/in/moi-shadrack-8451a8227' target="_blank" className=''>Send a Message</a>
        </article>
        <article className='contact__option'>
          <FaWhatsappSquare className='contact__option-icon'/>
           <h4>WhatsApp</h4>
           <h5>Send me message via WhatsApp</h5>
           <a href='https://api.whatsapp.com/send?phone=+254743235319' target="_blank" className=''>Send a Message</a>
        </article>
        </div>
        {/* End of contact option */}

        <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="message" name='message'  rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primay'> Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact