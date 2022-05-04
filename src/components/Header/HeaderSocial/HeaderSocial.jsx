import React from 'react'
function HeaderSocial({linksObject}) {
  const link= (
    linksObject.map((link) => {
      return <a key={link.link} href={link.link} target='_blank' rel="noopener noreferrer">{link.iconComponent}</a>
    })
  )
  return (
    <div className='header_socials'>
      {link}
    </div>
  )
}

export default HeaderSocial