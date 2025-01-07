import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <h2 className='my-text text-center 4xl'>Get In Touch </h2>
        <div className='text-center tracking-tighter'>
           <p className='my-4'>
             {CONTACT.address}
           </p>
           <p className='my-4'>
             {CONTACT.phoneNo}
           </p>
           <a href='#'className='border-b'>
               {CONTACT.email}
           </a>
        </div>
    </div>
  )
}

export default Contact