import React from 'react'
import Paan from '../assets/paan//paan.webp'

export default function PaanCorner() {
  return (
    <div className='w-full h-[250px] flex justify-center items-center'>
        <div className='w-[80%] h-full cursor-pointer'>
            <img src={Paan} alt="" />
        </div>
    </div>
  )
}
