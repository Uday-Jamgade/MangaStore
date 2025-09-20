import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card';
import { useLocation } from 'react-router-dom'; 

function Category() {

     const [data,SetData]=useState("");
     const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  console.log(category);
    
      useEffect(()=>{
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3000/api/v1//get-book-category?category="+category);
            SetData(response.data.data); // Update the state with the response data
            console.log(response);
            
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
        }
    
        fetchData();
      },[])
  return (
    <div>
      <div className='  flex flex-wrap gap-3 justify-center my-8 '>
    {data.length > 0 ? (
      data.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))
    ) : (
      <div>Loading...</div>
    )}
  </div>
      
    </div>
  )
}

export default Category
