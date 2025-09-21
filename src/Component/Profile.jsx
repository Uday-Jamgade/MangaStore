import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../ContextApi/Context';
import {Link, Outlet} from "react-router-dom"


const Profile = () => {
  const {role,islogin}=useContext(AuthContext);
  const [user,setUser]=useState({});

  const headers={
    id: localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}` ,
  }

  


useEffect(()=>{
  const fetchData=async ()=>{
    const response = await axios.get("https://mangastore-backend-1.onrender.com/api/v1/get-user-information", {headers});
  // console.log(response);
  setUser(response.data);

  }
  
  fetchData()
},[])

  return (
    <div className="flex">
    <div className="p-4 bg-zinc-900 rounded shadow-md w-64">
      <div className="mb-4">
        <img
          src={user.avtar}
          alt="Profile Image"
          className="rounded-full w-32 h-32 object-cover mx-auto"
        />
      </div>
      <h1 className="text-2xl text-white font-bold mb-4 text-center">Profile</h1>
      <div className="mb-4 text-white">
        <h2 className="text-xl font-semibold">User Information</h2>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
      </div>

      <nav className="space-y-4">
        {
          role === "admin" ?  <Link to='/profile/add' className="block py-2 px-4 rounded text-2xl font-bold text-blue-500 hover:bg-blue-100">
          Add Product
        </Link>:  <Link to='/profile' className="block py-2 px-4 rounded text-2xl font-bold text-blue-500 hover:bg-blue-100">
          Order History
        </Link>
        }

        <Link to='/profile/setting' className="block py-2 px-4 rounded text-2xl font-bold text-blue-500 hover:bg-blue-100">
          Setting
        </Link>
      </nav>
    </div>
    <div className="flex-grow p-4">
    <Outlet/>
    
    </div>
  </div>
  )
}

export default Profile
