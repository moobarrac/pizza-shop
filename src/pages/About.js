import React from 'react'
import AboutImg from '../assests/about.jpg'
import '../styles/about.css'

function About() {
  return (
    <section className='about'>
      <div className="about-img" style={{backgroundImage: `url(${AboutImg})`}}></div>
      <div className="about-info">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero in doloremque doloribus obcaecati. Reprehenderit inventore quae delectus repudiandae quod ullam cupiditate illo, rerum assumenda quia nobis exercitationem blanditiis, voluptatum facilis reiciendis tempore iure fugiat perferendis error. Iusto.
        </p>
      </div>
    </section>
  )
}

export default About
