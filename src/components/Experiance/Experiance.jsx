import React from 'react'
import Title from '../Hoc/Title'
import { backSkils, frontSkils } from '../util/experiance'
import ExperianceDetails from './ExperianceDetails/ExperianceDetails'
import './experiance.css'


function Experiance() {
  return (
    <section id='experiance'>
       <Title header={'What Skills I Have'}
              subHeader={'My Experiance'}
      />
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development </h3>
          <div className="experiance__content">
              <ExperianceDetails skils={frontSkils}/>
          </div>
        </div>
        <div className="experiance__backend">
            <h3>Backend Development </h3>
            <div className="experiance__content">
              <ExperianceDetails skils={backSkils}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance