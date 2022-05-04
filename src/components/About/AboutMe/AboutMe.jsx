import React from 'react'
import ME from '../../../assets/me-about.jpg'
function AboutMe() {
    return (
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="me" />
            </div>
        </div>
    )
}

export default AboutMe