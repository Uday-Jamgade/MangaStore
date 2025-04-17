import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card';

const Manga = () => {
  const [data,SetData]=useState("");

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/get-book");
        SetData(response.data.data); // Update the state with the response data
        console.log(response);
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  },[])
    
  return (
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
  )
}

export default Manga
