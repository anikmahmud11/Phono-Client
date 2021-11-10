import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Product.css';
const Product = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className=" p-3 service-header text-center">Our Products</h1>
            <p className="text-center">FIND YOUR PERFECT MATCH</p>
            <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 container-fluid" >
                {
                    products.slice(4, 10).map(product => <div
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
                                    <Link to={`/placeorder/${product?.id}`}>
                                        <Button className="bg-success w-50 container mb-2">{cartIcon} Buy Now</Button>

                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;