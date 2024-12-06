'use client';  // Add this line at the top

import Header from "@/components/header";
import Image from "next/image";
import { FaTruck, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';  // Import the Next.js router
import Footer from "@/components/Footer";
import Link from 'next/link'; // Importing Link component from Next.js

export default function Home() {
  // Categories data and state
  const categories = [
    { id: 1, name: 'Men', img: 'https://via.placeholder.com/480x300.png?text=Men+Category' },
    { id: 2, name: 'Women', img: 'https://via.placeholder.com/480x300.png?text=Women+Category' },
    { id: 3, name: 'Kids', img: 'https://via.placeholder.com/480x300.png?text=Kids+Category' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const router = useRouter();  // Initialize the router

  const filterImages = (category) => {
    setSelectedCategory(category);
  };

  const handleViewMore = () => {
    router.push('/categories');  // Redirect to the 'categories' page
  };

  const saleImages = [
    "https://via.placeholder.com/400x300.png?text=Season+Sale+1",
    "https://via.placeholder.com/400x300.png?text=Season+Sale+2",
    "https://via.placeholder.com/400x300.png?text=Season+Sale+3",
  ];
  const discountImages = [
    "https://via.placeholder.com/400x300.png?text=Top+Discount+1",
    "https://via.placeholder.com/400x300.png?text=Top+Discount+2",
    "https://via.placeholder.com/400x300.png?text=Top+Discount+3",
  ];

  const [saleIndex, setSaleIndex] = useState(0);
  const [discountIndex, setDiscountIndex] = useState(0);

  useEffect(() => {
    const saleInterval = setInterval(() => {
      setSaleIndex((prevIndex) => (prevIndex + 1) % saleImages.length);
    }, 5000);

    const discountInterval = setInterval(() => {
      setDiscountIndex((prevIndex) => (prevIndex + 1) % discountImages.length);
    }, 5000);

    return () => {
      clearInterval(saleInterval);
      clearInterval(discountInterval);
    };
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 text-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-between lg:flex-row flex-col-reverse">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              <span className="block text-black">Elevate Your Style</span>
              <span className="block text-gray-500">With Timeless Elegance</span>
            </h1>
            <p className="mb-10 leading-relaxed text-gray-600 max-w-lg text-lg">
              Discover our premium collection of apparel designed to redefine your wardrobe with sophistication and comfort. Make every outfit your signature.
            </p>
            <div className="flex space-x-4">
              {/* Shop Now Button */}
              <Link
                href="/shop"
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-lg shadow-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition duration-200 ease-in-out"
              >
                Shop Now
              </Link>
              {/* Learn More Button */}
              <Link
                href="/about"
                className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-full font-medium text-lg shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition duration-200 ease-in-out"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative group">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                className="object-cover object-center w-full h-full rounded-3xl transition-transform duration-500 transform group-hover:scale-105"
                alt="Clothing Collection"
                src="https://via.placeholder.com/480x600.png?text=Timeless+Fashion"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-gray-900 mb-16 tracking-tight">
            Shop by Category
          </h2>

          {/* Category Buttons */}
          <div className="flex justify-center flex-wrap gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-lg font-medium rounded-full border transition duration-300 ${selectedCategory === category.name
                  ? 'text-gray-900 border-gray-900 bg-gray-200'
                  : 'text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                onClick={() => filterImages(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Images */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {categories
              .filter(
                (category) =>
                  selectedCategory === 'All' || category.name === selectedCategory
              )
              .map((category) => (
                <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={category.img}
                    alt={category.name}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold tracking-wide">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
          </div>

          {/* View More Button */}
          <div className="mt-16">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium text-lg shadow-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition duration-300"
            >
              View All Categories
            </button>
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-16">
            {/* Fast Delivery */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
              <div className="text-indigo-600 mb-6">
                <FaTruck className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Get your orders delivered to your doorstep in no time with our swift and reliable delivery service.
              </p>
            </div>

            {/* Easy Exchange */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
              <div className="text-green-600 mb-6">
                <FaExchangeAlt className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Easy Exchange</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hassle-free exchanges and returns ensure that you're always happy with your purchase.
              </p>
            </div>

            {/* Assured Quality */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
              <div className="text-yellow-600 mb-6">
                <FaShieldAlt className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Assured Quality</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure the highest quality materials and craftsmanship for every product we offer.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Discount */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-200 py-24">
  <div className="container mx-auto text-center">
    {/* Section Title */}
    <h2 className="text-5xl font-bold text-gray-900 mb-6">
      Exclusive <span className="text-black">Season Sale</span>
    </h2>
    <p className="text-xl text-gray-700 mb-16 leading-relaxed">
      Discover unbeatable deals and discounts on your favorite collections. Shop before the season ends!
    </p>

    {/* Sale & Discounts Cards */}
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12">
      {/* Season Sale */}
      <div className="relative bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs uppercase py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
          Limited Time
        </div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Season Sale</h3>
        <p className="text-lg text-gray-700 mb-8">
          Up to <span className="text-red-500 font-bold">50% Off</span> on all collections. Grab your favorites now!
        </p>
        <Link
          href="/shop"
          className="px-6 py-3 bg-black text-white rounded-full font-medium shadow-md hover:bg-gray-800 transition duration-300"
        >
          Shop Now
        </Link>
        <div className="mt-8 relative">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={saleImages[saleIndex]}
            alt={`Season Sale ${saleIndex + 1}`}
          />
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {saleImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setSaleIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${index === saleIndex
                  ? "bg-red-500"
                  : "bg-gray-300 hover:bg-red-400"
                  } transition-colors duration-300`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Top Discounts */}
      <div className="relative bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        <div className="absolute top-0 left-0 bg-yellow-500 text-white text-xs uppercase py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
          Hot Deals
        </div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Top Discounts</h3>
        <p className="text-lg text-gray-700 mb-8">
          Save up to <span className="text-yellow-500 font-bold">70%</span> on selected items. Don't miss out!
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full font-medium shadow-md hover:bg-gray-800 transition duration-300">
          View Deals
        </button>
        <div className="mt-8 relative">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={discountImages[discountIndex]}
            alt={`Top Discount ${discountIndex + 1}`}
          />
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {discountImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setDiscountIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${index === discountIndex
                  ? "bg-yellow-500"
                  : "bg-gray-300 hover:bg-yellow-400"
                  } transition-colors duration-300`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <Footer />

    </>
  );
}
