
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../firebase.init';
// import { Flip } from 'react-reveal';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `https://nameless-dusk-43671.herokuapp.com/product?email=${email}`;
            const { data } = await axios.get(url,{
                headers: {
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    }
            });
            setItems(data);
        }
        getItems()
    }, [user])
    return (
        <div>
            <h1>my items {items.length}</h1>
            {/* <div  className='service-container shadow-sm p-2 text-center rounded-3' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">

            <img src={items.picture} alt="" />
            <h2>{items.name}</h2>
            <h4>Price: {items.price}</h4>
            <h4>Quantity : {items.Quantity}</h4>
           
            <p>Supplier : {items.supplier}</p>
            <Flip right cascade><p>{items.description}</p></Flip>
        </div> */}
        </div>
    );
};

export default MyItems;