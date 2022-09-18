import styled from "styled-components";
import React from "react";

const C_Checkbox = styled.div`
                display: inline;
                padding-bottom: 2%;
                
                
                
                input[type='checkbox'] {
                    display: fixed;
                    opacity: 0;
                }
                input[type='checkbox'] + label {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    border: 1px solid black;
                    margin-right: 10px;
                    cursor: pointer;
                    background-color: white;
                }
                
                input[type='checkbox']:checked + label::after {
                    content: '';
                    display: block;
                    width: 14px;
                    height: 14px;
                    margin: 1px;
                    background-color: black;    
                }
        `


export default function App(props) {
    /* 子傳父 來啟動父頁面的函數 */
    const checked = (attr) => {
        if (props.isCheck) props.isCheck(attr.target.checked)

    }

    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <C_Checkbox>
            <input type="checkbox" id={props.id} onChange={(e) => checked(e)}/>
            <label htmlFor={props.id} />
        </C_Checkbox>
    );
}

