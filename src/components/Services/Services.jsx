import React from 'react'
import Title from '../Hoc/Title'
import Service from './Service/Service'
import './services.css'
function Services() {
  return (
    <section id='services'>
      <Title header={'What I Offer'}
             subHeader={'Services'}
      />  
      <div className='container services__container'>
        <Service headerText={'UI/UX Designer'}/>
        <Service headerText={'Web Development'}/>
        <Service headerText={'Content Creation'}/>
      </div>
    </section>
  )
}

export default Services