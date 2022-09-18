import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";
import {useDispatch, useSelector} from "react-redux";
import {addChangeCountry, addJointAgree, selectNavbar} from '../../redux/slice/NavbarReducer'
import {Link} from "react-router-dom";

const {secondaryColor, transition} = globalVar


const Footer = styled.div`
                display: flex;
                width: 100vw;
                height: 40vh;
                ${transition}
                background-color: ${secondaryColor};
                transform: translateY(${props => props.move}vh);
                overflow: hidden;
                
                #linkList {
                    width: 70%;
                    height: 100%;
                    margin: 15px 0;
                    #link {
                        height: 70%;
                        display: flex;  
                        justify-content: space-between;
                        margin: 5px 0;
                        padding-right: 20%;    
                        ul {
                            width: 100%;
                            overflow: hidden;
                            padding: 0;
                            margin-left: 5%;
                            span {
                               display: block;
                               margin-bottom: 20px;
                            }
                            li {
                                transform: translateX(-12px);
                                width: 100%;
                                line-height: 20px;
                                > a {
                                    letter-spacing: 0.04rem;
                                }
                                ${transition}
                                font-size: 15px;
                                &:hover {
                                        transform: translateX(5px);
                                }
                            }
                        }
                    }
                    #other {
                        > ul {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            padding-left: 20px;
                            li {
                                width: 30%;
                                overflow: hidden;
                                a {
                                    display: block;
                                    transform: translateX(-8px);
                                    ${transition}
                                    letter-spacing: 0.04rem;
                                    &:hover {
                                        transform: translateX(0px);
                                    } 
                                }
                            }
                            > span {
                                font-family: N82;
                                font-size: 15px;
                                font-weight: normal;
                                width: 35%;
                            }  
                        }
                    }
                }
                
                #join {
                    position: relative;
                    width: 30%;
                    height: 100%;
                    padding: 0 20px;
                    overflow: hidden;
                    ul {
                        width: 100%;
                        height: 100%;
                        margin: 15px 0;
                        > .title {
                            display: block;
                            margin-bottom: 20px;
                        }
                        #input {
                            height: 10%;
                            > input {
                                background-color: transparent;
                                border: none;
                                color: black;
                                outline: none;
                                width: 80%;
                                padding-left: 10px;
                            }
                            > button {
                                background-color: transparent;
                                border: none;
                                cursor: pointer;
                                width: 15%;
                            }
                        }
                       
                        li {
                            margin: 10px 0;
                            width: 100%;
                            height: 18%;
                            position: relative;
                            > i {
                                display: block;
                                cursor: pointer;
                                transform: translateY(2px);
                            }
                            > span {
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 30px;
                                font-weight: normal;;
                                a {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                    > button {
                        position: absolute;
                        top: 80%;
                        right: 5%;
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                    }
                }
                * {
                    color: black;
                    font-family: Ndot55;
                    font-size: 15px;
                }
               `


export default function App() {
    const {footerMove, jointSecOne, jointSecTwo} = useSelector(selectNavbar)
    const dispatch = useDispatch()

    const agree = (payload) => {
        dispatch(addJointAgree(payload))
    }

    const changeCountry = () => {
        dispatch(addChangeCountry())
    }

    return (
        <Footer move={footerMove}>
            <div id='linkList'>
                <div id='link'>
                    <ul>
                        <span>PRODUCTS</span>
                        <li><Link to='/phone1'>>&nbsp;&nbsp;phone(1)</Link></li>
                        <li><Link to='/ears'>>&nbsp;&nbsp;ear(1)</Link></li>
                        <li><Link to='/store'>>&nbsp;&nbsp;accessories</Link></li>
                    </ul>
                    <ul>
                        <span>COMPANY</span>
                        <li><a href="https://twx`.nothing.tech/pages/about">>&nbsp;&nbsp;關於我們</a></li>
                        <li><a href="https://tw.nothing.tech/pages/career">>&nbsp;&nbsp;職缺</a></li>
                        <li><a href="https://nothing.community/">>&nbsp;&nbsp;社群</a></li>
                        <li><a href="https://tw.nothing.tech/blogs/news">>&nbsp;&nbsp;新聞資料</a></li>
                        <li><a href="https://tw.nothing.tech/pages/business-enquiry">>&nbsp;&nbsp;業務諮詢</a></li>
                    </ul>
                    <ul>
                        <span>SUPPORT</span>
                        <li><a href="https://tw.nothing.tech/pages/support-centre">>&nbsp;&nbsp;支援中心</a></li>
                        <li><a href="https://tw.nothing.tech/pages/contact-support">>&nbsp;&nbsp;聯絡我們</a></li>
                        <li><a href="https://tw.nothing.tech/pages/store-locator">>&nbsp;&nbsp;門市選購</a></li>
                    </ul>
                    <ul>
                        <span>SOCIAL</span>
                        <li><a href='https://www.instagram.com/nothing/?hl=en'>>&nbsp;&nbsp;INSTAGRAM</a></li>
                        <li><a href="https://www.youtube.com/c/NothingTechnology">>&nbsp;&nbsp;YOUTUBER</a></li>
                        <li><a href="https://twitter.com/nothing">>&nbsp;&nbsp;TWITTER</a></li>
                        <li><a href="https://www.tiktok.com/@nothing.tech">>&nbsp;&nbsp;TIKTOK</a></li>
                        <li><a href="https://discord.com/invite/nothingtech">>&nbsp;&nbsp;DISCORD</a></li>
                    </ul>
                </div>
                <div id="other">
                    <ul>
                        <li><a href="https://tw.nothing.tech/pages/privacy-policy">>&nbsp;&nbsp;隱私政策</a></li>
                        <li><a href="https://tw.nothing.tech/pages/terms-of-sales">>&nbsp;&nbsp;銷售條款</a></li>
                        <li><a href="https://tw.nothing.tech/pages/nothing-website-acceptable-use-policy">>&nbsp;&nbsp;可接受使用政策</a></li>
                        <li><a href="https://us.nothing.tech/pages/user-agreement">>&nbsp;&nbsp;使用者條款</a></li>
                        <span>接受所有主流信用卡和加密貨幣</span>
                    </ul>
                </div>
            </div>


            {/* 右側通訊訂閱條款 */}
            <div id='join'>
                <ul >
                    <span className='title'>JOIN OUR MAILING LIST</span>
                    <li id='input'>[<input type="text" placeholder='電子郵件地址'/><button>訂閱</button>]</li>
                    <li>
                        <i onClick={()=> agree('one')}>[ {jointSecOne? 'X' : <span>&nbsp;&nbsp;&nbsp;</span>} ]</i>
                        <span>我已閱讀並同意 Nothing&nbsp;&nbsp;<a href='https://us.nothing.tech/pages/privacy-policy'>隱私政策</a> </span>
                    </li>

                    <li>
                        <i onClick={()=> agree('two')}>[ {jointSecTwo? 'X' : <span>&nbsp;&nbsp;&nbsp;</span>} ]</i>
                        <span>我同意接受營銷通訊</span>
                    </li>
                </ul>
                <button onClick={() => changeCountry()}>UNITED STATES / (USD)</button>
            </div>


        </Footer>
    );
}

