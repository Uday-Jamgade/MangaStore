
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://mangastore-backend-1.onrender.com/api/v1/get-order-history", { headers });
      setOrders(response.data.data);
    };
    fetchData();
  }, [headers]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">📦 Order History</h1>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <p className="text-white text-center">No orders found.</p>
        ) : (
          orders.map(order => (
            <div key={order._id} className="bg-zinc-900 text-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Order ID:</span>
                <span className="text-sm break-all">{order._id}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Book ID:</span>
                <span className="text-sm break-all">{order.books}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Status:</span>
                <span className="text-sm">{order.status}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Created At:</span>
                <span className="text-sm">{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
