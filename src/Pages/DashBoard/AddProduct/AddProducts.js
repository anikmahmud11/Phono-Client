import React from 'react';
import { useForm } from 'react-hook-form';

import './AddProduct.css'

const AddProducts = () => {
    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        fetch('https://mysterious-sierra-88051.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {

                    alert('Reviewed successfully')
                    reset();

                }
            })
    }
    return (
        <div className="text-center">
            <h1 className="m-2 mb-5 text-danger">Add A Packet</h1>
            <div className="place-order" >
                <div className="mb-2 container add-service">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />
                        <input type="number" {...register("price")} placeholder="price" />
                        <input type="number" {...register("rating")} placeholder="rate between (1-5)" />
                        <input {...register("img")} placeholder="image url" />
                        <input className="btn-danger" type="submit" />
                    </form>
                </div>



            </div>
        </div>
    );
};

export default AddProducts;