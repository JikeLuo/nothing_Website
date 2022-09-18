import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addChangeCartItemsNumber, addChangeTotalPrice, addRenewCartToLocalStorage, selectAccount} from "../../redux/slice/AccountReducer";

const Item = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    border-bottom: 2px dotted black;
    > img {
        height: 100%;
    }

`

const Bought = styled.div`
    width: 100%;
    height: 75%;`

const Info = styled.div`
    position: relative;
    height: 100%;
    font-family: N82;
    letter-spacing: 0.1rem;
    padding: 0.4rem 0;
    > div {
        margin: 0.3rem 0;
    }
`
const Number = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    > span {
        margin: 0 0.5rem;
    }
    > button {
        background-color: transparent;
        border: none;
        font-size: 12px;
    }
`

function CartItems(props) {
    const {cartItems} = useSelector(selectAccount)
    const dispatch = useDispatch()
    const increaseNum = (attr) => {
        void dispatch(addChangeCartItemsNumber(attr))
        void dispatch(addChangeTotalPrice())
        void dispatch(addRenewCartToLocalStorage())
    }

    return (
        <Bought>
            {/* eslint-disable-next-line array-callback-return */}
            {cartItems.map(item => {
                if (item.number) {
                    return (<Item key={item.key} order={props.order}>
                        <img src={item.img} alt=''/>


                        <Info>
                            <div>{item.name}</div>
                            <div>顏色：{item.color}</div>
                            <div>價格：{`${item.price.toString().slice(0, -3)},${item.price.toString().slice(-3)}`}</div>

                            <Number>
                                <button onClick={() => increaseNum({key: item.key, type: 'minus'})}>
                                    <i className="fa-solid fa-minus"/>
                                </button>
                                <span> {item.number} </span>
                                <button onClick={() => increaseNum({key: item.key, type: 'plus'})}>
                                    <i className="fa-solid fa-plus"/>
                                </button>
                            </Number>
                        </Info>

                    </Item>)
                }
            })}
        </Bought>
    )
}

export default CartItems;