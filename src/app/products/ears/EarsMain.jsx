import React, {useEffect} from 'react';
import styled from "styled-components";
import {globalVar} from "../../../asset/globalVar";
import EarsInfo from './EarsInfo'
import {useDispatch, useSelector} from "react-redux";
import {addSetEarsImage, selectProduct} from "../../../redux/slice/ProductReducer";


const {transition} = globalVar

const Ears = styled.div`
    display: grid;
    grid-template-columns: 65vw 35vw;
    grid-template-rows: 100vh;
    
    .ears {
        display: flex;
        justify-content: center;
        grid-column: 1 / 2;
        grid-row: 1 / 2; 
        position: relative;
        background-color: black;
        overflow: hidden;
        img {   
            height: 100%;
            ${transition}
        }
         > span {
            position: absolute;
            top: 0;
            left: 0;
            color: black;
            font-family: Ndot55;
            font-size: 150px;
            letter-spacing: 10px; 
            color: white;
            transform: rotate(90deg) translateY(25vh) translateX(10vw);
         }
    }`


export default function App() {
    const {earsImage, earsColor} = useSelector(selectProduct)
    const dispatch = useDispatch()

    /* 耳機旋轉的動畫 */
    useEffect(() => {
        setTimeout(() => dispatch(addSetEarsImage()), 60)
    }, [dispatch, earsImage])

    return (
        <Ears>
            <div className='ears'>
                <img src={require(`../../../image/products/ears/${earsColor}ears${earsImage}.jpg`)} alt=""/>
                <span>ear ( 1 )</span>
            </div>

            <EarsInfo/>

        </Ears>
    );
}