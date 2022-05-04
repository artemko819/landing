import React from 'react'

function FooterLinks({ links }) {
    const linksFooter = (
        <ul className='pramarelinks'>
            {links.map(({ link, text }, index) => {
                return (
                    <li key={index}>
                        <a href={link}>{text}</a>
                    </li>
                )
            })}
        </ul>
    )
    return (
        <>
            {linksFooter}
        </>
    )
}

export default FooterLinks