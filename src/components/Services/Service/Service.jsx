import React from 'react'
import { serviceList } from '../../util/serviceList'
import ServiceListItem from './ServiceListItem/ServiceListItem'


function Service({headerText}) {
    return (
        <article className='service'>
            <div className="service__head">
                <h3>{headerText}</h3>
            </div>
            <ul className="service__list">
                <ServiceListItem items={serviceList} />
            </ul>
        </article>
    )
}

export default Service