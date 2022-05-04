import React from 'react'

function PortfolioItem({items}) {
  const item = (
    items.map((item, index) => {
      return (
        <article key={index} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={item.img} alt="1" />
          </div>
          <h3>{item.text}</h3>
          <a href={item.git} className='btn'>Github</a>
          <a href={item.demo} className='btn btn-primary'>Live Demo</a>
        </article>
      )
    })
  )
  return (
    <>
      {item}
    </>
  )
}

export default PortfolioItem