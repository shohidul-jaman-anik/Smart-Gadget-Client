import React from 'react';
import { Flip, Zoom } from 'react-reveal';
import './Footer.css'
import logo from '../../../Assets/logo-1.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-description'>
                <div className='about'>
                    <div className='about-title'>
                        <img src={logo} alt="" />
                        <div >
                            <h4>SMART GADGET</h4>
                        </div>
                    </div>
                    <p>
                        We have built an enviable reputation in the Gadget, high-tech, manufacturing .Our consulting 20 years of experience we’ll ensure you always get the best guidance for our customers.
                    </p>
                </div>
                <div>
                    <Zoom top cascade><h3 className='footer-header'>Features</h3></Zoom>

                    <Flip right cascade>
                        <div className='details'>
                            <p>Free Shipping</p>
                            <p>Money Return</p>
                            <p>Authorize Products</p>
                            <p>24/7 service</p>
                            <p>good communication</p>
                        </div>
                    </Flip>


                </div>
                <div>
                    <Zoom top cascade><h3 className='footer-header'>Get in touch</h3> </Zoom>

                    <Flip right cascade>
                        <div className='details'>
                            <p>USA, California 20, First Avenue
                            </p>
                            <p>Tel: +7 998 71 150 ##
                            </p>
                            <p>Fax: +7 998 71 150 ##
                            </p>
                            <p>anikh499@gmail.com</p>
                        </div>

                    </Flip>

                </div>
            </div>
            <p>All Right Reserve By <span className='creator-name'>Shohidul Jamna Anik</span> </p>
        </div>
    );
};

export default Footer;