
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
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
        </div>
    );
};

export default MyItems;