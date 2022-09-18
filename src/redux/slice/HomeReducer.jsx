import {createSlice} from "@reduxjs/toolkit";


export const HomeReducer = createSlice({
    name: 'home',
    initialState: {
        hideNav: false,
        scrollCount: 0,

        scrollTransparent: 5,
        isTransparent: false,
        scrollImgWidth: 100,

        scrollImgMove: '',
        introMove: false,
        phoneMove: false,
        mainFixed: false,

        awardMoveX: 100,
        awardMoveY: 0,
        awardRotate: 10,

        eventIntroMove: 60,
        eventSign: -40,

        earsMove: 100,
        earsIntroMove: 60,
        earsSign: -35,

        aboutIntroMove: 40,
        aboutSign: -30,

        purchaseIntroMove: 40,
        purchaseSign: -30,


    },
    reducers: {
        /* 滾上顯示Nav；滾下隱藏Nav */
        scrollHideNav: (state, action) => {
            state.hideNav = action.payload === 'hide'
        },

        /* Home 滾動滑鼠來顯示動畫 */
        scrollToShowAnimate: (state) => {
            // console.log(state.scrollCount)
            switch (state.scrollCount) {
                case 0:
                    state.scrollTransparent = 5
                    break
                case 1:
                    state.scrollTransparent = 4
                    break
                case 2:
                    state.scrollTransparent = 3
                    break
                case 3:
                    state.scrollTransparent = 2
                    break
                case 4:
                    state.scrollTransparent = 1
                    state.isTransparent = false
                    break
                case 5:
                    state.scrollTransparent = 0
                    state.scrollImgWidth = 100
                    break
                case 6:
                    state.scrollImgWidth = 90
                    state.isTransparent = true
                    break
                case 7:
                    state.scrollImgWidth = 80
                    break
                case 8:
                    state.scrollImgWidth = 70
                    state.scrollImgMove = ''
                    state.introMove = ''
                    break
                case 9:
                    state.scrollImgMove = 'transform: translateX(-40px);'
                    state.introMove = 'transform: translateX(-15%);'
                    break
                case 10:
                    state.scrollImgMove = 'transform: translateX(-80px);'
                    state.introMove = 'transform: translateX(-30%);'
                    break
                case 11:
                    state.scrollImgMove = 'transform: translateX(-120px);'
                    state.introMove = 'transform: translateX(-45%);'
                    break
                case 12:
                    state.scrollImgMove = 'transform: translateX(-160px);'
                    state.introMove = 'transform: translateX(-60%);'
                    break
                case 13:
                    state.scrollImgMove = 'transform: translateX(-200px);'
                    state.introMove = 'transform: translateX(-75%);'
                    break
                case 14:
                    state.scrollImgMove = 'transform: translateX(-240px);'
                    state.introMove = 'transform: translateX(-90%);'
                    state.phoneMove = false
                    break
                case 15:
                    state.scrollImgMove = 'transform: translateX(-300px);'
                    state.introMove = 'transform: translateX(-110%);'
                    state.phoneMove = true
                    break
                case 16:
                    state.mainFixed = false
                    break


                case 17:
                    state.mainFixed = true
                    state.awardMoveX = 100
                    state.awardRotate = 10
                    break
                case 18:
                    state.awardMoveX = 0
                    state.awardRotate = 0
                    break
                case 19:
                    state.awardMoveY = 0
                    state.eventIntroMove = 60
                    state.eventSign = -40
                    break
                case 20:
                    state.awardMoveY = -12
                    state.eventIntroMove = 50
                    state.eventSign = -32
                    break
                case 21:
                    state.awardMoveY = -25
                    state.eventIntroMove = 40
                    state.eventSign = -25
                    break
                case 22:
                    state.awardMoveY = -37
                    state.eventIntroMove = 30
                    state.eventSign = -17
                    break
                case 23:
                    state.awardMoveY = -50
                    state.eventIntroMove = 20
                    state.eventSign = -10
                    break
                case 24:
                    state.awardMoveY = -62
                    state.eventIntroMove = 10
                    state.eventSign = -3
                    break
                case 25:
                    state.awardMoveY = -75
                    state.eventIntroMove = 0
                    state.eventSign = 5
                    state.earsSign = -35
                    break
                case 26:
                    state.awardMoveY = -87
                    state.eventSign = 12
                    state.earsSign = -25
                    state.earsIntroMove = 30
                    break
                case 27:
                    state.awardMoveY = -100
                    state.eventSign = 20
                    state.earsIntroMove = 25
                    state.earsSign = -15
                    break


                case 28:
                    state.earsIntroMove = 20
                    state.earsSign = -10
                    break
                case 29:
                    state.earsIntroMove = 10
                    state.earsSign = -5
                    break
                case 30:
                    state.earsSign = 0
                    state.earsIntroMove = 0
                    break
                case 31:
                    state.earsSign = 5
                    break
                case 32:
                    state.earsSign = 10
                    break


                case 33:
                    state.aboutSign = -20
                    state.aboutIntroMove = 40
                    break
                case 34:
                    state.aboutIntroMove = 30
                    state.aboutSign = -15
                    break
                case 35:
                    state.aboutIntroMove = 20
                    state.aboutSign = -10
                    break
                case 36:
                    state.aboutIntroMove = 10
                    state.aboutSign = -5
                    break
                case 37:
                    state.aboutIntroMove = 0
                    state.aboutSign = 0
                    break


                case 38:
                    state.purchaseIntroMove = 45
                    state.purchaseSign = -30
                    break
                case 39:
                    state.purchaseIntroMove = 30
                    state.purchaseSign = -25
                    break
                case 40:
                    state.purchaseIntroMove = 20
                    state.purchaseSign = -20
                    break
                case 41:
                    state.purchaseIntroMove = 15
                    state.purchaseSign = -15
                    break
                case 42:
                    state.purchaseIntroMove = 10
                    state.purchaseSign = -10
                    break
                case 43:
                    state.purchaseIntroMove = 5
                    state.purchaseSign = 0
                    break
                case 44:
                    state.purchaseIntroMove = 0
                    state.purchaseSign = 10
                    break
                default:
            }
        },

        /* 計算滑鼠滾的次數 */
        scrollToCount: (state, action) => {
            switch (action.payload) {
                case 'plus':
                    state.scrollCount++
                    if (state.scrollCount >= 47) state.scrollCount = 47
                    break
                case 'minus':
                    state.scrollCount--
                    if (state.scrollCount < 0) state.scrollCount = 0
                    break
                default:
            }
        },
    }
})

export const selectHome = (state) => state.home
export const addScrollHideNav = (payload) => HomeReducer.actions.scrollHideNav(payload)
export const addScrollToCount = (payload) => HomeReducer.actions.scrollToCount(payload)
export const addScrollToShowAnimate = (payload) => HomeReducer.actions.scrollToShowAnimate(payload)
export const addJointAgree = (payload) => HomeReducer.actions.jointAgree(payload)


export default HomeReducer.reducer