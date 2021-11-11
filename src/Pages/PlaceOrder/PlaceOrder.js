import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = (props) => {
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
       fetch('https://mysterious-sierra-88051.herokuapp.com/orders',{
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

          alert('Order process successfully')
          reset();

        }
      })
   }
    return (
        
            <div className="text-center">
      <h1 className="m-2 mb-5 text-success">Book Your Package</h1>
      <div className="place-order" >
        <div className="mb-2 container">
          <h4 className="text-success">Fill the form for booking</h4>
          <img className="w-25" src={singleService?.img} alt="" />
          <h4 className="text-success">{singleService?.name}</h4>
          <form className="placeOrder-form container  m-0 border border-success rounded  " onSubmit={handleSubmit(onSubmit)}>

        <input readOnly className="container-fluid" defaultValue={user?.email}  {...register("email", )}    />
        {errors.email && <span className="error">This field is required</span>}
        <input className="container-fluid" placeholder="Address" defaultValue="" {...register("address")} required/>
        <input className="container-fluid" placeholder="City" defaultValue="" {...register("city")} required/>
        <input className="container-fluid" placeholder="phone number" defaultValue="" {...register("phone")} required/>

        <input className="container-fluid bg-success text-white mb-2" type="submit" />
    </form>
        </div>



      </div>
    </div>
        
    );
};

export default PlaceOrder;