import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Reviews = (props) => {
    const {serviceId}=useParams();
   const[serviceDetails, setServiceDetails] = useState([]);
   const [singleService, setSingleService] = useState({})
 const{user}=useAuth();
   useEffect(()=>{
    fetch('https://mysterious-sierra-88051.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
   },[])
   useEffect(()=>{
            const foundDetails = serviceDetails.find(detail=>detail.id == serviceId)
            setSingleService(foundDetails)
   },[serviceDetails])

   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
   const onSubmit = data => {
    const service = singleService;
    data.orders= service;
       fetch('https://mysterious-sierra-88051.herokuapp.com/reviews',{
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
      <h1 className="m-2 mb-5 text-danger">Give your Feedback</h1>
      <div className="place-order" >
        <div className="mb-2 container">
          <form className="placeOrder-form container  m-0  border-success rounded  " onSubmit={handleSubmit(onSubmit)}>

        <input readOnly className="container-fluid" defaultValue={user?.email && user?.displayName}  {...register("email", )}    />
        {errors.email && <span className="error">This field is required</span>}
        <input className="container-fluid" placeholder="Rate between(1 to 5)" defaultValue="" {...register("rating")} required/>
        <input className="container-fluid" placeholder="Description" defaultValue="" {...register("description")} required/>
       

        <input className="container-fluid btn-danger text-white mb-2" type="submit" />
    </form>
        </div>



      </div>
    </div>
    );
};

export default Reviews;