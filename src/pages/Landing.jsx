import React from 'react'
import AdvanceProtection from '../components/AdvanceProtection'
import Parallax from '../components/Parallax'

//style
import './../style/pages/landing.scss'

function Landing() {
  return (
    <div className='landing'>
        <Parallax />
        <AdvanceProtection />
    </div>
  )
}

export default Landing