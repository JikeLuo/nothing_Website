import React, {useEffect} from 'react';
import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import {useDispatch, useSelector} from "react-redux";
import {addChangeTotalPrice, addIsShowCart, selectAccount} from "../../redux/slice/AccountReducer";

import Button from "../globalComponent/button";
import CartItems from "./CartItems";

const {primaryColor, transition} = globalVar


const Cart = styled.div`
    display: ${props => props.maskAttr ? 'none' : 'block'};
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    
    
    .mask {
        position: relative;
        width: 100%;
        height: 100%;
        ${transition}
        background-color: ${props => props.show ? 'rgba(0,0,0,0.5)' : 'transparent'};
        > .cartList {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 35%;
            padding: 1rem 1.5rem;
            overflow: hidden;
            ${transition}
            transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
            background-color: ${primaryColor};
        }      
    }`
const Top = styled.div`
    display: flex;
    border-bottom: 2px dotted black;
    padding-bottom: 1rem;
    > div {
        font-family: Ndot55; 
    }
    > button {
        margin-left: auto;
        margin-right: 1rem;
        font-size: 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`
const Price = styled.div`
    > div {
        display: flex;
        padding: 0.5rem 0;
        > span {
            margin-left: auto;
            letter-spacing: 0.1rem;
        }
    }
    > .shipping {
        border-bottom: 2px dotted black;
    }
`


export default function App() {
    const {totalPrice, cartShow, cartMaskShow, howManyCount} = useSelector(selectAccount)
    const dispatch = useDispatch()
    const close = () => {
        dispatch(addIsShowCart({cart: 'close'}))
        setTimeout(() => dispatch(addIsShowCart({mask: 'hide'})), 200)
    }
    
    useEffect(() => {
        dispatch(addChangeTotalPrice())
    }, [dispatch]);

    return (
        <Cart show={cartShow} maskAttr={cartMaskShow}>
            <div className="mask">
                <div className="cartList">
                    <Top>
                        <div>你的購物車 <i>( {howManyCount} )</i></div>
                        <button onClick={() => close()}>關閉</button>
                    </Top>

                    <CartItems/>

                    <Price>
                        <div className='shipping'>
                            <h4>運費</h4>
                            <span>免費</span>
                        </div>
                        <div>
                            <h4>價格</h4>
                            <span>{totalPrice}</span>
                        </div>
                    </Price>

                    <Button width={'95%'} backgroundColor={'#ffc700'} innerHTML={'確認訂單'}/>

                </div>
            </div>
        </Cart>
    );
}

