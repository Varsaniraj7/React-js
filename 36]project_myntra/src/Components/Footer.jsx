import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8">
            <div className="container mx-auto px-4">
                {/* First Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Online Shopping */}
                    <div>
                        <h3 className="font-bold mb-2">ONLINE SHOPPING</h3>
                        <ul className="space-y-1">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Home & Living</li>
                            <li>Beauty</li>
                            <li>Gift Cards</li>
                            <li>Myntra Insider</li>
                        </ul>
                    </div>

                    {/* Customer Policies */}
                    <div>
                        <h3 className="font-bold mb-2">CUSTOMER POLICIES</h3>
                        <ul className="space-y-1">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>T&C</li>
                            <li>Terms Of Use</li>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Cancellation</li>
                            <li>Returns</li>
                            <li>Privacy policy</li>
                            <li>Grievance Officer</li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-bold mb-2">USEFUL LINKS</h3>
                        <ul className="space-y-1">
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Site Map</li>
                            <li>Corporate Information</li>
                            <li>Whitehat</li>
                            <li>Cleartrip</li>
                        </ul>
                    </div>

                    {/* Popular Searches */}
                    <div>
                        <h3 className="font-bold mb-2">POPULAR SEARCHES</h3>
                        <p className="text-sm">
                            Makeup, Dresses For Girls, T-Shirts, Sandals, Headphones,
                            Babydolls, Blazers For Men, Handbags, and more.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="mt-8 flex justify-between items-center border-t pt-4">
                    <div>
                        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
                        <p>Return within 14 days of receiving your order</p>
                    </div>
                    {/* Social Media */}
                    <div className="flex flex-col items-center justify-center">
                        <h3 className='font-bold mb-2'>KEEP IN TOUCH</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="#"><img className='w-[21px] h-[21px]' src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" /></a>
                            <a href="#"><img className='w-[21px] h-[21px]' src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" /></a>
                            <a href="#"><img className='w-[21px] h-[21px]' src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" /></a>
                            <a href="#"><img className='w-[21px] h-[21px]' src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className='font-bold mb-2'>EXPERIENCE MYNTRA APP ON MOBILE</h3>
                        <div className='flex space-x-4'>
                            <img
                                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                                alt="Get it on Google Play"
                                className="h-10"
                            />
                            <img
                                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                                alt="Download on App Store"
                                className="h-10"
                            />
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
                © 2024 www.myntra.com. All rights reserved.
            </div>
        </footer>
    )
}
