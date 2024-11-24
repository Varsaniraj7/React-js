import React from 'react';

const Footer = () => {
  const useLinks = [
    "About",
    "Careers",
    "Blog",
    "Press",
    "Lead",
    "Value",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
    "Partner",
    "Franchise",
    "Seller",
    "Warehouse",
    "Deliver",
    "Resources",
  ];
  const column1Links = useLinks.slice(0, 6);
  const column2Links = useLinks.slice(6, 12);
  const column3Links = useLinks.slice(12);



  const categories = [
    "Vegetables & Fruits",
    "Cold Drinks & Juices",
    "Bakery & Biscuits",
    "Dry Fruits, Masala & Oil",
    "Paan Corner",
    "Cleaning Essentials",
    "Personal Care",
    "Electronics & Electricals",
    "Navratri Specials",
    "Dairy & Breakfast",
    "Instant & Frozen Food",
    "Sweet Tooth",
    "Sauces & Spreads",
    "Baby Care",
    "Home & Office",
    "Pet Care",
    "Toys & Games",
    "Munchies",
    "Tea, Coffee & Health Drinks",
    "Atta, Rice & Dal",
    "Organic & Premium",
    "Pharma & Wellness",
    "Ice Creams & Frozen Desserts",
    "Beauty & Cosmetics",
    "Print Store",
  ];
  const column1categories = categories.slice(0, 8);
  const column2categories = categories.slice(8, 16);
  const column3categories = categories.slice(16, 24);

  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-8">
      <div className="w-[80%] container mx-auto px-4">
        <div className="flex justify-between  leading-[30px]">
          {/* Useful Links Section */}
          <div>
            <h5 className="font-bold text-lg mb-4">Useful Links</h5>
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <ul>
                {column1Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul>
                {column2Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 3 */}
              <ul>
                {column3Links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <div className='flex gap-8' ><h5 className="font-bold text-lg mb-4">Categories</h5><p className='text-[#0C831F] text-[16px' >See all</p></div>
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 */}
              <ul>
                {column1categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 2 */}
              <ul>
                {column2categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
              {/* Column 3 */}
              <ul>
                {column3categories.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>

        {/* Download App and Social Media */}
        <div className='h-[100px] mt-4  flex justify-between items-center' >
          <div className="flex space-x-4 mb-4">
            <p>
              &copy; Blink Commerce Private Limited, 2016-2024
            </p>
          </div>
          <div className="flex items-center  space-x-4 mb-4">
            <h5 className="font-bold text-lg mb-4">Download App</h5>
            <a href="#" className="block">
              <img
                src="/src/assets/googleplay.webp"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a href="#" className="block">
              <img
                src="/src/assets/appstore.webp"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex space-x-4">
            <h5 className="font-bold text-lg mb-4">Follow Us</h5>
            {["facebook", "twitter", "instagram", "linkedin", "threads"].map(
              (platform) => (
                <a
                  href="#"
                  key={platform}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <i className={`fab fa-${platform} fa-lg`}></i>
                </a>
              )
            )}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-left text-[14px] text-gray-500">
          <p>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
