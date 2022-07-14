
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { Flip } from 'react-reveal';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    // useEffect(() => {
    //     const getItems = async () => {
    //         const email = user?.email;
    //         const url = `http://localhost:3000/product?email=${email}`;
    //         const { data } = await axios.get(url, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         setItems(data);
    //     }
    //     getItems()
    // }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `http://localhost:3000/products/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })
        }
    }

    return (
        <div className='mngInventory-container'>
            <h1>My Item : {items.length}</h1>
            {
                items.map(item => <div>

                    <div className='mngInventories shadow-sm p-2 text-center rounded-3' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">

                        <img className='bal' src={item.picture} alt="" />
                        <h2>{item.name}</h2>
                        <h4>Price: {item.price}</h4>
                        <h4>Quantity : {item.Quantity}</h4>

                        <p>Supplier : {item.supplier}</p>
                        <Flip right cascade><p>{item.description}</p></Flip>
                        <button className='btn btn-dark admit-btn' onClick={() => handleDelete(item._id)}>
                            Delete Item
                        </button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyItems;