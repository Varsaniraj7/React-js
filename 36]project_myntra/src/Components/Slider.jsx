import React, { useEffect, useState } from 'react'

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/1/1260f21c-497c-44bf-bd38-c7fc088d43ac1733075353899-Prebuzz_1920x504.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
        "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
    ];

    const goToSlide = (index) => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const intervalTime = 3000;

    useEffect(() => {
        const timer = setInterval(() => {
            goToSlide();
        }, intervalTime);

        return () => clearInterval(timer); 
    })
    return (
        <div id="indicators-carousel" className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden md:h-[480px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === activeIndex ? "block" : "hidden"
                            } duration-700 ease-in-out`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-[#535766]" : "bg-[#7e818c] opacity-25"
                            }`}
                        aria-current={index === activeIndex}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            
        </div>
    )
}
