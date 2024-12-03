import React from 'react'

let nav = [
    { id: 1, link: "men" },
    { id: 2, link: "women" },
    { id: 3, link: "kids" },
    { id: 4, link: "home & living" },
    { id: 5, link: "beauty" },
    { id: 6, link: "studio" },
]

export default function Navbar() {

    return (
        <div className='w-full h-[80px] flex justify-around fixed z-10 left-0 right-0 shadow-[0_4px_12px_0_rgba(0,0,0,0.05)] bg-[#fff]'>
            <div className="logo w-[60px] h-full flex justify-center items-center">
                <div className="w-[53px] h-[36px] cursor-pointer bg-[url('/Logo/MyntraWebSprite_27_01_2021.png')] [background-size:1404px_105px] [background-position:-462px_0]"></div>
            </div>
            <div className="logo w-[515px] h-full flex justify-around items-center">
                {nav.map((nav,id) => (
                    <div key={id} className='w-auto h-[46px] flex justify-center items-center text-[14px] uppercase tracking-[.3px] text-[#282c3f] font-bold'>
                        <a href="#">{nav.link}</a>
                    </div>
                ))}
            </div>
            <div className="logo w-[450px] h-full flex justify-center items-center">
                <div className="flex w-[450px] justify-center items-center gap-[2px] focus-within:bg-white focus-within:border-gray-300 focus-within:shadow-md border rounded-[4px] bg-[#f5f5f6]">
                    <div className="w-[40px] h-[39px] flex justify-center border-r-2 border-[#fff] items-center bg-transparent rounded-l-[4px]">
                        <div className="w-[21px] h-[21px] cursor-pointer bg-[url('/Logo/MyntraWebSprite_27_01_2021.png')] [background-size:1404px_105px] [background-position:-754px_0]"></div>
                    </div>
                    <div className="w-[400px] h-[39px] px-[10px] py-[8px] text-[14px] text-[#696e79] bg-transparent rounded-r-[4px]">
                        <input type="text" className="w-full h-full outline-none bg-transparent" placeholder="Search for products, brands and more" />
                    </div>
                </div>

            </div>
            <div className="logo w-[195px] h-full flex justify-between items-center">
                <div className='w-[40px] h-[60px] cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[24px] h-[24px] bg-[url('/Logo/MyntraWebSprite_27_01_2021.png')] [background-size:1404px_105px] [background-position:-298px_-56px]"></div>
                    <div className='text-[12px] font-bold leading-[6px]'>Profile</div>
                </div>
                <div className='w-[45px] h-[60px] cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[17px] h-[24px] bg-[url('/Logo/MyntraWebSprite_27_01_2021.png')] [background-size:1404px_105px] [background-position:-315px_-187px]"></div>
                    <div className='text-[12px] font-bold leading-[6px]'>Wishlist</div>
                </div>
                <div className='w-[40px] h-[60px] cursor-pointer flex flex-col justify-center items-center'>
                    <div className="w-[24px] h-[24px] bg-[url('/Logo/MyntraWebSprite_27_01_2021.png')] [background-size:1404px_105px] [background-position:-341px_-56px]"></div>
                    <div className='text-[12px] font-bold leading-[6px]'>Bag</div>
                </div>
            </div>
        </div>
    )
}
