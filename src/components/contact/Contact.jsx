import React from 'react'
import './Contact.css'

import {MdAttachEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yx3ed4j', 'template_02ssnpx', form.current, 'XoHA5wa3nqOdvFb3O')
    e.target.reset();
      
  };

  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>


     <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummygenerator@gmail.com</h5>
            <a href="mailto:dummygenerator@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Instagram UserName</h5>
            <a href="https://instagram.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=7986842162" target='_blank'>Send a message</a>
          </article>

        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <input type="text" name='subject' placeholder='Subject of the mail' required/>
          <textarea name="message" rows="7"  placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


     </div>
    </section>
  )
}
