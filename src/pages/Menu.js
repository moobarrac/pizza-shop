import React from 'react'
// import MenuBg from '../assests/menu-bg.jpg'
import '../styles/menu.css'
import { MenuList } from '../helper/menulist'
//  style={{backgroundImage: `url(${MenuBg})`}}
function Menu() {
  return (
    <section className='menu'>
      <div className="menulist">
        {MenuList.map((item, index) => {
          const {name, price, img} = item
          return <div className="menu-item" key={index}>
            <div className="menu-img">
              <img src={img} alt={name} />
            </div>
            <h1>{name}</h1>
            <p>#{price}</p>
          </div>
        })}
      </div>
    </section>
  )
}

export default Menu
