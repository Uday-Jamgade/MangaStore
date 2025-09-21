import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Order = () => {

  const [orders, setOrders] = useState([]);
  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}` ,
  } 

  useEffect(()=>{
    const fetchData=async()=>{
      const response = await axios.get("https://mangastore-backend-1.onrender.com/api/v1/get-order-history",{headers})
      setOrders(response.data.data)
      // console.log(orders);
      
    }
    fetchData()
  },[headers])
  return (
    <div className="container mx-auto px-4 h-130 py-8">
    <h1 className="text-2xl font-bold text-white mb-4">Order History</h1>
    <table className="min-w-full bg-zinc-900 text-white border">
        <thead>
            <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Book ID</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Created At</th>
            </tr>
        </thead>
        <tbody>
            {orders.map(order => (
                <tr key={order._id} className='justify-center text-white'>
                    <td className="py-2 px-4 border-b ">{order._id}</td>
                    <td className="py-2 px-4 border-b">{order.books}</td>
                    <td className="py-2 px-4 border-b">{order.status}</td>
                    <td className="py-2 px-4 border-b">{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Order
