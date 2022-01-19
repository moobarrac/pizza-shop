import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <section className='contact'>
      <div className="contact-form">
        <form>
          <div>
            <label htmlFor="name">Full name</label>
            <input type="text" name='name' placeholder='Enter full name'/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your email...' name='email'/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder='Enter message...' rows="6"></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
