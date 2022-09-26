import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'



const AddItem = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user] = useAuthState(auth);

    console.log('ba.', user)
    const onSubmit = (data, event) => {
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
                if (result) {
                    toast.success('Item added ')
                    reset()
                }
            }
            )
    };
    return (
        <div>
            <h1>Please Add  service  https://nameless-dusk-43671.herokuapp.com/</h1>

            <form onSubmit={handleSubmit(onSubmit)} autocomplete="off" className="mt-6">

                <input
                    type="text"
                    placeholder="Your Name"
                    value={user?.displayname}
                    className="inputStyle"
                    {...register("name")}
                /><br />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={user.email}
                    className="inputStyle"
                    {...register("email")}
                />

                <div >
                    <input
                        className="inputStyle"
                        autocomplete="false"
                        placeholder='Enter picture Url'
                        {...register("picture", {
                            required: {
                                value: true,
                                message: 'Picture is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-danger">{errors.image.message}</span>}
                    </label>
                </div>

                <div>
                    <textarea
                        type="text"
                        placeholder="About"
                        className="inputStyle textArea"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.about?.type === 'required' && <span className="label-text-alt text-red-500">{errors.about.message}</span>}
                    </label>
                </div>

                <input className='submitBtn' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddItem;