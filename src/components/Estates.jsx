import React from 'react'
import Slider from "react-slick";

//style
import './../style/components/estates.scss'

function Estates() {
    const estates = [
        {
            image: require('./../images/estate1.png'),
            price: '$ 5,970',
            title: 'Tranquil Haven in the Woods',
            location: '103 Wright CourtBurien, WA 98168',
            type: 'Popular',
        },
        {
            image: require('./../images/estate1.png'),
            price: '$ 1,970',
            title: 'Serene Retreat by the Lake',
            location: '1964 Jehovah Drive, VA 22408',
            type: 'New Listing',
        },
        {
            image: require('./../images/estate1.png'),
            price: '$ 3,450',
            title: 'Charming Cottage in the Meadow',
            location: '1508 Centennial Farm RoadHarlan, 51537',
            type: 'Discounted Price',
        },
        {
            image: require('./../images/estate1.png'),
            price: '$ 2,389',
            title: 'Grand Estate on the Hilltop',
            location: '103 Wright CourtBurien, WA 98168',
            type: 'Popular',
        }
    ]

    const types = [
        {
            type: 'Popular',
            image: require('./../images/fire.png'),
            class: "popular",
        },
        {
            type: 'New Listing',
            image: require('./../images/home.svg'),
            class: 'new-listing'
        },
        {
            type: 'Discounted Price',
            image: require('./../images/discount.svg'),
            class: '',
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1
    };

    return (
        <div className='estates'>
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
                {estates.map(estate => {
                    return (
                        <div className='estate'>
                            <div className="image">
                                <img src={estate.image} alt="" />

                                {types.map(type => {
                                    if (type.type === estate.type) {
                                        return (
                                            <div className={`type  ${type.class}`}>
                                                <img src={type.image} alt="" />
                                                <p>
                                                    {type.type}
                                                </p>
                                            </div>
                                        )
                                    }
                                })}

                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Estates