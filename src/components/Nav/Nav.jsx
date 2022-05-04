import React, { useState, useEffect } from 'react'
import { linksIcons } from '../util/path'
import './nav.css'
 import NavItem from './NavItem/NavItem';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  useEffect(() => {
    window.addEventListener('scroll',()=>{  
      const valueScroll = window.scrollY;    
      if(valueScroll >=0 && valueScroll <=300 ){
        setActiveNav('#')
      }else if(valueScroll>650 && valueScroll<850){
        setActiveNav('#about')
      }else if(valueScroll>850 && valueScroll<1650){
        setActiveNav('#experiance')
      }else if(valueScroll>1650 && valueScroll<1950){
        setActiveNav('#services')
      } else if(valueScroll>2050 && valueScroll<2850){
        setActiveNav('#portfolio')
      }else if(valueScroll>2800 && valueScroll<3500){
        setActiveNav('#testmonials')
      }else if(valueScroll>3500 && valueScroll<4300){
        setActiveNav('#contact')
      }
    })    
  });
  return (
    <nav>
       <NavItem linksIcons={linksIcons}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
       />
    </nav>
  )
}

export default Nav