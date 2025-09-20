import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Manga from './Component/Manga'
import Poster from './Component/Poster'
import Profile from './Component/Profile'
import Quotes from './Component/Quotes'
import Cart from './Component/Cart'
import Detail from './Component/Detail'
import SignUp from './Component/SignUp'
import Login from './Component/Login'
import { AuthContext, AuthProvider } from './ContextApi/Context'
import Order from './Component/Order'
import Setting from './Component/Setting'
import { useContext } from 'react'
import AddManga from './Component/AddManga'
import Category from './Component/Category'

function App() {

  const role  = useContext(AuthContext)
  return (
    <div className='bg-zinc-700'>
       <AuthProvider>
      <Router>
       
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/all-book' element={<Manga/>}></Route>
        <Route  path='/quotes' element={<Quotes/>}></Route>
        <Route  path='/poster' element={<Poster/>}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
        <Route  path='/profile' element={<Profile/>}>

          <Route index element={<Order/>}></Route> 
          <Route path='/profile/add' element={<AddManga/>}></Route> 
         <Route path='/profile/setting' element={<Setting/>}></Route>
        </Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/sign-up' element={<SignUp/>}></Route>
        <Route  path='/get-book-id/:id' element={<Detail/>}></Route>
        <Route  path='/category' element={<Category/>}></Route>
      </Routes>
 
    <Footer/>
    </Router>
        </AuthProvider>

     
   
    </div>
  )
}

export default App
