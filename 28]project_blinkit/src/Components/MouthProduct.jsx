import React from 'react'

export default function MouthProduct() {
    const products = [
        {
            id: 1,
            name: 'Center Fresh Sugar Free Mint Candy',
            size: '35 g',
            price: '₹100',
            image: '/src/assets/mouthfresheners/center_fresh_mint.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Praakritik Natural Paan Gulkand',
            size: '250 g',
            price: '₹335',
            originalPrice: '₹360',
            image: '/src/assets/mouthfresheners/praakritik_natural_paan_gulkand.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Chandan Mitha Amla Candy',
            size: '100 g',
            price: '₹60',
            image: '/src/assets/mouthfresheners/chandan_mitha_amla_candy.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Tic Tac Orange Mouth Freshner',
            size: '1 pack (13 g x 12 pieces)',
            price: '₹223',
            originalPrice:'₹240',
            image: '/src/assets/mouthfresheners/tic_tac_orange_mouth_freshner.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Barkleys Peppermint Intense Mint Candies',
            size: '50 g',
            price: '₹300',
            image: '/src/assets/mouthfresheners/barkleys_peppermint_intense_mint_candies_1.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Barkleys Wintergreen Intense Mint Candies',
            size: '50 g',
            price: '₹300',
            image: '/src/assets/mouthfresheners/barkleys_peppermint_intense_mint_candies_2.avif',
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
                    <h2 className="text-2xl font-bold mb-4">Mouth fresheners</h2>
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
