import React from 'react'
import Title from '../Hoc/Title'
import { cards } from '../util/cards'
import AboutContent from './AboutContent/AboutContent'
import AboutMe from './AboutMe/AboutMe'
import './about.css'

function About() {
  return (
    <section id='about'>
      <Title header={'Get To Know'}
             subHeader={'About Me'}
      />
      <div className="container about__container">
        <AboutMe />
        <AboutContent cards={cards} />
      </div>
    </section>
  )
}

export default About