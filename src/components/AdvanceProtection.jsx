import React from 'react'

//image
import chart1 from './../images/chart1.png'
import chart2 from './../images/chart2.png'
import bg from './../images/Subtract.png'

//style
import './../style/components/advanceprotection.scss'

function AdvanceProtection() {
    return (
        <div className='advanceprotection'>
            <img src={bg} alt="background" />
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Easy Advance Protection
                            </h3>
                            <p>
                                Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <img src={chart1} alt="chart" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Advance Protection Mode Easy
                            </h3>
                            <p>
                                Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <img src={chart2} alt="chart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvanceProtection