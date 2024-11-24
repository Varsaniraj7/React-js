import React from 'react'

export default function DairyProduct() {
    const products = [
        {
            id: 1,
            name: 'Amul Gold Full Cream Fresh Milk',
            size: '500 ml',
            price: '₹33',
            image: '/src/assets/dairy/amul-gold.avif', 
            deliveryTime: '8 MINS',
        },
        {
            id: 2,
            name: 'Amul Taaza Toned Fresh Milk',
            size: '500 ml',
            price: '₹27',
            image: '/src/assets/dairy/amul-taaza.avif',
            deliveryTime: '8 MINS',
          },
          {
            id: 3,
            name: 'Amul Masti Curd',
            size: '400 g',
            price: '₹35',
            image: '/src/assets/dairy/amul-masti-1.avif',
            deliveryTime: '8 MINS',
          },
          {
            id: 4,
            name: 'Amul Masti Curd',
            size: '200 g',
            price: '₹23',
            image: '/src/assets/dairy/amul-masti-2.avif',
            deliveryTime: '8 MINS',
          },
          {
            id: 5,
            name: 'Amul Salted Butter',
            size: '100 g',
            price: '₹60',
            image: '/src/assets/dairy/amul-salted-butter.avif',
            deliveryTime: '8 MINS',
          },
          {
            id: 6,
            name: 'Amul Cheese Cubes',
            size: '200 g',
            price: '₹134',
            originalPrice: '₹135',
            image: '/src/assets/dairy/amul-cheese-cubes.avif',
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
                <h2 className="text-2xl font-bold mb-4">Dairy, Bread & Eggs</h2>
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
