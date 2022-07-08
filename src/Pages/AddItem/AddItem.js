import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


import './AddItem.css'
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log(user)
    const onSubmit = (data, event) => {
        console.log(data)
        const url = `https://nameless-dusk-43671.herokuapp.com/products`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('item added')
                console.log(result)
                event.target.reset()

            }
            )
    };
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h1>Please Add  service</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Enter Your Name'  {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Enter Your Email' value={user.email} readOnly {...register("email")} />
                    <textarea className='mb-3' placeholder='Enter Your Description' {...register("description")} />
                    <input className='mb-3' placeholder='Enter Price' type="number" {...register("price")} />
                    <input className=' mb-2 '
                        placeholder='Enter Quantity' type="number" {...register("Quantity")} />
                    <input className='mb-3' placeholder='Photo url' type="text" {...register("picture")} />
                    <input type="submit" value='Add submit' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;