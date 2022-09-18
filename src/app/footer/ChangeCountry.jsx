import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addChangeCountry, addOpenList} from "../../redux/slice/NavbarReducer";
import {selectNavbar} from "../../redux/slice/NavbarReducer";
import {globalVar} from "../../asset/globalVar";

const {slowTransition, transition} = globalVar

const ChangeCountry = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: 7% 13% 40% auto; 
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: black;
    transform: translateY(0vh);
    transform: translateY(${({show}) => show ? '0' : '-100'}vh);
    ${slowTransition}
    opacity: ${({show}) => show ? 1 : 0};
    #content {
        width: 100%;
        grid-column: 5 / 9;
        grid-row: 3 / 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        position: relative;
        overflow: visible;
        p {
            color: white;
            font-size: 17px;
            margin-right: auto;
        }
    }`
const Navbar = styled.div`
    grid-column: span 12;
    display: flex;
    align-items: center;
    span {
        font-size: 30px;
        font-family: Ndot55;
        color: white;
        margin-left: 2%;
    }
    button {
        color: white;
        background-color: transparent;
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;
        &:hover {
            color: #999;
        }
        i {
            font-size: 20px;
        } 
    }`
const Select = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 15%;
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
    margin: 10px 0 30px 0;
    cursor: pointer;
    span {
        font-family: N82;
        display: block;
        margin-left: 3%;
    }
    i {
        font-size: 25px;
        font-family: Ndot55;
        margin-left: auto;
        margin-right: 5%;
        ${transition}
        transform: rotate(${props => props.open ? 270 : 90}deg);
    }`
const OptionBox = styled.div`
    position: absolute;
    left: 0;
    top: 70%; 
    width: 100%;
    ${transition}
    height: ${props => props.open ? '100%' : '0'};
    background-color: white;
    border-radius: 5px;
    .option {
        font-family: N82;
        width: 100%;
        height: 3em;
        font-size: 18px;
        line-height: 3em;
        padding-left: 2%;
        ${transition}
        &:hover {
           background-color: black;
           color: white;     
        } 
    }`
const BtnBox = styled.div`
    width: 100%;
    display: flex;
    overflow: visible;
    span {
        margin: 0 5%;
        color: white;
    }
    button {
        flex: 1;
        height: 30px;
        outline: none;
        border-radius: 15px;
        color: white;
    }
    #save {
        background-color: #c8102e;
        &:hover {
            transform: scaleX(1.05);
            ${transition}
            background-color: #aa0e27;
        }
    }
    #error {
       background-color: transparent;
       border: 1px solid white;
       &:hover {
            transform: scaleX(1.05);
            color: black;
            ${transition}
            background-color: #ffffff;
        }
    }`


export default function App() {
    const dispatch = useDispatch()

    const {changeCountryShow, openList} = useSelector(selectNavbar)
    const countries = ['CANADA / (CAD)', 'CHILE / (USD)', '台灣 / (NTD)', 'UNITED KINGDOM / (GBP)', 'UNITED STATES / (USD)']

    const closeWindow = () => void dispatch(addChangeCountry())
    const selectCountry = e => document.querySelector('#display').innerHTML = e.target.innerHTML
    const openSelect = (attr, e) => {
        e.stopPropagation()
        dispatch(addOpenList(attr))
    }




    return (
        <ChangeCountry show={changeCountryShow} open={openList} onClick={(e) => openSelect('close', e)}>
            <Navbar>
                <span>NOTHING</span>
                <button onClick={() => closeWindow()}><i className="fa-solid fa-xmark"/></button>
            </Navbar>

            <div id='content'>
                <p>請選擇與寄送地址對應的國家/地區，產品在不同國家或地區可能有不同庫存狀況。</p>
                <br/>
                <p>選擇您的送貨地點</p>

                <Select onClick={(e) => openSelect('open', e)} open={openList}>
                    <span id='display'>台灣</span>
                    <i>></i>
                </Select>

                <OptionBox open={openList}>
                    {countries.map((country, index) =>
                        <div className="option" onClick={(e) => selectCountry(e)} key={index}>{country}</div>
                    )}
                </OptionBox>

                <BtnBox>
                    <button id='save'>保存</button>
                    <span>或</span>
                    <button id='error'>( 地點未列出 )</button>
                </BtnBox>

            </div>
        </ChangeCountry>
    );
}

