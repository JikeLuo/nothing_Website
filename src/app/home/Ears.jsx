import React from 'react';
import styled from "styled-components";
import ears from '../../image/home/ear1.jpg'
import {globalVar} from "../../asset/globalVar";
import {useSelector} from "react-redux";
import {selectHome} from "../../redux/slice/HomeReducer";

const {primaryColor, transition,slowTransition, whiteTransparent} = globalVar

const Ears = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    ${transition}
    background-color: ${primaryColor};
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
            transform: rotate(90deg) translateY(25vh) translateX(${props => props.sign}vw);
        }
    }`

const Intro = styled.div`
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
        width: 50%;
        display: block;
        font-size: 60px;
        margin: 10px 0;
    }
    > p {
        font-size: 18px;
        line-height: 35px;
    }`


export default function App() {
    const { earsIntroMove, earsSign } = useSelector(selectHome)

    return (
        <Ears sign={earsSign}>
            <div id='poster'>
                <img src={ears}  alt=''/>
                <span>ears ( 1 )</span>
            </div>


            <Intro introMove={earsIntroMove}>
                <div>
                    <span>Introducing</span>
                    <b>Ear (1).</b>
                </div>
                <span>Sound of change.</span>
                <p>最先進的主動降噪無線耳機，提供沉浸精彩的聽覺體驗</p>
            </Intro>

        </Ears>
    );
}