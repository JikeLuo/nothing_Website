import React from "react";
import styled from "styled-components";
import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import login from '../../image/login.webp'
import {addCheckIsLogin, getNothingUserData as data} from "../../redux/slice/AccountReducer";

import TextInput from "../globalComponent/textInput";
import Button from '../globalComponent/button'


const LoginMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f4f4f2;
    display: flex;`
const Poster = styled.div`
    height: 100%;
    width: 65%;
    overflow: hidden;
    > img {
        height: 100%;
        object-fit: cover;
        transform: translateX(-10vw);
    }`
const Login = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .container * {
        font-family: N82;
        font-weight: lighter;
    }
    > .container {
        font-family: N82;
        display: flex;
        flex-direction: column;
        overflow: visible;
        > h1 {
            margin: 1.5rem 0;
        }
        > .notice {
            color: red;
            margin-left: 2%;
            font-family: N55;
        }
        > span {
            margin: 0.75rem;
            > a {
                color: #3f5779;
                border-bottom: 2px dotted #3f5779;
                margin-left: 0.5rem;
            } 
        }
    }`

export default function App() {
    const [passwordWrongState, setPasswordWrongState] = useState(false)
    const dispatch = useDispatch()
    const emailRef = useRef(undefined)
    const passwordRef = useRef(undefined)
    const navigate = useNavigate()

    const loginSuccess = () => {
        dispatch(addCheckIsLogin({
            userSymbol: data[emailRef.current.value].userName,
            isLogin: true,
            email: emailRef.current.value,
        }))
        navigate('/account/order')
    }

    const checkUserData = () => {
        const e = emailRef.current.value
        const p = passwordRef.current.value
        if (e in data && data[e].password === p) void loginSuccess()
        else if (!(e in data) || data[e] !== p) void setPasswordWrongState(true)
    }

    console.log(passwordWrongState)
    return (
        <LoginMain>

            <Poster>
                <img src={login} alt=''/>
            </Poster>

            <Login>
                <div className='container'>
                    <h1>登錄</h1>
                    {passwordWrongState && <span className='notice'>Email 密碼錯誤 或 用戶不存在</span>}
                    <TextInput type={"text"} placeholder={'電子郵件地址'} textref={emailRef}/>
                    <TextInput type={"password"} placeholder={'密碼'} textref={passwordRef}/>
                    <Button onClick={checkUserData} innerHTML={'(確認)'}/>
                    <span className='policy'>登錄即表示您同意 Nothing 的<a
                        href="https://tw.nothing.tech/pages/privacy-policy">隱私政策</a></span>
                    <span className='singIn'>沒有帳戶 ?<Link to='/signIn'>創建一個</Link></span>
                </div>
            </Login>

        </LoginMain>
    );
}
