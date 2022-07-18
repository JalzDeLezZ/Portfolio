import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const FloatingIcon = () => { 

  return (
    <span className="Floating-Icon">
        <a
          target="_blank"
          href="https://bit.ly/3nUpuAr"
        >
          <IoLogoWhatsapp className="icon-fixed" />
        </a>
    </span>
  )
}

export {FloatingIcon}