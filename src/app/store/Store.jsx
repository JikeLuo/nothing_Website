import React from 'react';
import Navbar from "../navbar/Navbar";
import Cart from '../cart/Cart'
import Footer from '../footer/Footer'
import ChangeCountry from '../footer/ChangeCountry'
import StorePhone from './StorePhone'
import StoreEars from './StoreEars'
import MoreProduct from '../globalComponent/moreProduct'
import moreImg from '../../image/products/darkcase1600x2160clear.webp'

const more = {
    title: 'Accessories.',
    link: '/phoneCase',
    img: moreImg,
    price: 'Phone(1) 手機殼 NT$699.00'
}


export default function Store() {
    return (
        <div>
            <Navbar />
            <Cart />
            <ChangeCountry />
            <StorePhone />
            <StoreEars />
            <MoreProduct p={more}/>

            <Footer />
        </div>
    );
}

