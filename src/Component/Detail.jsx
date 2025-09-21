import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from "axios";
import { AuthContext } from '../ContextApi/Context';


const Detail = () => {
  const {id} = useParams();
  const [data,SetData]=useState({});
  const {getBookid} = useContext(AuthContext)

  getBookid(id);
  
  
  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}` ,
    bookid:id
  }


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/get-book-id/${id}`);
        SetData(response.data.data); // Update the state with the response data
        // console.log(response);
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  },[id])

 const AddtoCart =()=>{

  const FetchCart= async ()=>{
   const response = await axios.put(`http://localhost:3000/api/v1/add-cart`,{},{headers})
  }
  FetchCart()
  alert("Book added to cart")
 }

  return (
    <div className="min-h-screen bg-zinc-900 flex justify-center items-center py-10">
      {data ? (
        <div className="max-w-6xl mx-auto bg-zinc-800 rounded-lg shadow-md overflow-hidden p-6 flex flex-col md:flex-row items-center">
          <img className="w-full md:w-1/2 h-64 object-cover mb-6 md:mb-0 md:mr-6" src={data.url}alt={data.title} />
          <div className="flex flex-col flex-grow ">
            <h1 className="text-3xl text-white font-bold mb-4">{data.title}</h1>
            <p className="text-white mb-2"><span className="font-semibold">Author:</span> {data.auther}</p>
            <p className="text-white mb-2"><span className="font-semibold">Language:</span> {data.language}</p>
            <p className="text-white mb-4"><span className="font-semibold">Description:</span> {data.desc}</p>
            <p className="text-white mb-4"><span className="font-semibold">Price:</span> {data.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700" onClick={AddtoCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
);
  
}

export default Detail
