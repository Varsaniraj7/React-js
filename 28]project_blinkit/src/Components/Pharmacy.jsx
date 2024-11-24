import React from 'react'
import Img1 from '../assets/pharmacy/pharmacy-WEB.avif';
import Img2 from '../assets/pharmacy/Pet-Care_WEB.avif';
// import Img3 from '../assets/pharmacy/babycare_WEB.avif';
import Img3 from '../assets/pharmacy/babycare-WEB.avif'



export default function Pharmacy() {
    const images = [Img1, Img2,Img3];
    return (
        <div className='w-full h-[190px] mt-4 flex justify-center items-center'>
            <div className='w-[78%] h-full flex items-center gap-3 ' >
                {images.map((image, index) => (
                    <img key={index} src={image} className='w-[330px] h-[190px] cursor-pointer' alt={`Image ${index + 1}`} />
                ))}
            </div>
        </div >
    )
}
