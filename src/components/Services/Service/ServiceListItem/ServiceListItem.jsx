import React from 'react'

function ServiceListItem({items}) {
  const listItem = (
    items.map((item, index) => {
      return (
        <li key={index}>
          {item.icon}
          <p>{item.text}</p>
        </li>
      )
    })
  )
  return (
    <>
      {listItem}
    </>
  )
}

export default ServiceListItem