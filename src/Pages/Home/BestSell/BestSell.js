import React, { Component } from "react";
import Slider from "react-slick";
import './BestSell.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// // Import Swiper styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 1500,
            cssEase: "linear",
            pauseOnHover: true,
        };
        return (
            <div className="slider-container">
                <h2 className="title"><span style={{color:"#ed563b" ,fontWeight:'bolder'}}>Hot</span> Sell This Month</h2>
                <Slider {...settings}>

                    <div className="slider-container">
                        <h3 className="slider-title">Cannon Camera</h3>
                        <img className="slider-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdH0TF3U9rVRJiyl3YPUgZTfN7CDmqQkHgg&usqp=CAU" alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">I Phone 12</h3>
                        <img className="slider-img" src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_HowToBuy_iPhone-13_09162021_carousel.jpg.large.jpg' alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Dell Laptop</h3>
                        <img className="slider-img" src="https://m.media-amazon.com/images/I/61aTywrhyBS._AC_SX425_.jpg" alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">Samsung Mobile</h3>
                        <img className="slider-img" src="https://www.guanzongroup.com.ph/wp-content/uploads/2022/03/oppo-reno7-1-247x296.jpg" alt="" />
                    </div>


                    <div className="slider-container">
                        <h3 className="slider-title">Air Pot</h3>
                        <img className="slider-img" src="https://cdn.shopify.com/s/files/1/0550/8182/8594/products/1_02a8cb89-16cc-4b11-a9f3-83712e46589e.jpg?v=1633156192" alt="" />
                    </div>
                    <div className="slider-container">
                        <h3 className="slider-title">HP Laptop</h3>
                        <img className="slider-img" src="https://media.istockphoto.com/photos/modern-laptop-on-white-background-picture-id1140541722?k=20&m=1140541722&s=612x612&w=0&h=tZONGMYA38GaqeEOSFIECno55imR49BJmX2ve8nJ7lo=" alt="" />
                    </div>


                </Slider>
            </div>
        );
    }
}