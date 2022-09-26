import React from 'react';
import { Flip } from 'react-reveal';
import Typed from 'react-typed';
import useProducts from '../../Hooks/useProducts/useProducts';
import './MngInventories.css'


const MngInventories = () => {

    const [services, setService] = useProducts()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setService(remaining)
                })
        }
    }


    return (
        <div>
            <div className='services'>
                <h1>
                    <Typed className='services-title'
                        strings={[
                            'Manage Inventory'
                        ]}
                        typeSpeed={40}
                        backSpeed={55}
                        loop
                    >
                    </Typed>
                </h1>
            </div>

            <div className='mngInventory-container'>
                {
                    services.map(service => <div>
                        <div className='mngInventories shadow-sm p-2 text-center rounded-3' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">

                            <img className='bal' src={service.picture} alt="" />
                            <h2>{service.name}</h2>
                            <h4>Price: {service.price}</h4>
                            <h4>Quantity : {service.Quantity}</h4>

                            <p>Supplier : {service.supplier}</p>
                            <Flip right cascade><p>{service.description}</p></Flip>
                            <button className='btn btn-dark admit-btn' onClick={() => handleDelete(service._id)}>
                                Delete Item
                            </button>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MngInventories;


