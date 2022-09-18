
import Navbar from "../navbar/Navbar"
import ChangeCountry from '../footer/ChangeCountry'
import Footer from '../footer/Footer'
import LoginMain from './LoginMain'
import Cart from "../cart/Cart";

import React from 'react';

function Login() {
    return (
        <div>
            <Navbar />
            <ChangeCountry />
            <Cart />
            <LoginMain />
            <Footer />
        </div>
    );
}

export default Login;