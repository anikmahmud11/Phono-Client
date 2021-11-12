import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const {user}=useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sierra-88051.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const emails = data.filter(data=>data.email === user.email)
               setOrders(emails);
            });
    }, [user.email])
// console.log(orders);

    // delete 
    const handleDeleteOrder = id => {
        fetch(`https://mysterious-sierra-88051.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainingOrders = orders.filter(order => order._id !== id);
                   
                    setOrders(remainingOrders)
                   
                }
            })

    }

    return (
        <div>
            <h2 className="text-danger m-5 service-header text-center">Your Orders</h2>
            <h4 className="text-danger m-5 service-header text-center">Totall-Order :{orders.length}</h4>
            <div className=" services row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 m-0 container-fluid">
                {
                    orders.map(order => <div
                        key={order._id}


                    >
                        <div className="row ">
                            <div className="col-sm-6 container-fluid">
                                <div className="card">
                                    <div className="card-body ">
                                        <h5 className="card-title text-center">Order Information</h5>
                                        <img className="w-50" src={order?.orders?.img} alt="" />
                                        <p className="text-start">Product-Name: {order?.orders?.name} </p>
                                        <p className="text-start">Order-Price: {order?.orders?.price} </p>
                                        <p className="text-start">Email: {order.email}  </p>
                                        <p className="text-start">Shipping-Address:{order.address}   </p>
                                        <p className="text-start">phone: {order.phone}  </p>
                                       <NavLink as={Link}to="/pay">
                                       <Button className=" btn-danger ">Go to Payment</Button>
                                       </NavLink>
                                        <br />
                                        <Button onClick={() => handleDeleteOrder(order._id)} className=" btn-danger mt-1">Delete Booking</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;