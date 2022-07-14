// import React, { useEffect, useState } from 'react';

// const useServiceDetail = (serviceId) => {
//     const [service, setService] = useState([])
//     useEffect(() => {
//         const url = (`http://localhost:3000/products/${serviceId}`)
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setService(data))
//     }, [serviceId])
//     return [service, setService]
// };

// export default useServiceDetail;