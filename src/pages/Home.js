import React from 'react'
import {Link} from 'react-router-dom'
import HomeBg from '../assests/home-bg.jpg'
import '../styles/home.css'

function Home() {
  return (
    <section className="home" style={{backgroundImage: `url(${HomeBg})`}}>
      <div className="home-content">
        <h1>Moobarrac's Pizza</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, eveniet?</p>
        <Link to='/menu'>
        <button className="order">
          Order Now
        </button>
      </Link>
      </div>
      
    </section>
  )
}

export default Home
