import React, {useEffect} from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {selectNavbar, addShowList} from "../../redux/slice/NavbarReducer";
import {addScrollHideNav, selectHome} from "../../redux/slice/HomeReducer";
import {addIsShowCart, addRenewCartToLocalStorage, selectAccount} from "../../redux/slice/AccountReducer";
import List from "./List";


const Nav = styled.div`
    position: fixed;
    z-index: 3;
    transition: 0.3s ease-out;
    overflow: visible;
    transform: translateY(${props => props.hideNav ? '-350' : '-300'}px);
    > ul {
        position: relative;
        z-index: 20;
        display: flex;
        justify-content: space-around;
        width: 100vw;
        height: 50px;
        line-height: 50px;
        transition: 0.3s ease-out;
        background-color: ${props => props.showList ? 'black' : 'transparent'};
        > li {
            text-align: center;
            width: 20%;
            cursor: pointer;
            color: ${props => props.showList || props.black ? 'white' : 'black'};
            > a {
                color: ${props => props.showList || props.black ? 'white' : 'black'};
            }
            .symbol {
                padding: 0.3rem 0.5rem;
                border-radius: 0.7rem;
                background-color: ${props => props.showList ? 'white' : 'black'};
                color: ${props => props.showList ? 'black' : 'white'};
            } 
        }
        #products { 
            display: flex;
            justify-content: center;
            > span {
                width: 40%;
                display: block;
                position: relative;
                font-family: Ndot55;
                > b {
                    font-family: Ndot55;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 90%;
                    font-weight: normal;
                    transition: 0.3s ease-out;
                    transform: ${props => props.showList ? 'rotate(270deg) translateX(3px)' : 'rotate(90deg) translateX(-2px)'};                       
                }
            }
        }
    }`


export default function Navbar(p) {
    const {showList} = useSelector(selectNavbar)
    const {hideNav} = useSelector(selectHome)
    const {isLogin, userSymbol, cartItems, howManyCount} = useSelector(selectAccount)
    const dispatch = useDispatch()


    /* 初始化 localStorage */
    const initialUserDataState = JSON.parse(localStorage.getItem('initialUserData'))
    const initialUser = () => {
        localStorage.setItem('initialUserData', true)
        const data = {
            emailTemplate: {
                userName: 'template',
                password: 'template',
                cartItems: cartItems,
            }
        }
        localStorage.setItem('NothingUserData', JSON.stringify(data))
    }
    if (!initialUserDataState) initialUser()


    /* 滾輪上顯示，下隱藏 */
    document.addEventListener('wheel', (e) => {
        e.deltaY < 0 ?
            dispatch(addScrollHideNav('show')) : dispatch(addScrollHideNav('hide'))
    })


    /* 滑鼠靠近 List，顯示 List列表 */
    const actList = (action) => {
        dispatch(addShowList(action))
    }


    /*   變換頁面，更新 Nav顯示
     *   隱藏 List
     *   如果有登入更新 購物車物品 to LocalStorage */
    useEffect(() => {
        void dispatch(addShowList('hide'))
        void dispatch(addScrollHideNav('show'))
        void dispatch(addRenewCartToLocalStorage())
    }, [dispatch])


    /* 顯示購物車側邊欄 */
    const showCart = () => {
        dispatch(addIsShowCart({mask: 'show'}))
        setTimeout(() => dispatch(addIsShowCart({cart: 'show'})), 0)
    }


    return (
        <Nav onMouseLeave={() => actList('hide')}
             showList={showList}
             hideNav={hideNav}
             black={p.black}
        >
            <List/>
            <ul>
                <li><Link to='/home'>NOTHING(R)</Link></li>
                <li id='products'><span onMouseEnter={() => actList('show')}>PRODUCTS<b> > </b></span></li>
                <li><Link to='/store'>STORE</Link></li>

                {!isLogin && <li><Link to='/login'>LOGIN</Link></li>}
                {isLogin && <li><Link to='/account/order' className='symbol'>{userSymbol}</Link></li>}

                <li onClick={() => showCart()}>CART( {howManyCount} )</li>
            </ul>

        </Nav>
    );
}

