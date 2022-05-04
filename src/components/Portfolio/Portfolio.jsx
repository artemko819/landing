import React from 'react'
import Title from '../Hoc/Title'
import { portfolioItems } from '../util/portfolio'

import PortfolioItem from './PortfolioItem/PortfolioItem'
import './portfolio.css'
function Portfolio() {
  return (
    <section id='portfolio'>
      <Title header={'My recent work'}
             subHeader={'Portfolio'}
      />

      <div className="container portfolio__container">
        <PortfolioItem items={portfolioItems}/>
      </div>

    </section>
  )
}

export default Portfolio