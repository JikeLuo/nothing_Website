import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addListImage, selectNavbar} from "../../redux/slice/NavbarReducer";


const Product = styled.div`
        position: relative;
        top: -350px;
        left: 0;
        width: 100vw;
        height: 300px;
        background-color: black;
        transform: translateY(${p => p.show ? '700' : '350'}px); 
        transition: transform 0.2s ease-out;
        
            img {
                position: absolute;
                top: 0;
                left: 1%;
                width: 24%;
                height: 95%;
                object-fit: cover;
            }
            ul {
                padding-left: 30%;
                color: white;
                > span {
                    display: block;
                    margin-top: 0.5rem;
                }
                li {
                    line-height: 30px;
                    width: 30%;
                    > a {
                        letter-spacing: 0.1rem;
                    }
                }
            }
        `

function List() {
    const state = useSelector(selectNavbar)
    const dispatch = useDispatch()
    const {listImage, showList} = state

    const changeListImage = (props) => {
        dispatch(addListImage(props))
    }

    return (
        <Product show={showList}>
            <img src={listImage} alt=""/>
            <ul>
                <span>所有產品</span>
                <li onMouseEnter={() => changeListImage('phone')}><Link to='/phone1'>phone(1)</Link></li>
                <li onMouseEnter={() => changeListImage('ears')}><Link to='/ears'>ears(1)</Link></li>
                <span>所有配件</span>
                <li onMouseEnter={() => changeListImage('case')}><Link to='/phoneCase'>Phone(1) 手機殼</Link></li></ul>
        </Product>
    );
}

export default List;