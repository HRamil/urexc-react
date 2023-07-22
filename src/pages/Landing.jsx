import React from 'react'
import AdvanceProtection from '../components/AdvanceProtection'
import Applications from '../components/Applications'
import ContactInfo from '../components/ContactInfo'
import Estates from '../components/Estates'
import Parallax from '../components/Parallax'

//style
import './../style/pages/landing.scss'

function Landing() {
  return (
    <div className='landing'>
      <Parallax />
      <AdvanceProtection />
      <Estates />
      <Applications />
      <ContactInfo />
    </div>
  )
}

export default Landing