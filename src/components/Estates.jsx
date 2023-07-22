import React from 'react'
import Slider from "react-slick";

//style
import './../style/components/estates.scss'

function Estates() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='estate'>
                <div className='text'>
                    <div>
                        <h4>
                            CHECKOUT OUR NEW
                        </h4>
                        <h3>
                            Best Real Estate
                        </h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                    </div>
                    <div className='button'>
                        All
                    </div>
                </div>
                <Slider {...settings}>
                    <div>

                    </div>
                </Slider>
        </div>
    )
}

export default Estates