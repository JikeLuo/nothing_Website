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
        margin: 4% 0 0 2%;
    }
    > .box {
        width: 100%;
        display: flex;
        > .innerBox {
            width: 25%;
            margin: 2%;
            > a > img {
                background-color: #e9e9e7;
                width: 100%;
                padding: 0 2%;
                margin: 0;
            }
            
            > span {
                display: block;
                margin: 2%;
            }
        }
    }
    `

export default function App(p) {
    return (
        <StoreEars>
            <h1>{p.p.title}</h1>
            <div className="box">
                <div className="innerBox">
                    <Link to={p.p.link}><img src={p.p.img} alt=""/></Link>
                    <span>{p.p.price}</span>
                </div>

            </div>


        </StoreEars>
    );
}

