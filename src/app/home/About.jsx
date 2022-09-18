import React from 'react';
import styled from "styled-components";
import phone1 from "../../image/home/phone1.jpg";
import {useSelector} from "react-redux";
import {selectHome} from "../../redux/slice/HomeReducer";
import {globalVar} from "../../asset/globalVar";

const {primaryColor, transition,slowTransition, whiteTransparent} = globalVar


const About = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    ${transition}
    background-color: ${primaryColor};
    overflow: hidden;`
const Poster = styled.div`
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
    }`
const Intro = styled.div`
    position: absolute;
    right: 1%;
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
`

export default function App() {
    const { aboutIntroMove, aboutSign } = useSelector(selectHome)

    return (
        <About>
            <Poster sign={aboutSign}>
                <img src={phone1} />
                <span>about us</span>
            </Poster>
            <Intro introMove={aboutIntroMove}>
                <div>
                    <span>About</span>
                    <b>Nothing.</b>
                </div>
                <span>關於我們</span>
                <p>創造東西並不困難，單純複製前人的心血更是輕鬆容易。但如同所有的好東西，ear (1)從草圖誕生，沒有過去的紀錄和藍圖，全新開創，無跡可循。</p>
            </Intro>
        </About>
    );
}

