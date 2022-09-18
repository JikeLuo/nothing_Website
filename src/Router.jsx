import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Redirect from "./app/Redirect";
import Home from './app/home/Home'
import Login from "./app/login/Login";
import Store from "./app/store/Store";
import Ears from "./app/products/ears/Ears"
import Phone1 from "./app/products/phone1/Phone1"
import PhoneCase from './app/products/phoneCase/PhoneCase'
import SignIn from './app/signIn/SignIn'
import Account from './app/account/Account'
import Order from "./app/account/Order";
import EditAccount from './app/account/EditAccount'



export default function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='home' element={<Home />} />


                <Route path='ears' element={<Ears />} />
                <Route path='phone1' element={<Phone1 />} />
                <Route path='phoneCase' element={<PhoneCase />} />


                <Route path='account' element={<Account />}>
                    <Route path='order' element={<Order />} />
                    <Route path='editAccount' element={<EditAccount />} />
                </Route>

                <Route path='login' element={<Login />} />
                <Route path='signIn' element={<SignIn />} />
                <Route path='store' element={<Store />} />
                <Route path='*' element={<Redirect />} />

            </Routes>
        </Router>
    )
}

