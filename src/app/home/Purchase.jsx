import React from 'react';
import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import vendor from "../../image/home/vender.jpg";
import {useSelector} from "react-redux";
import {selectHome} from "../../redux/slice/HomeReducer";

const {primaryColor, transition,slowTransition, whiteTransparent} = globalVar

const Purchase = styled.div`
                position: relative;
                width: 100vw;
                height: 100vh;
                ${transition}
                background-color: ${primaryColor};
                transform: translateY(${props => props.move}vh);
                overflow: hidden;
                
                #poster {
                    height: 100%;
                    width: 70%;
                    overflow: hidden;
                    position: relative;
                    > img {
                        height: 100%;
                        object-fit: cover;
                    }
                    > span {
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        color: ${whiteTransparent};
                        font-family: Ndot55;
                        font-size: 150px;
                        ${slowTransition}
                        transform: rotate(90deg) translateY(40vh) translateX(${props => props.sign}vw); 
                    }
                }
                
                > #intro {
                    position: absolute;
                    right: 0;
                    bottom: 10%;
                    width: 30%;
                    ${slowTransition}
                    transform: translateY(${props => props.introMove}vh);
                    > div {
                        width: 100%;
                        margin: 10px 0;
                        > span {
                            font-size: 17px;
                            letter-spacing: 3px;
                        }
                        > b {
                            margin-left: 20%;
                            letter-spacing: 3px;
                        }
                    }
                    > span {
                        display: block;
                        font-size: 60px;
                        margin: 10px 0;
                        letter-spacing: 3px;

                    }
                    > p {
                        font-size: 18px;
                        line-height: 35px;
                    }       
                } 
            `

export default function App() {
    const { purchaseMove,
        purchaseIntroMove,
        purchaseSign} = useSelector(selectHome)

    return (
        <Purchase move={purchaseMove}
                  introMove={purchaseIntroMove}
                  sign={purchaseSign}>
            <div id='poster'>
                <img src={vendor} alt={''}/>
                <span>where to buy</span>
            </div>
            <div id='intro'>
                <div>
                    <span>尋找</span>
                    <b>Phone (1).</b>
                </div>
                <span>Phone (1) 購買地點</span>
                <p>即將上市，眾所期盼。</p>
                <p>7 月 16 日，第一次擁有 Phone (1) 的機會。</p>
                <p>以上就是您需要知道的所有資訊。</p>
            </div>
        </Purchase>
    );
}

