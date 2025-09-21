import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card';
import { Link, useLocation } from 'react-router-dom'; 
import { ImQuotesLeft } from "react-icons/im";
import { GiTargetPoster } from "react-icons/gi"    
function Category() {

     const [data,SetData]=useState("");
     const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  // console.log(category);
    
      useEffect(()=>{
        const fetchData = async () => {
          try {
            const response = await axios.get("https://mangastore-backend-1.onrender.com/api/v1//get-book-category?category="+category);
            SetData(response.data.data); // Update the state with the response data
            // console.log(response);
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        fetchData();
      },[category])
  return (
    <div className=''> 
      <div className='  flex flex-wrap gap-3  justify-center my-8 '>
    {data.length > 0 ? (
      data.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))
    ) : (
      // <div>Loading...</div>
      <div className="flex justify-center items-center w-full h-96">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-400"></div>
</div>

    )}
    {category === "Manga" && (
  <div className="fixed bottom-34 right-4 flex gap-2">
   <Link to="/poster"><button className="bg-gray-400 text-white px-4  text-xl py-4 rounded shadow-md hover:bg-gray-500 transition"><GiTargetPoster /></button></Link>
   <Link to="/quotes"><button className="bg-gray-400 text-white px-4 text-xl py-4 rounded shadow-md hover:bg-gray-500 transition"><ImQuotesLeft /></button></Link>
  </div>
)}
   
  </div>
        
    </div>
  )
}

export default Category
