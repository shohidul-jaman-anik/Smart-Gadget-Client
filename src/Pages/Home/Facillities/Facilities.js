import React from 'react';
import './Facillities.css'
import transport from '../../../Assets/icon/transport_icon.png'
import returnIcon from '../../../Assets/icon/return.png'
import warrenty from '../../../Assets/icon/warranty_icon.png'
import orginal from '../../../Assets/icon/custom_made_icon.png'
const Facilities = () => {
    return (
        <div className='shadow-sm'>
            <h3 className='facilities-title'>Why You Choose For Us</h3>
            <div className='facilities-container'>
                <div className='icon-img'>
                    <div className='icon-revese'>
                        <img src={transport} alt="" />
                        <div className='description-fac'>
                            <p>Free shipping</p>
                            <p>Shipping in 5 days</p>
                        </div>
                    </div>
                    <div className='icon-revese'>
                        <img src={returnIcon} alt="" />
                        <div className='description-fac'>
                            <p>Money back</p>
                            <p>Refund within 30 days</p>
                        </div>
                    </div>
                    <div className='icon-revese'>
                        <img src={warrenty} alt="" />
                        <div className='description-fac'>
                            <p>Money back</p>
                            <p>Refund within 30 days</p>
                        </div>
                    </div>
                    <div className='icon-revese'>
                        <img src={orginal} alt="" />
                        <div className='description-fac'>
                            <p>Authorize Products</p>
                            <p>Orginal best products</p>
                        </div>
                    </div>
                </div>
                <div className='horizontal-line'></div>
            </div>
        </div>
    );
};

export default Facilities;