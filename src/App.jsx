import React from 'react';
import Main from "./Pages/Main/Main"
import Pricing from './Pages/Pricing/Pricing';
import About from './Pages/About Us/About';
import { Routes , Route } from 'react-router-dom';
import Contect from './Pages/Contact/Contect';
function App() {


  return (  <>
  <Routes>

    <Route path='/'  element={<Main/>}/>
    <Route path="/price" element ={<Pricing/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contect/>}/>
  </Routes>
   </>
  )
}

export default App
