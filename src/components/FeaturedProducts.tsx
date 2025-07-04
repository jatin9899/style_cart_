
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Handbag",
    price: 299,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    category: "handbags",
    brand: "StyleCart"
  },
  {
    id: 2,   
    name: "Modern Backpack",
    price: 149,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop", 
    category: "backpacks",
    brand: "StyleCart"
  },
  {
    id: 3,
    name: "Designer Tote Bag",
    price: 199,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop",
    category: "totes", 
    brand: "StyleCart"
  },
  {
    id: 4,
    name: "Evening Clutch",
    price: 89,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&h=500&fit=crop",
    category: "handbags",
    brand: "StyleCart"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Handpicked favorites from our latest collection</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
