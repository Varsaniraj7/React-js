import React from 'react'

export default function GrandGlobalBrand() {
    const images = [
        {
            id: 1,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png"
        },
        {
            id: 2,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png"
        },
        {
            id: 3,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png"
        },
        {
            id: 4,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png"
        },
        {
            id: 5,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png"
        },
        {
            id: 6,
            url: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png"
        },
    ]
    return (
        <div className='w-full h-[550px] mt-6 flex flex-col justify-around' >
            <div className='w-full h-[50px] flex items-center pl-[50px] text-[#3e4152] text-[1.8em] tracking-[.15em] font-bold uppercase' >
                <h1>Grand Global Brands</h1>
            </div>
            <div className='w-full h-auto overflow-hidden flex ' >
                {
                    images.map((images, id) => (
                        <img key={id} src={images.url} className='w-[255px] cursor-pointer' alt="" />
                    ))
                }
            </div>
        </div>
    )
}
