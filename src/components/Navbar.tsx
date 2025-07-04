
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import AuthButtons from './AuthButtons';

const Navbar = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 md:hidden" />
            <Link to="/" className="ml-4 md:ml-0 text-2xl font-bold text-gray-900">
              StyleCart
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Shop
            </Link>
            <Link to="/catalog?category=handbags" className="text-gray-700 hover:text-gray-900 transition-colors">
              Handbags
            </Link>
            <Link to="/catalog?category=backpacks" className="text-gray-700 hover:text-gray-900 transition-colors">
              Backpacks
            </Link>
            <Link to="/catalog?category=totes" className="text-gray-700 hover:text-gray-900 transition-colors">
              Totes
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
            <AuthButtons />
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
