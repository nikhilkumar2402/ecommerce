import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Details from './components/Details'
import { Route, Routes } from 'react-router-dom'
import AddProducts from './components/AddProducts'
import EditProduct from './components/EditProduct'
import Search from './components/Search'

function App() {
  return (
    <div className='h-screen w-full flex'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProducts />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
