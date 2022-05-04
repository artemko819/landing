import React from 'react'
import Title from '../Hoc/Title'
import { testmonials } from '../util/testmonials'
import TestmonialItems from './TestmonialItems/TestmonialItems'
import './testmonials.css'
function Testmonials() {
  return (
    <section id='testmonials'>
      <Title header={'Rewiew from client'}
             subHeader={'Testmonials'}
      />

      <div className="container testmonials__container">
        <TestmonialItems testmonials={testmonials}/>
      </div>

    </section>
  )
}

export default Testmonials