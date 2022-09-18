import React, {useEffect} from 'react';
import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {addCheckIsLogin, addLogoutClearCar,selectAccount} from "../../redux/slice/AccountReducer";
import {useDispatch, useSelector} from "react-redux";

import ChangeCountry from '../footer/ChangeCountry'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import Cart from "../cart/Cart";

const {primaryColor} = globalVar


/* styled-components */
const Account = styled.div`
    background-color: ${primaryColor};
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 15vw 60vw;
    grid-template-rows: 15vh 85vh;
    > .sideBar {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        > a {
            color: #917a79;
            margin: 0.5rem 1rem;
        }
    }`
const Content = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border-top: 2px dotted black;`


export default function App() {
    const {isLogin} = useSelector(selectAccount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(addCheckIsLogin({isLogin: false,}))
        dispatch(addLogoutClearCar())
        navigate('/home')
    }

    useEffect(() => {
        return isLogin ? undefined : navigate('/login')
    }, [isLogin, navigate])


    return (
        <section>
            <Navbar/>
            <ChangeCountry/>
            <Cart/>

            {/* mainContent */}
            <Account>
                <div className="sideBar">
                    <Link to='/account/order'>我的訂單</Link>
                    <Link to='/account/editAccount'>修改帳戶名稱</Link>
                    <Link to='/home' onClick={logout}>登出</Link>
                </div>
                <Content><Outlet/></Content>

            </Account>

            <Footer/>

        </section>

    );
}

