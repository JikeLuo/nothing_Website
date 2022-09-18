import {createSlice} from "@reduxjs/toolkit";
import header from '../../image/list/Header.jpg'
import screen from '../../image/list/screen protector.jpg'
import ears from '../../image/list/ear1 list.jpg'
import phoneCase from '../../image/list/phone_1_case.jpg'
import phone from '../../image/list/phone1_list.jpg'

export const NavbarSlice = createSlice({
    name: "navbar",
    initialState: {
        listImage: header,
        showList: false,
        jointSecOne: false,
        jointSecTwo: false,
        changeCountryShow: false,
        openList: false,
    },
    reducers: {
        /* 滑鼠經過選項並更換左側圖片 */
        addListImage: (state, action) => {
            switch (action.payload) {
                case 'phone':
                    state.listImage = phone
                    break
                case 'ears':
                    state.listImage = ears
                    break
                case 'case':
                    state.listImage = phoneCase
                    break
                case 'screen':
                    state.listImage = screen
                    break
                default:
                    state.listImage = header
            }
        },

        /* 滑鼠經過打開列表 */
        addShowList: (state, action) => {
            state.showList = action.payload === 'show'
        },

        /* Footer 的 checkbox */
        jointAgree: (state, action) => {
            action.payload === 'one' ? state.jointSecOne = !state.jointSecOne : state.jointSecTwo = !state.jointSecTwo
        },

        /* 選擇國家的畫面是否打開 */
        changeCountry: (state) => {
            state.changeCountryShow = !state.changeCountryShow
        },

        /* 打開選擇國家列表 */
        openSelect: (state, action) => {
            state.openList = action.payload === 'open' ? !state.openList : false
        },
    }
})

export default NavbarSlice.reducer
export const selectNavbar = (state) => state.navbar // 使用useSelect 使用狀態

export const addListImage = (payload) => NavbarSlice.actions.addListImage(payload) // 使用Reducer
export const addShowList = (payload) => NavbarSlice.actions.addShowList(payload)
export const addJointAgree = (payload) => NavbarSlice.actions.jointAgree(payload)
export const addOpenList = (payload) => NavbarSlice.actions.openSelect(payload)
export const addChangeCountry = (payload) => NavbarSlice.actions.changeCountry(payload)

