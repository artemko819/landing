import React from 'react'
import AboutCard from './AboutCard/AboutCard'

function AboutContent(props) {
    return (
        <div className="about__content">
            <div className="about__cards">
                <AboutCard cards={props.cards}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae error,
                sit dicta voluptate harum dignissimos sequi, illum quaerat eaque veritatis
                soluta deserunt eius placeat. Vitae quas dicta libero molestias?
            </p>

            <a href="#contact" className='btn btn-primary'> Let`s Talk</a>
        </div>
    )
}

export default AboutContent