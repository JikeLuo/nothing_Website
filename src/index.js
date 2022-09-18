import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './Router'


/* react-redux */
import {Provider} from "react-redux";
import store from "./redux/store";


/* redux-persist */
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";


/* CSS */
import './asset/globalCSS.css'


let newPersistStore = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={newPersistStore}>
            <App/>
        </PersistGate>
    </Provider>
)

