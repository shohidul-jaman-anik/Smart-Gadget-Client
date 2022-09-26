import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
import Flip from 'react-reveal/Flip';

const Service = ({ service }) => {
    const navigate = useNavigate('')
    // const { picture, name, description, price, _id, Quantity, supplier } = service

    const nevigateServiceDetail = id => {
        console.log(id)
        navigate(`/products/${id}`)
    }
    const imgs = service?.images.map((img) => {
        console.log("hahahahahha", img)
    })


    return (
        <div className='service-container shadow-sm p-2 text-center rounded-3' data-aos="fade-down">

            {/* <img src={service} alt="" /> */}

            {
                service?.images.map((img) =><img src={img.src} alt="" />)
            }

            <h2>{service.name}</h2>
            <h4>Price: {service.sale_price}</h4>
            <h4>Stock: {service.stock}</h4>

            <p>Supplier : {service.supplier}</p>
            <Flip right cascade><p>{service.description}</p></Flip>
            <button onClick={() => nevigateServiceDetail(service._id)} className='btn btn-dark admit-btn'>
                Updata Stock
            </button>
        </div>
    );
};

export default Service;