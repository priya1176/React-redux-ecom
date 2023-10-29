import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from './cart.png'; 
import home from './home.png';
import "./navbar.css";
const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">Hello!</span>
            <div>
                <Link className="navLink" to="/">
                <img src={home} alt="home" />
                </Link>
                <Link className="navLink" to="/cart">
                <img src={cart} alt="cart" /> 
                </Link>
               <span className="cartCount">{items.length}</span> 

            </div>
        </div>
    );
};

export default Navbar;