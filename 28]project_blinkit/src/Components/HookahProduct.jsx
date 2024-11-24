import React from 'react'

export default function HookahProduct() {
    const products = [
        {
            id: 1,
            name: 'Chief Commissioner Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/chief_commissioner_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Bombay Paan Masala Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/bombay_paan_masala_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Natural Spring Water Herbal Hookah Flavor...',
            size: '50 g',
            price: '₹100',
            image: '/src/assets/hookah/natural_spring_water_herbal_hookah_flavor.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Hookah Premium Plastic Filters by Rhythm...',
            size: '1 pack (20 pieces)',
            price: '₹150',
            image: '/src/assets/hookah/hookah_premium_plastic_filters.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Iron Hookah Tong by Smokey Lust',
            size: '1 unit',
            price: '₹100',
            image: '/src/assets/hookah/iron_hookah_tong.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Premium Silver Hookah Foil by Rhythm Imports',
            size: '1 pack (30 pieces)',
            price: '₹100',
            image: '/src/assets/hookah/premium_silver_hookah_foil.avif',
            deliveryTime: '8 MINS',
        },
    ]
    function ProductCard({ product }) {
        return (
            <div className="w-[182px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <img src={product.image} alt={product.name} className="w-full h-36 object-contain p-2" />
                <div className=" p-3">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                        <span>⏱️</span> {product.deliveryTime}
                    </p>
                    <h3 className="font-medium h-[42px] text-sm mt-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 ">{product.size}</p>
                    <div className="flex items-center justify-between mt-2">
                        <div>
                            <span className="text-sm font-bold">{product.price}</span>
                            {product.originalPrice && (
                                <span className="text-xs text-gray-400 line-through ml-2">{product.originalPrice}</span>
                            )}
                        </div>
                        <button className="border-2 border-[#0C831F] text-[#0C831F] font-medium text-xs px-3 py-1 rounded-lg">ADD</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='w-full flex justify-center'>
            <div className="w-[80%] p-5">
                <div className='w-full flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4">Hookah</h2>
                    <h4 className="text-xl font-medium text-[#0C831F]  mb-4 cursor-pointer pr-1">see all</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
