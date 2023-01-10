import React from 'react'
import './app.css'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import Login from './pages/Login'
import Product from './pages/Product'
  import Register from './pages/Register'
import Home from './pages/Home'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
 import ProductList from './pages/ProductList'

function App() {
  return (
  <Router>
    <Announcement/>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/Product' element={<Product/>}/>
     <Route path='/ProductList' element={<ProductList/>}/>
     <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Newsletter/>
    <Footer/>
  </Router>
  )
}

export default App