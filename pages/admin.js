import React, { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Admin = () => {
  const router = useRouter();
  const [adminAuth, setAdminAuth] = useState(true); // Change to `false` to simulate unauthorized access.
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add product to the product list
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.image || !formData.description) {
      alert('Please fill in all fields.');
      return;
    }

    const newProduct = {
      id: products.length + 1,
      ...formData,
      price: parseFloat(formData.price).toFixed(2), // Ensure price is formatted
    };

    setProducts([...products, newProduct]);
    setFormData({
      name: '',
      price: '',
      image: '',
      description: '',
    });

    alert('Product added successfully!');
  };

  // Redirect unauthorized users
  if (!adminAuth) {
    router.push('/'); // Redirect to home if not authorized
    return null;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Admin Page */}
      <section className="py-20 pt-24">
        <div className="container mx-auto px-6">
          {/* Back to Home Button */}
          <div className="flex justify-end mb-6">
            <Link href="/">
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Admin Panel</h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add New Product</h3>

            <form onSubmit={handleAddProduct} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  Product Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter product price"
                  required
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Product Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter image URL"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Product Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter product description"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Add Product
              </button>
            </form>
          </div>

          {/* Product List */}
          {products.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Products List</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Admin;
