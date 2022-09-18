import styled from "styled-components";
import Navbar from "../../navbar/Navbar";
import Footer from '../../footer/Footer'
import ChangeCountry from '../../footer/ChangeCountry'
import Cart from '../../cart/Cart'
import PhoneCaseMain from './PhoneCaseMain'
import ProductTemplate from "../../globalComponent/productTemplate";
import MoreProduct from '../../globalComponent/moreProduct'


import templateImg from '../../../image/products/phoneCaseTemplate.webp'
import moreImg from '../../../image/products/Accessories2.webp'

import {globalVar} from "../../../asset/globalVar";
const {primaryColor} = globalVar

const design =  {
    img: templateImg,
    number: '001.',
    short: 'Design.',
    slogan: '減震防摔。',
    intro: '獨家官方 Phone(1) 手機殼。專為 Phone(1) 功能設計和性能測試, 完美呈現Glyph Interface等功能, 發揮最佳效能。採用透明聚碳酸酯和彈性材質製成，與手機完美貼合。輕量。避震。支援無線和反向充電。',
}
const more = {
    title: '相關產品。',
    link: '/phone1',
    img: moreImg,
    price: 'Phone (1) NT$13,900.00',
}

const PhoneCase = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${primaryColor};`


export default function App() {
    return (
        <PhoneCase>
            <Navbar />
            <Cart />
            <ChangeCountry />
            <PhoneCaseMain />
            <ProductTemplate subProps={design}/>
            <MoreProduct p={more}/>
            <Footer />
        </PhoneCase>
    );
}
