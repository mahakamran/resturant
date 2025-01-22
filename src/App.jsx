import React from 'react'
import Navbar from './components/Navbar'
import { FaBars } from "react-icons/fa"; // FontAwesome bars icon
import { AiOutlineClose } from "react-icons/ai"; // Ant Design close icon
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';




const App = () => {
  return (
    <>

    
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
      </Routes>
   
    </>
    

  )
}

export default App