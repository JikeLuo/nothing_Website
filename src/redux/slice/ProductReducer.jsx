import {createSlice} from "@reduxjs/toolkit";


export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        phoneScroll: false,

        selectPhoneColor: false,
        selectPhoneStorage: false,

        phoneColorDisplay: false,

        earsImage: 60,
        earsColor: 'white',

        phoneCaseColor: 'clear',
    },
    reducers: {

        /* 手機頁面滾動到底部顯示動畫 */
        phoneScroll: (state, action) => {
            state.phoneScroll = action.payload === 'page2'
        },

        /* 選擇手機的顏色, 容量然後顯示底下的資訊 */
        selectPhone: (state, action) => {
            switch (action.payload) {
                case 'colorWhite':
                    state.selectPhoneColor = true
                    state.phoneColorDisplay = false
                    break
                case 'colorBlack':
                    state.selectPhoneColor = true
                    state.phoneColorDisplay = true
                    break
                case 'storage':
                    state.selectPhoneStorage = true
                    break
                default:
            }
        },

        /* 耳機旋轉的動畫 */
        setEarsImage: (state) => {
            state.earsImage === 0 ? state.earsImage = 60 : state.earsImage--
        },

        /* 更換耳機顏色 */
        setEarsColor: (state, action) => {
            state.earsColor = action.payload === 'black' ? '' : 'white'
        },

        /* 更換手機殼顏色 */
        setPhoneCaseColor: (state, action) => {
            state.phoneCaseColor = action.payload === 'black' ? 'dark' : 'clear'
        },
    }
})


export default ProductSlice.reducer
export const selectProduct = (state) => state.product

export const addPhoneScroll = (payload) => ProductSlice.actions.phoneScroll(payload)
export const addSelectPhone = (payload) => ProductSlice.actions.selectPhone(payload)
export const addSetEarsImage = () => ProductSlice.actions.setEarsImage()
export const addSetEarsColor = (payload) => ProductSlice.actions.setEarsColor(payload)
export const addSetPhoneCaseColor = (payload) => ProductSlice.actions.setPhoneCaseColor(payload)
