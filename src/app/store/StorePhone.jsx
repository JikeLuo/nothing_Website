import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import {Link} from "react-router-dom";


const {primaryColor, transition} = globalVar

const Store = styled.div`
            display: grid;
            grid-template-columns: [lineStart] 65vw [line1] 35vw [lineEnd];
            grid-template-rows: 100vh;
            .store {
                display: flex;
                justify-content: center;
                grid-column: 1 / 2;
                grid-row: 1 / 2; 
                position: relative;
                background-color: #e5e6e8;
                overflow: hidden;
                img {   
                    height: 100%;
                    ${transition}
                }
                 > span {
                    position: absolute;
                    top: 0;
                    left: 5%;
                    color: black;
                    font-family: Ndot55;
                    font-size: 150px;
                    letter-spacing: 10px; 
                    transform: rotate(90deg) translateY(25vh) translateX(10vw);
                 }
            }
            
            .storeInfo {
                grid-column: 2 / 3;
                grid-row: 1 / 2;
                background-color: ${primaryColor};
                font-family: N82;
                position: relative;
                > div {
                    position: absolute;
                    left: 10%;
                    bottom: 5%;;
                    
                    > h1 {
                        margin-top: 10%;
                        margin-bottom: 5%;
                        font-size: 60px;
                        font-weight: lighter;
                        letter-spacing: 3px;
                    }
                    > p {
                        font-size: 18px;
                        width: 80%;
                        letter-spacing: 1.5px;
                        line-height: 130%;
                        margin: 1px 0;
                    }
                    > h3 {
                        margin-top: 2rem;
                        letter-spacing: 2px;
                    }
                }
            }
            `


export default function App() {

    return (
        <Store>
            <Link to='/phone1' className='store'>
                <img src={require(`../../image/products/Banner.webp`)} alt=""/>
                <span>store</span>
            </Link>
            <div className="storeInfo">
                <div>
                    <h1>Phone ( 1 )</h1>
                    <p>Glyph Interface</p>
                    <p>50 MP 雙鏡頭</p>
                    <p>Nothing OS</p>
                    <p>120Hz OLED 顯示螢幕</p>
                    <p>Snapdragon™ 778G+</p>
                    <h3>From NT$13,900.00</h3>
                </div>

            </div>
        </Store>
    );
}