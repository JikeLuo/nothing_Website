import React from "react";
import styled from "styled-components";
import person from "../../image/home/phone person.jpg";
import {useSelector} from "react-redux";
import {selectHome} from "../../redux/slice/HomeReducer";
import {globalVar} from '../../asset/globalVar'


const { primaryColor,
        slowTransition,
        transition,
        whiteTransparent} = globalVar

const Main = styled.div`
        display: flex;
        justify-content: center;
        align-item: start;
        z-index: 2;
        width: 100vw;
        position: ${props => props.fixed? 'static' : 'fixed'};
        height: 100vh;
        background-color: ${primaryColor};
        ${transition}
        
        > img {
            width: ${props => props.img}%;
            ${props => props.move}
            object-fit: cover; 
            ${transition}
        }
        > #mask {
            display: ${props =>  props.isTransparent? `none;` : 'flex'};
            justify-content: center;
            align-items: center;
            font-size: 120px;
            letter-spacing: 15px;
            position: absolute;
            color: rgba(255,255,255,0.${props => props.transparent + 3});
            background-color: rgba(255,255,255,0.${props => props.transparent});
            width: 100%;
            height: 100%;
            line-height: 100%;
            ${transition}
        }
        > #phone {
            position: absolute;
            left: -15%;
            top: -50%;
            color: ${whiteTransparent};
            font-size: 150px;
            font-family: Ndot55; 
            ${slowTransition}
            transform: rotate(90deg) translateX(${props => props.phone? 560 : 0}px);   

        }
        > #intro {
            width: 30%;
            position: absolute;
            top: 70%;
            right: -30%;
            ${props => props.intro}
            ${transition}
            > div {
                width: 100%;
                margin: 10px 0;
                > span {
                    font-size: 17px;
                    letter-spacing: 3px;
                }
                > b {
                    margin-left: 20%;
                }
            }
            > span {
                display: block;
                font-size: 60px;
                margin: 10px 0;
            }
            > p {
                line-height: 25px;
            }       
        }
        `




export default function App() {
    const {
        scrollTransparent,
        isTransparent,
        scrollImgWidth,
        scrollImgMove,
        introMove,
        phoneMove,
        mainMove,
        mainFixed
    } = useSelector(selectHome)



    return (
            <Main transparent={scrollTransparent}
                  isTransparent={isTransparent}
                  img={scrollImgWidth}
                  move={scrollImgMove}
                  intro={introMove}
                  phone={phoneMove}
                  main={mainMove}
                  fixed={mainFixed}>
                <div id='mask'>純粹直覺</div>
                <img src={person} alt={''}/>
                <div id='phone'>phone ( 1 )</div>
                <div id='intro'>
                    <div>
                        <span>Phone&nbsp;(&nbsp;1&nbsp;)</span>
                        <b>簡介。</b>
                    </div>
                    <span>純粹直覺。</span>
                    <p>依循直覺設計，重現日常愉悅。透過 Glyph Interface、完美作業系統和卓越雙鏡頭。一切都快得不可思議。</p>
                </div>
            </Main>
    );
}
