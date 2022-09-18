import React from 'react';
import styled from "styled-components";

const C_Text = styled.input`
            width: 25rem;
            height: 3rem;
            font-family: N55;
            border-radius: 1.5rem;
            border: none;
            outline: none;
            margin: 0.75rem 0;
            padding-left: 1.5rem; 
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
            margin: 1rem;
        `

function TextInput(props) {
    return (

        // eslint-disable-next-line react/jsx-pascal-case
        <C_Text type={props.type}
                   placeholder={props.placeholder}
                   ref={props.textref}
                   onChange={props.onChange}
        />

    );
}

export default TextInput;