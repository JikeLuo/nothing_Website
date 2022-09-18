import React from 'react';
import styled from "styled-components";

const Order = styled.div`
    padding-top: 1vh;
    > h1 {
        font-weight: lighter;
        font-size: 30px;
        margin: 1rem 0;
    }
`


export default function App() {
    return (
        <Order>
            <h1>我的訂單</h1>
            <span>/ / 目前尚未有訂單</span>
        </Order>
    );
}

