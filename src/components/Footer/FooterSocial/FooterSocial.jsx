import React from 'react'

function FooterSocial({links}) {
    const socialLinks = (
        links.map(({link,iconComponent},index)=>{
            return(
                <a key={index} href={link}>{iconComponent}</a>
            )
        })
    ) 
  return (
    <div className='footer__socials'>{socialLinks}</div>
  )
}

export default FooterSocial