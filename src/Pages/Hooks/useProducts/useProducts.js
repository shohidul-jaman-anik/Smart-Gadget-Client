import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('https://nameless-dusk-43671.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [services, setService]
};

export default useProducts;