
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderTracking = () => {
  const { orderId } = useParams();

  const orderStatus = {
    orderId: orderId || 'N/A',
    status: 'processing',
    estimatedDelivery: '3-5 business days',
    items: [
      { name: 'Classic Leather Handbag', quantity: 1, price: 299 },
      { name: 'Modern Backpack', quantity: 1, price: 149 }
    ],
    total: 483.84,
    shippingAddress: '123 Main St, New York, NY 10001'
  };

  const statusSteps = [
    { key: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, completed: true },
    { key: 'processing', label: 'Processing', icon: Package, completed: true },
    { key: 'shipped', label: 'Shipped', icon: Truck, completed: false },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle, completed: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/orders"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to orders
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
          <p className="text-gray-600">Order ID: #{orderStatus.orderId}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status</h2>
              
              <div className="space-y-6">
                {statusSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.key} className="flex items-center">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.label}
                        </h3>
                        {step.key === 'processing' && step.completed && (
                          <p className="text-sm text-gray-600">Your order is being prepared for shipment</p>
                        )}
                      </div>
                      {index < statusSteps.length - 1 && (
                        <div className={`absolute left-5 mt-10 h-6 w-0.5 ${
                          step.completed ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-4">
                {orderStatus.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-gray-900">${item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Estimated Delivery</p>
                  <p className="text-gray-600">{orderStatus.estimatedDelivery}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Shipping Address</p>
                  <p className="text-gray-600">{orderStatus.shippingAddress}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${(orderStatus.total / 1.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(orderStatus.total - (orderStatus.total / 1.08)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>${orderStatus.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
