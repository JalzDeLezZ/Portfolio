import React from 'react'
import CV from '../../../assets/JAMES.pdf'
const CTA = () => {
  return (
    // <div className='cta'>
    <div className='my-cta'>
        <a href={CV} download className='btn'> Dowload CV </a>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA