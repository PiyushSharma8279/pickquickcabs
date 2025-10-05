import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About/About'
import OurTaxi from './Pages/OurTaxi/OurTaxi'
import BlogGrid from './Pages/Blog/Blog'
import BookARide from './Pages/BookARide/BookARide'
import MyMap from './Pages/Contact/Contact'
import OutStation from "./Pages/OutStation/OutStation"
import NoidaToChardham from './Pages/ChardhamYatra/Chardham'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/our-taxi' element={<OurTaxi/>}/>
      <Route path='/blog' element={<BlogGrid/>}/>
      <Route path='/book-a-ride' element={<BookARide/>}/>
      <Route path='/contact' element={<MyMap/>}/>
      <Route path='/out-station' element={<OutStation/>}/>
      <Route path='/char-dham' element={<NoidaToChardham/>}/>








    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
