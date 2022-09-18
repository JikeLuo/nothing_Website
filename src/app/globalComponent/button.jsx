import React from 'react';
import styled from "styled-components";

const C_Button = styled.button`
            width: ${props => props.width ? props.width : '25rem'};
            height: ${props => props.height ? props.width : 3}rem;
            border-radius: 1.5rem;
            border: none;
            outline: none;
            margin: 0.75rem 0;
            background-color:  ${props => props.backgroundColor ? props.backgroundColor : 'black'};
            color: white;
            font-family: N82;
            cursor: pointer;
            letter-spacing: 0.3rem;
            transition: 0.3s ease-out;
            margin: 1rem;
            &:hover {
                transform: scaleX(1.05);
            }
        `

function Button(props) {
    return (
        // eslint-disable-next-line react/jsx-pascal-case
        <C_Button onClick={props.onClick}
                  width={props.width}
                  height={props.height}
                  backgroundColor={props.backgroundColor}
        >{props.innerHTML}</C_Button>
    );
}

export default Button;