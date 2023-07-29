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
            <img className='bg' src={bg} alt="background" />
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Advanced Listing Platform
                            </h3>
                            <p>
                                Unveil hidden real estate opportunities with our Advanced Off-Market Listing Platform - the ideal tool for wholesalers, buyers, sellers, and investors of all types. This secure, confidential platform lets sellers list properties at no cost and enables buyers to explore exclusive off-market listings. Backed by rigorous confidentiality agreements or listing person's consent, we ensure secure transactions. Tap into unseen property markets, connect with serious participants, and discover high-value investments. Harness the future of real estate with our streamlined, secure platform.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <img src={chart1} alt="chart" />
                            <div className='text'>
                                <h3>
                                    Informative Property Data Centre
                                </h3>
                                <p>
                                    Embrace the power of data with UREXC. We provide comprehensive data on all properties listed on our platform, granting you unparalleled insights and an edge in your investment decisions. Our database is meticulously maintained and regularly updated, ensuring you have the most accurate information at your fingertips. Whether you're evaluating potential investments or seeking the perfect buyer for your property, UREXC's rich data resources make the process transparent and efficient. With UREXC, you can make data-driven decisions, propelling your commercial real estate investment journey to new heights.
                                </p>
                                <div className="button">
                                    Read more
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='text'>
                            <h3>
                                Email & Marketing
                            </h3>
                            <p>
                                Strengthen your connections with our built-in email integration feature. Our software enables sellers to reach out directly to potential buyers, opening up channels of communication for swift and effective deal-making. Buyers, on the other hand, can harness our advanced skiptracing tool to locate property owners, reaching out to them via email right from our platform. This direct line of communication not only simplifies the process but also expedites transactions, making UREXC your powerful ally in the realm of commercial real estate investment.
                            </p>
                            <div className="button">
                                Read more
                            </div>
                        </div>
                        <div className='image'>
                            <img src={chart2} alt="chart" />
                            <div className='text'>
                                <h3>
                                    Skip tracing - Owner Lookup
                                </h3>
                                <p>
                                Discover the power of advanced skip tracing and integrated text messaging with UREXC. Our platform's skip tracing tool empowers you to swiftly locate property owners, effectively bridging the gap between potential buyers and sellers in the off-market commercial real estate space. In addition, our text messaging feature allows for instantaneous communication directly from the platform, adding an extra layer of convenience. Whether you're a buyer seeking to initiate negotiations or a seller wanting to share details swiftly, these features ensure smooth, efficient communication, making the investment process easier than ever before
                                </p>
                                <div className="button">
                                    Read more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvanceProtection