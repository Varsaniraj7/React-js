import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PaanCorner from './Components/PaanCorner'
import Pharmacy from './Components/Pharmacy'
import Img from './Components/Img'
import DairyProduct from './Components/DairyProduct'
import SnacksProduct from './Components/SnacksProduct'
import HookahProduct from './Components/HookahProduct'
import MouthProduct from './Components/MouthProduct'
import ColdDrinksProduct from './Components/ColdDrinksProduct'
import CandiesProduct from './Components/CandiesProduct'

export default function App() {
  return (
    <>
      <Navbar/>
      <PaanCorner/>
      <Pharmacy/>
      <Img/>
      <DairyProduct/> 
      <SnacksProduct/>
      <HookahProduct/>
      <MouthProduct/>
      <ColdDrinksProduct/>
      <CandiesProduct/>
      <Footer/>
    </>
  )
}
