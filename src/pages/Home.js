import React from 'react';
import Products from '../components/Products';
import "./home.css"

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to Prity's store</h2>
            <section>
                <h3>  My Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;