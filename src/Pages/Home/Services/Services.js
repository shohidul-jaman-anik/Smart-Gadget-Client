import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import Typed from 'react-typed';
import useProducts from '../../Hooks/useProducts/useProducts';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setService] = useProducts()
   

    return (
        <div >
            <div className='services'>
                <h1>
                    <Typed className='services-title'
                        strings={[
                            'Our Inventory'
                        ]}
                        typeSpeed={40}
                        backSpeed={55}
                        loop
                    >
                    </Typed>

                </h1>
            </div>

            <div className='services-container'>
                {
                    services.slice(0, 6).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='mng-link-container'>
                <h2>Do you want to see all the items?</h2>
                <p>Then click on Manage Inventory button. Find your desired product.</p>
                <Link to='/mngInventory'>
                    <button className='mng-link'>Manage Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;