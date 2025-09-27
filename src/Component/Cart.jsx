import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../ContextApi/Context'
import axios from 'axios'
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Cart = () => {

  const [cartItems,setCartItems]=useState()
  const [Total,setTotal]=useState(0)

  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}` ,
  }

  const handleCheckout=async()=>{
    try{
      const response =await axios.post("https://mangastore-backend-1.onrender.com/api/v1/place-order",{order:cartItems},{headers});
      console.log( response.data)
     toast.success("Order Placed Successfully!")
    }
    catch (error){
      console.error("error",error)
      toast.error("Error placing order: " + (error.response ? error.response.data.message : "Network Error"));
    }
  

  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mangastore-backend-1.onrender.com/api/v1/get-user-cart', { headers });
        setCartItems(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cartItems]);



  const handleDelete= async (e,bookid)=>{
    e.preventDefault();
    const response = await axios.put(`https://mangastore-backend-1.onrender.com/api/v1/remove-cart/${bookid}`,{},{headers})
    setCartItems(response.data.data)
     alert("Item Deleted")
  }

  useEffect(()=>{
    // if(cartItems && cartItems.length > 0){
    //  let total = 0;
    //  cartItems.map((item) => {
    //   total += item.price;
    // });
    //  setTotal(total);
    // }
    if (cartItems && cartItems.length > 0) {
      let total = 0;
      cartItems.map((item) => {
        total += parseFloat(item.price); // Convert string price to number
      });
      setTotal(total);
    }
  },[cartItems])

  return (
    <div className="container mx-auto p-4 h-screen">
      <h2 className="text-2xl text-white font-bold mb-4">Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item._id} className="bg-white shadow-md rounded p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(e,item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
          <h3 className="text-xl text-white font-bold">Total Amount: <span className="text-red-600">${Total}</span></h3>
          <button
            onClick={handleCheckout}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
        </>
      ) : (
        <p className="text-white text-5xl text-center ">Your cart is empty.</p>
      
      )}
    </div>
    
  )
}

export default Cart
