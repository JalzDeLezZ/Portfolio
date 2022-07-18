import React from 'react'
import {BsLinkedin, BsGithub, BsBehance} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    // <div className='header__socials'>
    <div className='header__references'>
        <a href="https://www.linkedin.com/in/james-jalz/?locale=en_US" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/JalzDeLezZ" target='_blank'><BsGithub/></a>
        <a href="https://www.behance.net/james_jalz" target='_blank'><BsBehance/></a>
    </div>
  )
}

export default HeaderSocial