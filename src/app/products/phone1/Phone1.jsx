import {useDispatch, useSelector} from "react-redux";
import styled, {keyframes} from "styled-components";
import {addPhoneScroll, selectProduct} from "../../../redux/slice/ProductReducer";
import {globalVar} from "../../../asset/globalVar";

import Navbar from "../../navbar/Navbar";
import Footer from '../../footer/Footer'
import ChangeCountry from '../../footer/ChangeCountry'
import Cart from "../../cart/Cart";
import Phone1Info from './Phone1Info'


import phoneWhite from '../../../image/products/phone1-white.webp'
import phoneBlack from '../../../image/products/phone1-black.webp'
import phoneImg from '../../../image/products/phone.webp'
import lineImg from '../../../image/products/line.webp'

const {primaryColor, slowTransition} = globalVar

const phoneScale = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }`

const PhoneMain = styled.div`
    display: grid;
    grid-template-columns: 65vw 35vw;
    grid-template-rows: 100vh 100vh;`

const Phone1 = styled.div`
    display: flex;
    justify-content: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2; 
    position: relative;
    background-color: #e5e6e8;
    overflow: hidden;
    img {   
        height: 100%;
        animation: ${phoneScale} 10s linear infinite;
    }
    > span {
           position: absolute;
           top: 0;
           left: 0;
           color: black;
           font-family: Ndot55;
           font-size: 150px;
           letter-spacing: 10px; 
           transform: rotate(90deg) translateY(30vh) translateX(13vw);
    }`

const Include = styled.div`
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 1.5%;
    background-color: ${primaryColor};
    overflow: hidden;
    h2 {
       font-family: N82 !important;
       font-weight: lighter; 
       padding-top: 1.5%;
       letter-spacing: 3px;
    } 
    .imgContainer {
        display: flex;
        margin-top: 2%;
    }
    .img {
        overflow: visible;
        height: 90vh;
        span {
            font-size: 18px;
            letter-spacing: 1.5px;
        }
    }
    .imgPhone {
        width: 60%;
    }
    .imgLine {
        width: 35vw;
        margin-left: 1.5%;
    }
    .imgBox {
        width: 100%;
        height: 80%;
        overflow: hidden;
        background-color: #eaeaea;
        margin-bottom: 20px;
        img {
            width: 100%;
            object-fit: cover;
            ${slowTransition}
            transform: translateY(${props => props.scroll ? 0 : 30}%);
        }
    }`


export default function App() {
    const {phoneScroll, phoneColorDisplay} = useSelector(selectProduct)
    const dispatch = useDispatch()

    /* 滾動滑鼠到下方的過度動畫 */
    const scrollAnimation = () => {
        document.documentElement.scrollTop > 400 ?
            dispatch(addPhoneScroll('page2')) : dispatch(addPhoneScroll('page1'))
    }

    return (
        <PhoneMain onWheel={()=> scrollAnimation()} scroll={phoneScroll}>

            <Navbar/>
            <ChangeCountry />
            <Cart />

            <Phone1>
                <img src={phoneColorDisplay? phoneBlack : phoneWhite} alt=""/>
                <span>phone(1)</span>
            </Phone1>

            <Phone1Info />

            <Include>
                <h2>內容物。</h2>
                <div className="imgContainer">
                    <div className="img imgPhone">
                        <div className="imgBox">
                            <img src={phoneImg} alt=""/>
                        </div>
                        <span>Nothing phone(1)</span>
                    </div>

                    <div className="img imgLine">
                        <div className="imgBox">
                            <img src={lineImg} alt=""/>
                        </div>
                        <span>USB (Type-C) cable</span>
                    </div>
                </div>
            </Include>

            <Footer />

        </PhoneMain>
    );
}




