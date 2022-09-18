/**
 * 這是 Ears 頁面底下的重複廣告文宣的模板
 */

import styled from "styled-components";
import {globalVar} from "../../asset/globalVar";

const {template} = globalVar
const Ears = styled.div`${template}`

export default function ProductTemplate(props) {
    return (
        <Ears>
            <div id='poster'>
                <img src={props.subProps.img}  alt={''}/>
            </div>
            <div id='intro'>
                <div>
                    <span>{props.subProps.number}</span>
                    <b>{props.subProps.short}</b>
                </div>
                <span>{props.subProps.slogan}</span>
                <p>{props.subProps.intro}</p>
                <p>{props.subProps.intro2}</p>
                <p>{props.subProps.intro3}</p>
            </div>
        </Ears>
    );
}