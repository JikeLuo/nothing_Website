import React, {useState, useRef} from 'react';
import styled from "styled-components";
import {globalVar} from "../../../asset/globalVar";
import {useDispatch} from "react-redux";
import {addSetPhoneCaseColor} from "../../../redux/slice/ProductReducer";
import {addChangeTotalPrice, addIsShowCart, addToCart} from "../../../redux/slice/AccountReducer";
import Button from '../../globalComponent/button'

const {transition} = globalVar
const Info = styled.div`
            width: 80%;
            padding: 10% 20px 0;
            font-family: N82;
            overflow: visible;
            
            .innerInfo {
                display: flex;
                justify-content: space-between;
                span {
                    display: block;
                    letter-spacing: 2px;
                }
            }
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
const Btn = styled.div`
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
const Price = styled.div`
    margin-top: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .priceItem {
        font-size: 17px;
        letter-spacing: 2px;
    }`
const Email = styled.div`
    overflow: visible;
    width: 80%;
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
        > input[type='submit'] {
            width: 25%;
            border: none;
            background-color: transparent;
            font-family: N82;
            font-size: 17px;
            letter-spacing: 1.5px;
            cursor: pointer;
        }
    }`


export default function App() {
    const [colorState, setColorState] = useState(5);
    const dispatch = useDispatch()
    const emailRef = useRef()

    const selectPhoneCaseColor = (props) => {
        setColorState(props === 'transparent' ? 5 : 6) // 更改當前顏色的狀態，加入購物車後可以指定選擇的顏色
        dispatch(addSetPhoneCaseColor(props))
    }

    // eslint-disable-next-line no-lone-blocks
    {/* 加入購物車 */}
    const addIntoCart = () => {
        dispatch(addToCart(colorState)) // 把顏色狀態送出，並在 reducer 數量欄 +1
        dispatch(addChangeTotalPrice()) // 計算購物車總價
        dispatch(addIsShowCart({mask: 'show'})) // 顯示購物車 mask 特效
        setTimeout(() => dispatch(addIsShowCart({cart: 'show'})), 0) // 顯右側購物車
    }


    return (
        <Info>
            <div className="innerInfo">
                <span>Phone(1)</span>
                <span>Accessory.</span>
            </div>
            <h1>Phone(1) Case</h1>
            <p>透明聚碳酸酯。</p>
            <p>彈性材質。</p>
            <p>防震。</p>
            <p>輕量。</p>
            <p>支援無線充電。</p>
            <p>尺寸：162 x 80.5 x 11.4 公釐。</p>
            <p>重量：28 公克。</p>


            {/* 手機殼顏色 */}
            <legend>Select 顏色</legend>

            <Btn onChange={(e) => addToCart(e)}>
                <input type="radio" id='transparent' name='color' onChange={() => selectPhoneCaseColor('transparent')}/>
                <label htmlFor="transparent"><i style={{backgroundColor: 'white'}}/><span>透明</span></label>
                <input type="radio" id='black' name='color' onChange={() => selectPhoneCaseColor('black')}/>
                <label htmlFor="black"><i style={{backgroundColor: 'black'}}/><span>黑色</span></label>
            </Btn>

            <Price>
                <div className='priceItem'>Price</div>
                <span className='priceItem'>NT$699.00</span>
            </Price>

            <Email>
                <p>當有產品時通知我。</p>
                <form target='#' method='get' className='email'>
                    (<input type="text" placeholder='輸入您的電子郵件' ref={emailRef}/>
                    <input type='submit' value='通知我'/>)
                </form>
            </Email>

            <Button innerHTML={'(加入購物車)'} backgroundColor={'#002f6c'} onClick={() => addIntoCart()}/>


        </Info>
    );
}