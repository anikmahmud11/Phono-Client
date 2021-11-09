import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
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
                    <div className="card-group border rounded" style={{height: "25rem"}} >
                        <div className="card text-center  " >
                            <img style={{height: "13rem",width:"13rem"}} src={product.img} className="card-img-top  rounded mx-auto" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <p className="card-text"><small className="text-muted">{product.rating}</small></p>
                                <button className="btn btn-dark">Buy Now</button>
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