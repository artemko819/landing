import React from 'react'

function AboutCard({cards}) {
    const card = (
        cards.map((card,index) => {
            return (
                <article key={index} className="about__card">
                    {card.icon}
                    <h5>{card.header}</h5>
                    <small>{card.text}</small>
                </article>
            )
        })
    )
    return (
        <>
            {card}
        </>
    )
}

export default AboutCard