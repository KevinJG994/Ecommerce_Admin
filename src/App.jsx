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
import UpdateForm from './components/UpdateForm'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/addProduct" element={<Form />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ItemDetailsPage/:itemId" element= {<ItemDetailsPage />}/>
          <Route path="/updateForm" element={<UpdateForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer/>

 
    </div>
  )
}

export default App
