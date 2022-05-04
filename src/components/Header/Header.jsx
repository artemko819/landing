import React from 'react'
import { socialLinks } from '../util/socialLinks'
import CTA from './CTA/CTA'
import './header.css'
import HeaderIfo from './HeaderInfo/HeaderIfo'
import HeaderImage from './HeaderImage/HeaderImage'
import HeaderSocial from './HeaderSocial/HeaderSocial'
function Header() {
  return (
    <header id="#">
        <div className="container header__container">
            <HeaderIfo/>            
            <CTA/>
            <HeaderSocial linksObject={socialLinks}/>
            <HeaderImage/>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header