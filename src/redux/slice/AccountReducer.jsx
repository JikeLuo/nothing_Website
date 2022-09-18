import {createSlice, current} from "@reduxjs/toolkit";
import phoneBlack from '../../image/products/phone1-black.webp'
import phoneWhite from '../../image/products/phone1-white.webp'
import earsWhite from '../../image/products/ears/whiteears0.jpg'
import earsBlack from '../../image/products/ears/ears0.jpg'
import phoneCaseClear from '../../image/products/clearcase1600x2160clear.webp'
import phoneCaseBlack from '../../image/products/darkcase1600x2160clear.webp'


export let getNothingUserData

const getData = () => {
    getNothingUserData = JSON.parse(localStorage.getItem('NothingUserData'))
}
getData()


export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        isLogin: false,
        userSymbol: '',
        email: '',

        cartShow: false,
        cartMaskShow: true,

        cartListOpen: false,
        howManyCount: 0,
        totalPrice: 0,
        cartItems: [
            {
                name: 'Phone(1)',
                number: 0,
                img: phoneWhite,
                color: 'White',
                price: 15900,
                key: 1,
            },
            {
                name: 'Phone(1)',
                number: 0,
                img: phoneBlack,
                color: 'Black',
                price: 15900,
                key: 2,
            },
            {
                name: 'Ears(1)',
                number: 0,
                img: earsWhite,
                color: 'White',
                price: 3190,
                key: 3,
            },
            {
                name: 'Ears(1)',
                number: 0,
                img: earsBlack,
                color: 'Black',
                price: 3190,
                key: 4,
            },
            {
                name: 'Phone(1) Case',
                number: 0,
                img: phoneCaseClear,
                color: 'clear',
                price: 699,
                key: 5,
            },
            {
                name: 'Phone(1) Case',
                number: 0,
                img: phoneCaseBlack,
                color: 'Black',
                price: 699,
                key: 6,
            }
        ]
    },
    reducers: {
        /* 登入成功後傳送資料顯示頁面 */
        checkIsLogin: (state, action) => {
            state.isLogin = action.payload.isLogin

            if (state.isLogin) {
                getData()
                console.log(getNothingUserData)
                state.userSymbol = action.payload.userSymbol
                state.email = action.payload.email
                state.cartItems = getNothingUserData[state.email].carItems
            }
        },


        /* 更改 userName */
        changeUserName: (state, action) => {
            state.userSymbol = action.payload.userSymbol
            getNothingUserData[state.email].userName = action.payload.userSymbol
            localStorage.setItem('NothingUserData', JSON.stringify(getNothingUserData))
        },


        /* 把註冊的資料送到 localStorage */
        addNewUserToLocalStorage: (state, action) => {
            console.log(getNothingUserData)
            getNothingUserData[action.payload.email] = {
                userName: action.payload.userName,
                password: action.payload.password,
                carItems: action.payload.cart,
            }
            localStorage.setItem('NothingUserData', JSON.stringify(getNothingUserData))
        },


        /* 更新購物車到 localStorage */
        renewCartToLocalStorage: (state) => {
            if (state.email && state.isLogin) localStorage.setItem('NothingUserData', JSON.stringify(getNothingUserData))
        },


        /* 是否顯示購物車側邊欄 */
        isShowCart: (state, action) => {
            state.cartShow = action.payload.cart === 'show'
            state.cartMaskShow = action.payload.mask === 'hide'
        },


        /* 購物車 更新數量和總價 */
        changeTotalPrice: (state) => {
            /* 計算目前購物車有多少東西 */
            const howManyTemp = () => {
                return state.cartItems.reduce((acc, cur) => cur.number ? acc + cur.number : acc, 0)
            }
            /* 計算總價 */
            const temp = () => {
                let temp = state.cartItems.reduce((acc, cur) => cur.number ? acc + (cur.number * cur.price) : acc, 0)
                return separator(temp)
            }
            /* 總價新增 comma */
            const separator = (numb) => {
                let str = numb.toString().split(".");
                str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return str.join(".");
            }
            state.totalPrice = temp()
            state.howManyCount = howManyTemp()
        },


        /* 更改購買的數量 */
        changeCartItemsNumber: (state, action) => {
            state.cartItems.forEach(item => {
                if (item.key === action.payload.key) action.payload.type === 'plus' ? item.number++ : item.number--
            })
            if(state.isLogin) getNothingUserData[state.email].carItems = current(state.cartItems)
        },


        /* 加入購物車 */
        addToCart: (state, action) => {
            state.cartItems.forEach(item => {
                if (item.key === action.payload) item.number++
            })
            if(state.isLogin) getNothingUserData[state.email].cartItems = current(state.cartItems)

        },


        /* 登出後清空購物車 */
        logoutClearCar: (state) => {
            state.cartItems.forEach(item => item.number = 0 )
        }
    },
})


export default AccountSlice.reducer
export const selectAccount = (state) => state.account

export const addNewUserToLocalStorage = (payload) => AccountSlice.actions.addNewUserToLocalStorage(payload)
export const addCheckIsLogin = (payload) => AccountSlice.actions.checkIsLogin(payload)
export const addChangeUserName = (payload) => AccountSlice.actions.changeUserName(payload)

export const addIsShowCart = (payload) => AccountSlice.actions.isShowCart(payload)
export const addChangeCartItemsNumber = (payload) => AccountSlice.actions.changeCartItemsNumber(payload)
export const addChangeTotalPrice = (payload) => AccountSlice.actions.changeTotalPrice(payload)
export const addRenewCartToLocalStorage = (payload) => AccountSlice.actions.renewCartToLocalStorage(payload)
export const addToCart = (payload) => AccountSlice.actions.addToCart(payload)
export const addLogoutClearCar = (payload) => AccountSlice.actions.logoutClearCar(payload)