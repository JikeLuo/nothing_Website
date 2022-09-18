import React from 'react';
import styled from "styled-components";
import wallpaper from '../../image/home/wallpaper.webp'
import {globalVar} from '../../asset/globalVar'
import {selectHome} from "../../redux/slice/HomeReducer";
import {useSelector} from "react-redux";
import T3 from '../../image/home/T3.webp'
import GQ from '../../image/home/GQ.webp'

const {primaryColor, slowTransition, transition} = globalVar


const Award = styled.div`
            display: flex;
            justify-content: space-around;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 41vh;
            ${transition}
            background-color: ${primaryColor};
            overflow: hidden;
            div {
                position: relative;
                width: 33%;
                height: 100%;
                transform-origin: bottom right;
                ${slowTransition}
                transform: rotate(${props => props.rotate}deg) translateX(${props => props.moveX}vw);
                 img {
                    position: absolute;
                    top: 30%;
                    left: 50%;
                    transform: translateX(-50%);                  
                    height: 10%;
                    width: auto;
                    object-fit: cover;
                }
                span {
                    display: block;
                    width: 100%;
                    padding: 10% 2%;
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translateX(-50%); 
                    font-size: 27px;
                    text-align: center;
                }

            }
        `

export default function App() {
    const { awardMoveX, awardMoveY, awardRotate } = useSelector(selectHome)

    return (
        <Award moveX={awardMoveX} moveY={awardMoveY} rotate={awardRotate}>
            <div>
                <img src={wallpaper} alt={''}/>
                <span>“A radical reinterpretation of mobile tech”</span>
            </div>
            <div>
                <img src={T3} alt={''}/>
                <span>“Nothing Phone (1) is the biggest launch of the year in the smartphone space”</span>
            </div>
            <div>
                <img src={GQ} alt={''}/>
                <span>“The most hyped tech company in years”</span>
            </div>
        </Award>
    );
}
