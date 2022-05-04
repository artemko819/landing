import React from 'react'
import { linksIcons } from '../util/path'
import { socialLinks } from '../util/socialLinks'
import './footer.css'
import FooterLinks from './FooterLinks/FooterLinks'
import FooterSocial from './FooterSocial/FooterSocial'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>
        MASHA SITE PORTFOLIO
      </a>
     <FooterLinks links={linksIcons}/>
     <FooterSocial links={socialLinks}/>
    </footer>
  )
}

export default Footer