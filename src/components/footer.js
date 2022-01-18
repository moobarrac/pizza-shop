import React from 'react'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import '../styles/footer.css'

function Footer() {
  return (
    <section className='footer'>
      <div className="social-icon">
        <AiOutlineFacebook/>
        <AiOutlineWhatsApp/>
        <FaLinkedin/>
        <AiOutlineInstagram/>
      </div>
      <p> &copy; 2022 Moobarrac.io</p>
    </section>
  )
}

export default Footer
