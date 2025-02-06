import './App.css'
import Footer from './components/Footer'
import List from './components/List'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Sidebar/>
      <Footer/>
      <List/>
    </div>
  )
}

export default App
