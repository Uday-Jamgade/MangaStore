import React, { useContext, useState } from 'react'
import { FaHome, FaBook, FaQuoteRight, FaShoppingCart, FaUser,FaHamburger, } from 'react-icons/fa';
import { SiTaichigraphics } from 'react-icons/si'
import {Link, Links} from "react-router-dom"
import { AuthContext } from '../ContextApi/Context';


const Navbar = () => {

  const [displayItem,serDisplayItem]=useState("hidden");
  const {islogin,Role}=useContext(AuthContext);

  

  return (
    <div className="w-full sticky top-0 z-10 bg-black text-white">
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold"> OtakuShelf</div>
      <ul className="hidden md:flex gap-6 text-lg">
        <Link to="/">  <li className="hover:text-gray-400 cursor-pointer flex items-center"><FaHome className="mr-2" />Home</li></Link>
        <Link to="/category/?category=Biography"> <li className="hover:text-gray-400 cursor-pointer flex items-center"><FaBook className="mr-2" />Biography</li> </Link>
        <Link to="/category/?category=Novel" ><li   className="hover:text-gray-400 cursor-pointer flex items-center"><FaQuoteRight className="mr-2" />Novel</li></Link>
        <Link to="/category/?category=Manga"><li  className="hover:text-gray-400 cursor-pointer text-center flex items-center"><SiTaichigraphics />Graphical Novels <br/>& Manga</li></Link>
      
{islogin && <Link to="/cart"><li className="hover:text-gray-400 cursor-pointer flex items-center"><FaShoppingCart className="mr-2" />Cart</li></Link>}
          {islogin && <Link to="/profile"><li className="hover:text-gray-400 cursor-pointer flex items-center"><FaUser className="mr-2" />Profile</li></Link>}
          {!islogin && <Link to="/sign-up"><li className="hover:text-gray-400 cursor-pointer flex items-center"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button></li></Link>}
          {!islogin && <Link to="/login"><li className="hover:text-gray-400 cursor-pointer flex items-center"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Login</button></li></Link>}

      </ul>
      <div className="md:hidden">
        <button className= {`text-lg focus:outline-none`} onClick={()=>serDisplayItem(displayItem==="hidden" ? "block": "hidden")} >
              <FaHamburger  className="mr-2"  /> 
        </button>
        <ul className={`${displayItem} md:flex gap-6 text-lg`}>
        <Link to="/" onClick={()=>serDisplayItem("hidden")}>  <li className="hover:text-gray-400 cursor-pointer flex items-center"><FaHome className="mr-2" />Home</li></Link>
        <Link to="/category/?category=Biography" onClick={()=>serDisplayItem("hidden")}> <li className="hover:text-gray-400 cursor-pointer flex items-center"><FaBook className="mr-2" />Biography</li> </Link>
        <Link to="/category/?category=Novel" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><FaQuoteRight className="mr-2" />Novel</li></Link>
        <Link to="/category/?category=Manga" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><SiTaichigraphics /> Manga</li></Link>
      {islogin &&  <Link to="/cart" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><FaShoppingCart className="mr-2" />Cart</li> </Link>}
        {islogin && <Link to="/profile" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><FaUser className="mr-2" />Profile</li></Link>}
        {!islogin && <Link to="/sign-up" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</button></li></Link>}
        {!islogin && <Link to="/login" onClick={()=>serDisplayItem("hidden")}><li className="hover:text-gray-400 cursor-pointer flex items-center"><button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 mt-2 px-4 rounded'>Login</button></li></Link>}
      </ul>

      </div>
      
    </nav>
  </div>
  )
}

export default Navbar
