import React, { useContext } from 'react'
import {Link, Links, useNavigate} from "react-router-dom"
import { AuthContext } from '../ContextApi/Context'

const Card = ({data}) => {

  const {bookid}=useContext(AuthContext);
  const Navigate = useNavigate();

  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}` ,
    bookid:bookid
  }

  const AddtoCart =()=>{

    const FetchCart= async ()=>{
     const response = await axios.put(`http://localhost:3000/api/v1/add-cart`,{},{headers})
     console.log(response);
     
    }
    FetchCart()
    Navigate("/cart")
   }

  return (
    <>
    <Link to={`/get-book-id/${data._id}`}> 
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 relative group bg-zinc-800">
    <img className="w-full h-64 object-cover group-hover:opacity-75 group-active:opacity-75 transition-opacity duration-300" src={data.url} alt={data.title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-white">{data.title}</div>
      <p className="text-gray-400 font-bold">{data.price}</p>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-1 group-hover:opacity-75 group-active:opacity-75 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      <p className="text-gray-300 text-base mb-2">{data.desc.slice(0,100)}</p>
      <p className="text-gray-300 mb-4">Author: {data.auther}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={AddtoCart}>
        Add to Cart
      </button>
    </div>
  </div>
    </Link>
    </>

  )
}

export default Card
