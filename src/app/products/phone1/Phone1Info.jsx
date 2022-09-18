import React, {useState} from 'react';
import styled from "styled-components";
import Checkbox from '../../globalComponent/checkbox'
import {globalVar} from "../../../asset/globalVar";
import {useDispatch, useSelector} from "react-redux";
import {addSelectPhone, selectProduct} from "../../../redux/slice/ProductReducer";
import Button from "../../globalComponent/button";
import {addChangeTotalPrice, addIsShowCart, addToCart} from "../../../redux/slice/AccountReducer";

const {transition, primaryColor} = globalVar


const Info = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: ${primaryColor};
    width: 100%;
    padding: 10% 20px 0;
    font-family: N82;
    overflow: visible;
    h1 {
        margin-top: 10%;
        margin-bottom: 5%;
        font-size: 60px;
        font-weight: lighter;
        letter-spacing: 3px;
    }
    p {
        font-size: 18px;
        width: 80%;
        letter-spacing: 1.5px;
        line-height: 130%;
        margin: 1px 0;
    }
    legend {
        font-size: 17px;
        margin: 5% 0;
        letter-spacing: 2px;
    }`
const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        display: block;
        letter-spacing: 2px;
    }`
const Price = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .priceItem {
        font-size: 17px;
        letter-spacing: 2px;
    }`

const BtnBox = styled.div`
    width: 120%;
    display: flex;
    input[type='radio'] {
        opacity: 0;
    }
    input[type='radio']:checked + label {
        color: white;
        background-color: black;
    }
    label {
        position: relative;
        width: 150px;
        height: 25px;
        border-radius: 12.5px;
        border: 1px solid #b1b3b3;
        margin: 0 2%;
        overflow: hidden;
        ${transition}
        > i {
            position: absolute;
            top: 50%;
            left: 5%;
            display: block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            transform: translateY(-50%)
        }
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        &:hover {
            transform: scaleX(1.05);
        }
    }`
const EmailBox = styled.div`
    overflow: visible;
    width: 80%;
    display: ${({colors, storage}) => colors && storage ? 'block' : 'none'};
    
    p {
        width: 150%;
        margin: 10% 0;
    }
    > .email {
        width: 160%;
        height: 40px;
        font-size: 18px;
        > input[type='text'] {
            width: 60%;
            background-color: transparent;
            border: none;
            outline: none;
            color: #002f6c;
            padding-left: 3%;
            font-family: N82;
            font-size: 18px;
            letter-spacing: 2px;
        }
        > button {
            width: 25%;
            border: none;
            background-color: transparent;
            font-family: N82;
            font-size: 17px;
            letter-spacing: 1.5px;
        }
    }
    
    span {
        letter-spacing: 1px;
        font-size: 17px;
        a {
            color: #002f6c;
        }
    }`


export default function App() {
    const {selectPhoneColor, selectPhoneStorage} = useSelector(selectProduct)
    const [colorState, setColorState] = useState(1);
    const dispatch = useDispatch()

    const selectPhone = (props) => {
        setColorState(props === 'colorWhite' ? 1 : 2)
        dispatch(addSelectPhone(props))
    }

    const addIntoCart = () => {
        dispatch(addToCart(colorState))
        dispatch(addChangeTotalPrice())
        dispatch(addIsShowCart({mask: 'show'}))
        setTimeout(() => dispatch(addIsShowCart({cart: 'show'})), 0)
    }


    return (
        <Info>
            <Inner>
                <span>001.</span>
                <span>Configuration</span>
                <span/>
            </Inner>


            <h1>Phone (1)</h1>
            <p>Glyph Interface</p>
            <p>50 MP 雙鏡頭</p>
            <p>Nothing OS</p>
            <p>120Hz OLED 顯示螢幕</p>
            <p>Snapdragon™ 778G+</p>
            <legend>Select 顏色</legend>


            <BtnBox>
                <input type="radio" id='white' name='color' onChange={() => selectPhone('colorWhite')}/>
                <label htmlFor="white">
                    <i style={{backgroundColor: 'white'}}/>
                    <span>白色</span>
                </label>

                <input type="radio" id='black' name='color' onChange={() => selectPhone('colorBlack')}/>
                <label htmlFor="black">
                    <i style={{backgroundColor: 'black'}}/>
                    <span>黑色</span>
                </label>
            </BtnBox>

            <legend>Select 容量</legend>

            <BtnBox>
                <input type="radio" id='8+256GB' name='storage' onChange={() => selectPhone('storage')}/>
                <label htmlFor="8+256GB">
                    <span>8+256GB</span>
                </label>
                <input type="radio" id='12+256GB' name='storage' onChange={() => selectPhone('storage')}/>
                <label htmlFor="12+256GB">
                    <span>12+256GB</span>
                </label>
            </BtnBox>

            <Price>
                <div className='priceItem'>Price</div>
                <span className='priceItem'>From NT$15,900.00</span>
            </Price>

            <EmailBox colors={selectPhoneColor} storage={selectPhoneStorage}>
                <p>Sign up to be notified when it's available.</p>
                <div className='email'>
                    (<input type="text" placeholder='Enter your email'/>
                    <button>Notify me</button>
                    )
                </div>

                <Checkbox id={'agree'}/>
                <span>I agree to <a href="https://tw.nothing.tech/pages/terms-of-sales"> Terms and Conditions</a></span>
            </EmailBox>

            <Button innerHTML={'(加入購物車)'} backgroundColor={'#002f6c'} onClick={() => addIntoCart()}/>

        </Info>
    );
}
