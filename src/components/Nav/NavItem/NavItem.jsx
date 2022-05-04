import React from 'react'

function NavItem({linksIcons,activeNav,setActiveNav}) {
  const nav = (
    <ul>
      {linksIcons.map(linkIcon =>
        (<li key={linkIcon.id}>
          <a className={activeNav === linkIcon.link ? 'active' : ''}
            onClick={() => setActiveNav(linkIcon.link)}
            href={linkIcon.link}
          >{linkIcon.iconComponent}</a>
        </li>)
      )
      }
    </ul>
  )
  return (
   <>
    {nav}
   </>
  )
}

export default NavItem