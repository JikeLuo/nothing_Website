import React from 'react';
import styled from "styled-components";
import bird from '../../image/home/phone bird.jpg'
import {globalVar} from "../../asset/globalVar";
import {useSelector} from "react-redux";
import {selectHome} from "../../redux/slice/HomeReducer";

const {primaryColor, transition,slowTransition, whiteTransparent} = globalVar

const Event = styled.div`
                width: 100vw;
                height: 100vh;
                ${transition}
                background-color: ${primaryColor};
                overflow: hidden;
                position: relative;

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
                        transform: rotate(90deg) translateY(50vh) translateX(${props => props.sign}vw); 
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
                    }
                    > p {
                        font-size: 18px;
                        line-height: 35px;
                    }       
                } 
                `
export default function App() {
    const { eventIntroMove,
            eventSign} = useSelector(selectHome)

    return (
        <Event introMove={eventIntroMove}
               sign={eventSign}>
            <div id='poster'>
                <img src={bird} alt={''}/>
                <span>nothing event</span>
            </div>
            <div id='intro'>
                <div>
                    <span>Nothing</span>
                    <b>Event</b>
                </div>
                <span>Nothing Event: Return to instinct.</span>
                <p>這是phone (1)。</p>
                <p>有意設計。滿滿的暖意。和喜悅。</p>
            </div>
        </Event>
    );
}

