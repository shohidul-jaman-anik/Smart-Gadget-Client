import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import Flip from 'react-reveal/Flip';

const Service = ({ service }) => {
    const navigate = useNavigate('')
    const { picture, name, description, price, _id, Quantity, supplier } = service

    const nevigateServiceDetail = id => {
        console.log(id)
        navigate(`/products/${id}`)
    }

    return (
        <div className='service-container shadow-sm p-2 text-center rounded-3' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">

            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h4>Quantity : {Quantity}</h4>

            <p>Supplier : {supplier}</p>
            <Flip right cascade><p>{description}</p></Flip>
            <button onClick={() => nevigateServiceDetail(_id)} className='btn btn-dark admit-btn'>
                Updata Stock
            </button>
        </div>
    );
};

export default Service;