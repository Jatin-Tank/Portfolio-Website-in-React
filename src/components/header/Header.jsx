import React from 'react'
import './Header.css'

import CTA from './CTA'
// Change the below link for your main image
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Jatin Tank</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Dowm</a>
      </div>
    </header>
  )
}
