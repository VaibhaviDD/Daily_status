import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Captcha from '../Checkout/Captcha'
import CardPay from '../Checkout/CardPay'
import Checkout from '../Checkout/Checkout'
import ContinueShop from '../Checkout/ContinueShop'
import Home from '../Home/Home'

const RouterComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cardPay' element={<CardPay/>} />
        <Route path='/checkOut' element={<Checkout/>} />
        <Route path='/captcha' element={<Captcha/>} />
        <Route path='/continue' element={<ContinueShop/>} />
      </Routes>
    </div>
  )
}

export default RouterComp
