import React, {useRef} from 'react';
import styled from "styled-components";
import TextInput from '../globalComponent/textInput'
import Button from "../globalComponent/button";
import {useDispatch} from "react-redux";
import {addChangeUserName} from "../../redux/slice/AccountReducer";

const EditAccount = styled.div`
    padding-top: 1vh;
    > h1 {
        font-weight: lighter;
        font-size: 30px;
    }`


export default function App() {
    const dispatch = useDispatch()
    const userRef = useRef()

    const changeUserName = () => {
        if (userRef.current.value) {
            dispatch(addChangeUserName({
                userSymbol: userRef.current.value,
            }))
            userRef.current.value = ''
        }
    }


    return (
        <EditAccount>
            <h1>修改帳戶名稱</h1>
            <TextInput placeholder={'新的名稱'}
                       textref={userRef}
            />
            <Button innerHTML={'確認'}
                    width={'10rem'}
                    onClick={changeUserName}
            />
        </EditAccount>
    );
}

