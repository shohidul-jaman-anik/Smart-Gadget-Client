import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Banner.css'


const Banner = () => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0549/7025/3544/files/slider-1.jpg?v=1647404873"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className='description text-start'>
                            <h3 >Canon. PowerShot G7 </h3>
                            <p >For your professional photography <br></br> you can buy this.</p>
                    </div>
                    <div className='text-start'>
                        <button className='banner-btn'>Shop Now</button>
                    </div>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0549/7025/3544/files/slider-2.jpg?v=1647404873"
                    alt="First slide"

                />
                <Carousel.Caption>
                    <div className='description text-start'>
                            <h3 >Home Audion</h3>
                            <p > Enjoy music the way the artists  intended it <br></br>with Bang & Olufsen home audio.</p>
                    </div>
                    <div className='text-start'>
                        <button className='banner-btn'>Shop Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0549/7025/3544/files/slider-3.jpg?v=1647404873"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='description text-start'>
                        <h3>DJI Dron</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    <div className='text-start'>
                        <button className='banner-btn'>Shop Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0549/6851/6852/files/slider-2.jpg?v=1635230772"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='description text-start'>
                        <h3>Bluethoot Mouse</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    <div className='text-start'>
                        <button className='banner-btn'>Shop Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0549/6851/6852/files/slider-1.jpg?v=1632567322"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='description text-start'>
                        <h3>Headphone</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    <div className='text-start'>
                        <button className='banner-btn'>Shop Now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Banner;