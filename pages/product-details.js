// pages/product-details.js

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from "@/components/header";
import Footer from "@/components/Footer";

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const product = {
        id: 1,
        name: "Stylish Leather Jacket",
        price: 129.99,
        description: "A premium quality stylish leather jacket, perfect for all seasons. Comfortable, durable, and trendy.",
        images: [
            "/images/product-1.jpg",
            "/images/product-2.jpg",
            "/images/product-3.jpg"
        ],
        specifications: [
            "Material: Leather",
            "Color: Black",
            "Size: M, L, XL",
            "Care: Dry clean only"
        ]
    };

    const similarProducts = [
        {
            id: 2,
            name: "Classic Denim Jacket",
            price: 89.99,
            image: "/images/product-2.jpg"
        },
        {
            id: 3,
            name: "Premium Bomber Jacket",
            price: 159.99,
            image: "/images/product-3.jpg"
        },
        {
            id: 4,
            name: "Casual Blazer",
            price: 99.99,
            image: "/images/product-4.jpg"
        }
    ];

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value));
        setQuantity(value);
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to your cart!`);
    };

    const handleBuyNow = () => {
        alert(`Proceeding to checkout with ${quantity} item(s).`);
    };

    return (
        <>
            <Header />
            <div className="container mx-auto px-6 py-16">
                {/* Product Breadcrumbs */}
                <div className="flex items-center mb-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-gray-800">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/shop" className="hover:text-gray-800">Shop</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">{product.name}</span>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap">
                    {/* Product Image Gallery */}
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                            <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="cover" className="object-center" />
                        </div>
                        <div className="mt-6 flex space-x-6">
                            {product.images.map((image, index) => (
                                <div key={index} className="w-24 h-24 border rounded-xl overflow-hidden cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <Image src={image} alt={`Product Image ${index + 1}`} width={96} height={96} className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 px-4">
                        <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 mb-6">{product.description}</p>

                        {/* Product Specifications */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications:</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            {product.specifications.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>

                        {/* Quantity & Add to Cart */}
                        <div className="flex items-center mb-6">
                            <label htmlFor="quantity" className="text-gray-700 mr-4">Quantity:</label>
                            <input
                                id="quantity"
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-16 h-10 text-center border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-50"
                                min="1"
                            />
                        </div>

                        <div className="flex space-x-6">
                            
                            <Link href="/cart" className="w-full lg:w-auto bg-black text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-800 transition duration-200">
                                Add to Cart
                            </Link>
                            <Link href="/buy" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition duration-200">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Similar Items Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8">Similar Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {similarProducts.map((item) => (
                            <div key={item.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
                                <Image src={item.image} alt={item.name} width={300} height={300} className="w-full h-60 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-semibold text-gray-900">{item.name}</h3>
                                    <p className="text-lg text-gray-700">${item.price.toFixed(2)}</p>
                                    <Link href={`/product/${item.id}`} className="text-blue-600 hover:text-blue-800 mt-4 block">View Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
