import React from 'react'

function ExperianceDetails({skils}) {
    const details = (
        skils.map((skil) => {
            return (
                <article key={skil.text} className='experiance__details'>
                    <div className='icon'>
                        {skil.icon}
                    </div>
                    <div>
                        <h4>{skil.text}</h4>
                        <small className='text-light'>{skil.desc}</small>
                    </div>
                </article>
            )
        })
    )
    return (
        <>
            {details}
        </>
    )
}

export default ExperianceDetails