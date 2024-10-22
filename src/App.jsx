
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Wedding from './pages/Wedding'
import Engagement from './pages/Engagement'
import Register from './pages/Register'
import Family from './pages/Family'

function App() {

  return (
    <>
   <Header/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/wedding'element={<Wedding/>}/>
    <Route path='/engage' element={<Engagement/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/family' element={<Family/>}/>

   </Routes>
   <Footer/>
   
    </>
  )
}

export default App
