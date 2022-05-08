import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'

import ReactImageMagnify from 'react-image-magnify';
import { useForm } from 'react-hook-form';

const ServiceDetail = () => {
    const { productsId } = useParams()

    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = (`https://nameless-dusk-43671.herokuapp.com/products/${productsId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
        ;

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)

        const url = `https://nameless-dusk-43671.herokuapp.com/products/${productsId}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                event.target.reset()
            }
            )
    }


    return (
        <div>
            <div className='serviceDetail-container p-2 text-center rounded-3 container' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className='zoom-img'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.picture
                        },
                        largeImage: {
                            src: product.picture,
                            width: 1000,
                            height: 1400
                        }
                    }} />

                </div>

                <div className='zoom-description'>
                    <h2>{product.name}</h2>
                    <h4>Price: {product.price}</h4>
                    <h4>Quantity : {product.Quantity}</h4>

                    <p>Supplier : {product.supplier}</p>
                    <p>{product.description}</p>

                    <div className='d-flex  mt-3 '>
                        <button className='update-btn ms-2'>Delivered</button>
                        <form className='d-flex w-50 ms-auto ' onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-3 mr-2' placeholder='Enter Price' type="number" {...register("Quantity")} />
                            <input className='update-btn' type="submit" value="Update" />
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ServiceDetail;