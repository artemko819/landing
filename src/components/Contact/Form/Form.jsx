import React from 'react'

function Form() {
  return (
    <form action=''>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  )
}

export default Form