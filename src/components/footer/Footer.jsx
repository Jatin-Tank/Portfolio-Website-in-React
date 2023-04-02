import React from 'react'
import './Footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'



export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>JATIN TANK</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className="footer__socials">
    <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><BsGithub/></a>
      <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
      <a href="https://leetcode.com" target="_blank"><SiLeetcode/></a>
    </div>

    <div className="footer__copyright">
      <small> &copy; JATIN TANK. All rights reserved.</small>
    </div>
    </footer>
  )
}
