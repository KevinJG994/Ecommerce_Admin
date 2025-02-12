import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import dataList from '../data.json'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import DashBoardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ItemDetailsPage from './pages/ItemDetailsPage'

import Form from './components/Form'

function App() {
  const [products, setProducts] = useState(dataList);

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardPage products={products} deleteProduct={deleteProduct} />} />
          <Route path="/addProduct" element={<Form addProduct={addProduct} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ItemDetailsPage/:itemId" element={<ItemDetailsPage products={products} updateProduct={updateProduct} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
