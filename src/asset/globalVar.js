
export const globalVar = {
    primaryColor: '#f4f4f2',
    secondaryColor: '#dcd7d2',
    whiteTransparent: 'rgba(255,255,255,0.9)',
    transition: 'transition: 0.17s linear;',
    slowTransition: 'transition: 0.5s ease-out;',
    template: ` width: 100vw;
                height: 100vh;
                transition: 0.17s linear;
                background-color: #f4f4f2;
                overflow: hidden;
                position: relative;

                #poster {
                    height: 100%;
                    width: 65%;
                    overflow: hidden;
                    position: relative;
                    > img {
                        height: 100%;
                        object-fit: cover;
                    }
                    > span {
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        color: rgba(255,255,255,0.9);
                        font-family: Ndot55;
                        font-size: 150px;
                        transition: 0.5s ease-out;
                        transform: rotate(90deg) translateY(50vh) translateX(0vw); 
                    }
                }
                
                > #intro {
                    position: absolute;
                    right: 0;
                    bottom: 10%;
                    width: 30%;
                    transition: 0.5s ease-out;
                    transform: translateY(0vh);
                    > div {
                        width: 100%;
                        margin: 10px 0;
                        > span {
                            font-size: 17px;
                            letter-spacing: 3px;
                        }
                        > b {
                            margin-left: 20%;
                            letter-spacing: 3px;
                        }
                    }
                    > span {
                        width: 90%;
                        display: block;
                        font-size: 60px;
                        margin: 10px 0;
                    }
                    > p {
                        width: 90%;
                        font-size: 18px;
                        line-height: 35px;
                    }       
                }`,
}
