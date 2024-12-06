"use client";
import React, { useState, useMemo } from "react";
import Header from "@/components/header"; // Assuming Header is a reusable component
import Footer from "@/components/Footer"; // Assuming Footer is a reusable component
import Link from "next/link";

const Shop = () => {
    // Array of products with details including image URL, description, and price
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 50,
            category: "Men",
            description: "This is a great product for men with excellent quality and style.",
            image: "/images/product1.jpg",
        },
        {
            id: 2,
            name: "Product 2",
            price: 70,
            category: "Women",
            description: "Stylish and comfortable, perfect for everyday wear.",
            image: "/images/product2.jpg",
        },
        {
            id: 3,
            name: "Product 3",
            price: 30,
            category: "Accessories",
            description: "A must-have accessory for anyone looking to add some flair.",
            image: "/images/product3.jpg",
        },
        {
            id: 4,
            name: "Product 4",
            price: 100,
            category: "Men",
            description: "Perfect for formal and casual occasions, very versatile.",
            image: "/images/product4.jpg",
        },
        {
            id: 5,
            name: "Product 5",
            price: 40,
            category: "Women",
            description: "Comfortable and stylish, a must-have for any wardrobe.",
            image: "/images/product5.jpg",
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sortOrder, setSortOrder] = useState("Relevance");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    // Memoizing filtered and sorted products to avoid unnecessary recalculation
    const filteredProducts = useMemo(() => {
        return products.filter((product) =>
            selectedCategory === "All Categories" ? true : product.category === selectedCategory
        );
    }, [selectedCategory]);

    const sortedProducts = useMemo(() => {
        return filteredProducts.sort((a, b) => {
            switch (sortOrder) {
                case "Price: Low to High":
                    return a.price - b.price;
                case "Price: High to Low":
                    return b.price - a.price;
                case "Newest":
                    return b.id - a.id;
                default:
                    return 0;
            }
        });
    }, [filteredProducts, sortOrder]);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            {/* Header */}
            <Header fixed={true} />

            {/* Shop Section */}
            <main className="py-16 pt-24">
                <div className="container mt-10 mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Our Shop</h1>

                    {/* Filters Section */}
                    <div className="mb-8 flex flex-wrap justify-between items-center">
                        <div>
                            <label htmlFor="category" className="text-lg text-gray-600 font-medium">
                                Filter by Category:
                            </label>
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="ml-4 p-2 border border-gray-300 rounded-md bg-white text-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>All Categories</option>
                                <option>Men</option>
                                <option>Women</option>
                                <option>Accessories</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="sortOrder" className="text-lg text-gray-600 font-medium">
                                Sort by:
                            </label>
                            <select
                                id="sortOrder"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="ml-4 p-2 border border-gray-300 rounded-md bg-white text-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Relevance</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {currentProducts.map((product) => (
                            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                                <img src={product.image} alt={product.name} className="w-full h-56 object-cover mb-4 rounded-md" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <p className="text-gray-700 font-semibold mb-4">${product.price}</p>
                                <Link href="/product-details" className="inline-block mt-4 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-colors duration-200">
                                    View Detail
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-200"
                        >
                            Back
                        </button>
                        <div className="text-lg font-semibold">
                            Page {currentPage} of {totalPages}
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-200"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Shop;
