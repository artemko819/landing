import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function TestmonialItems({ testmonials }) {
    const testmonial = (
        testmonials.map(({ avatar, name, review }, index) => {
            return (
                <SwiperSlide key={index} >
                    <article className="testmonial">
                        <div className="client__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="client__text">
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                                {review}
                            </small>
                        </div>
                    </article>
                </SwiperSlide>
            )
        })
    )

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                {testmonial}
            </Swiper>
        </>
    )
}

export default TestmonialItems