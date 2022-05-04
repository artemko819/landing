import React from 'react'

function ContactOption({ items }) {
    const options = (
        items.map(({ icon, header, subHeader, message, link },index) => {
            return (
                <article key={index} className='contact__option'>
                    {icon}
                    <h4>{header}</h4>
                    <h5>{subHeader}</h5>
                    <a href={link}>{message}</a>
                </article>
            )
        })
    )
    return (
        <>
            {options}
        </>
    )
}

export default ContactOption