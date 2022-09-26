import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [services, setService]
};

export default useProducts;

