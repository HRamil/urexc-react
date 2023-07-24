import React, { useState } from 'react'

//style 
import './../style/components/aroundtext.scss'

//image
import curve from './../images/curve.png'
import playButton from './../images/playButton.png'

function AroundText() {
    const [state, setState] = useState(false)

    const addClassScroll = () => {
        const scroll = document.documentElement.scrollTop
        if (scroll > 250) {
            setState(true)
        }
        else {
            setState(false)
        }
    }

    window.addEventListener('scroll', addClassScroll)

    return (
        <div className={state? 'aroundText aroundScroll' : 'aroundText'}>
            <img className='roatetimage' src={curve} alt="" />
            <img className='playbutton' src={playButton} alt="" />
        </div>
    )
}

export default AroundText