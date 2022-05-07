import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddItem.css'
const AddItem = () => {
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    //     const url = `http://localhost:5000/products`
    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'content-type': "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => { console.log(result) }
    //         )
    // };
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event )=> {
        console.log(data)
        const url = `http://localhost:5000/products`
        fetch(url, {
            method: "POST",
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
    };
    return (
        <div>
            {/* <h1>Add Inventory</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='d-block mb-2 mx-auto w-50' placeholder='Product Name' {...register("ProductName", { required: true, maxLength: 20 })} />
                    <input className='d-block mb-2 mx-auto w-50' placeholder='Supplier Name' {...register("SupplierName")} />
                    <input className='d-block mb-2 mx-auto w-50' placeholder='Img url' {...register("url")} />
                    <input className='d-block mb-2 mx-auto w-50' placeholder='Price' {...register("number")} />
                    <input className='d-block mb-2 mx-auto w-50'
                        placeholder='Enter Quantity' type="number" {...register("price", { min: 10000, max: 100000 })} />

                    <textarea className='d-block mb-2 mx-auto w-50' placeholder='Enter Description' {...register("description")} />

                    <input className='d-block mb-2 mx-auto w-50' type="submit" />
                </form> */}

            <div className='w-50 mx-auto'>
                <h1>Please Add  service</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Enter Your Name'  {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3' placeholder='Enter Your Description' {...register("description")} />
                    <input className='mb-3' placeholder='Enter Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Photo url' type="text" {...register("picture")} />
                    <input type="submit" value='Add submit' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;