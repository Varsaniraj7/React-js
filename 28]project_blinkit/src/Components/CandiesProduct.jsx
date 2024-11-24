import React from 'react'

export default function CandiesProduct() {
    const products = [
        {
            id: 1,
            name: 'Chupa Chups Sour Belt Mixed Fruit Candy',
            size: '57.6 g',
            price: '₹30',
            image: '/src/assets/candies/chupa_chups_sour_belt.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Chupa Chups Sour Bites Mixed Fruit Candy',
            size: '93 g',
            price: '₹50',
            image: '/src/assets/candies/chupa_chups_sour_bites.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 3,
            name: 'Center Freah Sugar Free Mint Candy',
            size: '35 g',
            price: '₹100',
            image: '/src/assets/candies/center_fresh_sugar_mint_candy.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 4,
            name: 'Alpenliebe Pop Assored Flavours Lollipop (with Toy...',
            size: '5 x 8 g',
            price: '₹50',
            image: '/src/assets/candies/alpenliebe_pop_assored_flavours.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 5,
            name: 'Dabur Hajmola Imli Digestive Tablets',
            size: '120 tablets',
            price: '₹68',
            originalPrice: '₹70',
            image: '/src/assets/candies/dabur_hajmora_imli_digestive_tablets.avif',
            deliveryTime: '8 MINS',
        },
        {
            id: 6,
            name: 'Sour Punk Cola Flavour Stick Candy',
            size: '40 g',
            price: '₹35',
            image: '/src/assets/candies/sour_punk_cola_flavour_stick_candy.avif',
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
                    <h2 className="text-2xl font-bold mb-4">Candies & Gums</h2>
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
