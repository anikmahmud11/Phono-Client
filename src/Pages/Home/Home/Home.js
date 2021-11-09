import React from 'react';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Product from '../Products/Product';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            <Product></Product>
            <Review></Review>
        </div>
    );
};

export default Home;