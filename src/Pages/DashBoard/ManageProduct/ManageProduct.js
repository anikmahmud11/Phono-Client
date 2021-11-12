import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const ManageProduct = () => {
    const cartIcon = <FontAwesomeIcon icon={faTrash} />

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-sierra-88051.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

   // delete 
   const handleDeleteOrder = id => {
    fetch(`https://mysterious-sierra-88051.herokuapp.com/products/${id}`, {
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
        <>
        <div>
            <h1 className=" p-3 service-header text-center text-danger">All Products</h1>
           
            <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 container-fluid" >
                {
                    products.map(product => <div
                        key={product.id}
                    >
                        <div className="card-group border rounded" style={{ height: "25rem" }} >
                            <div className="card text-center  " >
                                <img style={{ height: "13rem", width: "13rem" }} src={product.img} className="card-img-top  rounded mx-auto" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <p className="card-text"><small className="text-muted"><Rating
                                    initialRating={product.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly></Rating></small></p>
                                    
                                        <Button onClick={() => handleDeleteOrder(orders._id)}  className="btn-danger w-50 container mb-2">{cartIcon} DELETE</Button>

                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>

    </>
    );
};

export default ManageProduct;