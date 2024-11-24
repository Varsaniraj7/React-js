import React from 'react'

export default function ColdDrinksProduct() {
    const products = [
        {
            id: 1,
            name: 'Sparking Ice Cubes by Burrf',
            size: '1 kg',
            price: '₹60',
            originalPrice: '₹80',
            image: '/src/assets/colddrinks/Sparkling_ice_cubes.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Coca-Cola Soft Drink(750ml) - Pack of 2',
            size: '2 x 750 ml',
            price: '₹89',
            originalPrice: '₹90',
            image: '/src/assets/colddrinks/coca_cola_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Sprite Lime Flavored Soft Drink 750 ml',
            size: '750 ml',
            price: '₹45',
            image: '/src/assets/colddrinks/sprite_lime_flavoured_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Bisleri Packaged Water',
            size: '5 l',
            price: '₹70',
            image: '/src/assets/colddrinks/bisleri_packaged_water.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Thums Up Soft Drink (2.25 l)',
            size: '2.25 l',
            price: '₹95',
            originalPrice:'₹100',
            image: '/src/assets/colddrinks/thums_up_drink.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Kinley Soda Water',
            size: '1 l',
            price: '₹20',
            image: '/src/assets/colddrinks/kinley_soda_water.avif',
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
                    <h2 className="text-2xl font-bold mb-4">Cold Drinks & Juices</h2>
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
