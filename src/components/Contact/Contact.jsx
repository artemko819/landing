import React from 'react'
import Title from '../Hoc/Title'
import ContactOption from './ContactOption/ContactOption'
import { contactOptions } from '../util/contactOption'
import './contact.css'
import Form from './Form/Form'

function Contact() {
  return (
    <section id='contact'>
      <Title header={'Get In Thoch'}
             subHeader={'Contact Me'}
      />
      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption items={contactOptions}/>
        </div>
        <Form/>
      </div>
    </section>
  )
}

export default Contact