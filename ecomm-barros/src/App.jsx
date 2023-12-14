import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { AddProducts } from './components/Products/AddProducts'

import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/addproducts' element={<AddProducts />} /> */}
      </Routes>
    </Router>
  )
}

export default App;
