import React from 'react';
import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import {Link} from "react-router-dom";

const {primaryColor} = globalVar


const StoreEars = styled.div`
    width: 100vw;
    background-color: ${primaryColor};
    overflow: hidden;
    font-family: N82;
    letter-spacing: 0.1rem;
    > h1 {
        margin: 2%;
    }
    > a  {
        > img {
            width: 100%;
            padding: 0 2%;
            margin: 0;
        }
    }
    > span {
        display: block;
        margin: 2%;
    }
    
    
    `
export default function App() {
    return (
        <StoreEars>
            <h1>Audio.</h1>
            <Link to='/ears'><img src={require('../../image/products/Store_Product.webp')} alt=""/></Link>
            <span>Ear ( 1 ) Regular price NT$3,190.00</span>

        </StoreEars>
    );
}

