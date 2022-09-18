import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {globalVar} from "../../asset/globalVar";
import {
    addScrollToShowAnimate,
    addScrollToCount,
    selectHome,
} from "../../redux/slice/HomeReducer";

import Navbar from "../navbar/Navbar";
import Main from "./Main";
import Award from './Award'
import Event from './Event'
import Ears from './Ears'
import About from "./About";
import Purchase from './Purchase'
import Footer from '../footer/Footer'
import ChangeCountry from '../footer/ChangeCountry'
import Cart from '../cart/Cart'


const {primaryColor} = globalVar
const Home = styled.div`
            background-color: ${primaryColor};  
            
        `

export default function App() {
    const dispatch = useDispatch()
    const {scrollCount} = useSelector(selectHome)

    const scrollToAct = (e) => {
        if (e.deltaY < 0) {
            dispatch(addScrollToCount('minus'))
            dispatch(addScrollToShowAnimate())
        } else {
            dispatch(addScrollToCount('plus'))
            dispatch(addScrollToShowAnimate())
        }
        if (scrollCount < 17) document.documentElement.scrollTop = 0
    }

    return (
        <Home onWheel={(e) => scrollToAct(e)}>
            <Navbar />
            <Cart />
            <ChangeCountry />
            <Main />
            <Award />
            <Event />
            <Ears />
            <About />
            <Purchase />
            <Footer />
        </Home>
    );
}
