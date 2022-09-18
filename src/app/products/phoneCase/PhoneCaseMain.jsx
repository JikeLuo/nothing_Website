import styled from "styled-components";
import {globalVar} from "../../../asset/globalVar";
import {useSelector} from "react-redux";
import PhoneCaseInfo from './PhoneCaseInfo'
import {selectProduct} from "../../../redux/slice/ProductReducer";


const {primaryColor, transition} = globalVar

const PhoneCase = styled.div`
            display: grid;
            grid-template-columns: [lineStart] 65vw [line1] 35vw [lineEnd];
            grid-template-rows: 100vh;
            
            .phoneCase {
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
                    left: -20%;
                    color: black;
                    font-family: Ndot55;
                    font-size: 150px;
                    letter-spacing: 10px; 
                    transform: rotate(90deg) translateY(25vh) translateX(10vw);
                 }
            }
            
            .earsInfo {
                grid-column: 2 / 3;
                grid-row: 1 / 2;
                background-color: ${primaryColor};
            }
            `


export default function App() {
    const {phoneCaseColor} = useSelector(selectProduct)

    return (
        <PhoneCase>
            <div className='phoneCase'>
                <img src={require(`../../../image/products/${phoneCaseColor}case1600x2160clear.webp`)} alt=""/>
                <span>phone(1) case</span>
            </div>
            <div className="earsInfo">
                <PhoneCaseInfo />
            </div>
        </PhoneCase>
    );
}