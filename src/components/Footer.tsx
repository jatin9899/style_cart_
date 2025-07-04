
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">StyleCart</h3>
            <p className="text-gray-400">
              Premium bags for the modern lifestyle. Quality craftsmanship meets contemporary design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/catalog?category=handbags" className="hover:text-white">Handbags</Link></li>
              <li><Link to="/catalog?category=backpacks" className="hover:text-white">Backpacks</Link></li> 
              <li><Link to="/catalog?category=totes" className="hover:text-white">Totes</Link></li>
              <li><Link to="/catalog" className="hover:text-white">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/orders" className="hover:text-white">Order Tracking</Link></li>
              <li><Link to="/cart" className="hover:text-white">Shopping Cart</Link></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 StyleCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
