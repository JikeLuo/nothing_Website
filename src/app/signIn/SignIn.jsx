import React from 'react';
import SignInMain from './SignInMain'
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer'
import ChangeCountry from '../footer/ChangeCountry'
import Cart from "../cart/Cart";


export default function App() {
    return (
        <div>
            <Navbar />
            <ChangeCountry />

            <Cart />
            <SignInMain />

            <Footer />
        </div>
    );
}

