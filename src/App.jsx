import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {

  return (
    <>
      {/* path for landing, Home , History */}
       {/* header */}
       <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>

      {/* footer */}
      <Footer/>
    </>
  )
}

export default App
