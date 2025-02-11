import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import DashBoardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import Form from './components/Form'
import dataList from '../data.json'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState(dataList);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardPage products={products}/>} />
          <Route path="/addProduct" element={<Form  addProduct={addProduct}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ItemDetailsPage/:itemId" element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />


    </div>
  )
}

export default App
