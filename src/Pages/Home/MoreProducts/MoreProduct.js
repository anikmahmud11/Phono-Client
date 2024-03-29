import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';



const MoreProduct = () => {
   
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-sierra-88051.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div>
            
                <h1 className=" p-3 service-header text-center text-danger fw-bold">Our Products</h1>
                
                <p className="text-center text-danger  blockquote">FIND YOUR PERFECT MATCH</p>
               
                <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-0 container-fluid" >
                    {
                        products.map(product => <div
                            key={product.id}
                        >
                            <div className="card-group " style={{ height: "25rem",borderRadius:"20px" }} >
                                <div style={{borderRadius:"20px" }} className="card text-center bg-danger bg-opacity-50 text-light fw-bold" >
                                    <img style={{ height: "13rem", width: "13rem",borderRadius:"20px" }} src={product.img} className="card-img-top mx-auto pt-2 " alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text"><small className="text-danger"><Rating
                                        initialRating={product.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        readonly></Rating></small></p>
                                        <Link to={`/placeorder/${product?.id}`}>
                                            <Button className="btn-danger w-50 container mb-2">{cartIcon} Buy Now</Button>

                                        </Link>
                                        
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

export default MoreProduct;