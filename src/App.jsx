import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashBoardPage from './pages/DashBoardPage'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <div className='main-content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer/>

 
    </div>
  )
}

export default App
