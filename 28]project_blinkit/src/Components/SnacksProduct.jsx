import React from 'react'

export default function SnacksProduct() {
    const products = [
        {
            id: 1,
            name: 'Cheetos Cheez Puffs',
            size: '8 g',
            price: '₹10',
            image: '/src/assets/snack/cheetos_cheez_puffs.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Cheetos Cheese Flavoured Puffs',
            size: '24.8 g',
            price: '₹161',
            originalPrice: '₹170',
            image: '/src/assets/snack/cheetos_cheese_flavoured_puffs.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Kettle Studio Potato Chips - Sweet Chilli Wi...',
            size: '113 g',
            price: '₹99',
            image: '/src/assets/snack/kettle_studio_potato_chips.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Cheetos Cheddar Popcorn',
            size: '17.7 g',
            price: '₹170',
            image: '/src/assets/snack/cheetos_cheddar_popcorn.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Orion K Snack Kimchi Onion Rings',
            size: '70 g',
            price: '₹50',
            originalPrice: '₹60',
            image: '/src/assets/snack/orion_k_snack_kimchi_onion_rings_1.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Orion K Snack Kimchi Onion Rings Combo',
            size: '140 g',
            price: '₹90',
            originalPrice: '₹120',
            image: '/src/assets/snack/orion_k_snack_kimchi_onion_rings.avif',
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
                    <h2 className="text-2xl font-bold mb-4">Snacks & Munchies</h2>
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
