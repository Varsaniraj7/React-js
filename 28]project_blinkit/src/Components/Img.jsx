import React from 'react'
import Img1 from '../assets/main/paan-corner_web.avif'
import Img2 from '../assets/main/Slice-2_10.avif'
import Img3 from '../assets/main/Slice-3_9.avif'
import Img4 from '../assets/main/Slice-4_9.avif'
import Img5 from '../assets/main/Slice-5_4.avif'
import Img6 from '../assets/main/Slice-6_5.avif'
import Img7 from '../assets/main/Slice-7_3.avif'
import Img8 from '../assets/main/Slice-8_4.avif'
import Img9 from '../assets/main/Slice-9_3.avif'
import Img10 from '../assets/main/Slice-10.avif'
import Img11 from '../assets/main/Slice-11.avif'
import Img12 from '../assets/main/Slice-12.avif'
import Img13 from '../assets/main/Slice-13.avif'
import Img14 from '../assets/main/Slice-14.avif'
import Img15 from '../assets/main/Slice-15.avif'
import Img16 from '../assets/main/Slice-16.avif'
import Img17 from '../assets/main/Slice-17.avif'
import Img18 from '../assets/main/Slice-18.avif'
import Img19 from '../assets/main/Slice-19.avif'
import Img20 from '../assets/main/Slice-20.avif'

export default function Img() {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
    const imagess = [Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20];
    return (
        <div>
            <div className='w-full h-[200px] mt-4 flex justify-center items-center'>
                <div className='w-[80%] h-full flex items-center' >
                    {images.map((image, index) => (
                        <img key={index} src={image} className='w-[122px] h-[190px] cursor-pointer' alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className='w-full h-[200px] mt-4 flex justify-center items-center'>
                <div className='w-[80%] h-full cursor-pointer flex items-center' >
                    {imagess.map((image, index) => (
                        <img key={index} src={image} className='w-[122px] h-[190px] cursor-pointer' alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
