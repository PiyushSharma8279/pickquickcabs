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
import TermsAndCondition from './Pages/TermsAndCondition/TermsAndCondition'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import DelhiToDehradun from './Pages/DelhiToDehradun'
import DelhiToRishikesh from './Pages/DelhiToRishikesh'
import DelhiToHaridwar from './Pages/DelhiToHaridwar'
import DelhiToNainital from './Pages/DelhiToNanital'
import DelhiToHaldwani from './Pages/DelhiToHaldwani'
import DelhiToRudrapur from './Pages/DelhiToRudrapur'
import DelhiToAgra from './Pages/DelhiToAgra'
import DelhiToMathura from './Pages/DelhiToMathura'
import DelhiToJaipur from './Pages/DelhiToJaipur'
import DelhiToKainchiDham from './Pages/DelhiToKainchiDham'
import DelhiToMussoorie from './Pages/DelhiToMassoori'
import DelhiToShimla from './Pages/DelhiToShimla'
import DelhiToManali from './Pages/DelhiToManali'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/our-taxi-service' element={<OurTaxi/>}/>
      <Route path='/blog' element={<BlogGrid/>}/>
      <Route path='/book-a-ride' element={<BookARide/>}/>
      <Route path='/contact-us' element={<MyMap/>}/>
      <Route path='/outstation-cab-service-near-me' element={<OutStation/>}/>
      <Route path='/char-dham-yatra-cab-service' element={<NoidaToChardham/>}/>
      <Route path='terms-and-conditions' element={<TermsAndCondition/>}/>
      <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='delhi-to-dehradun-taxi-service' element={<DelhiToDehradun/>}/>
      <Route path='delhi-to-rishikesh-taxi-service' element={<DelhiToRishikesh/>}/>
      <Route path='delhi-to-haridwar-taxi-service' element={<DelhiToHaridwar/>}/>
      <Route path='delhi-to-nanital-taxi-service' element={<DelhiToNainital/>}/>
      <Route path='delhi-to-haldwani-taxi-service' element={<DelhiToHaldwani/>}/>
      <Route path='delhi-to-rudrapur-taxi-service' element={<DelhiToRudrapur/>}/>
      <Route path='delhi-to-agra-taxi-service' element={<DelhiToAgra/>}/>
      <Route path='delhi-to-mathura-taxi-service' element={<DelhiToMathura/>}/>
      <Route path='delhi-to-jaipur-taxi-service' element={<DelhiToJaipur/>}/>
      <Route path='delhi-to-kainchi-dham-taxi-service' element={<DelhiToKainchiDham/>}/>
      <Route path='delhi-to-mussoorie-taxi-service' element={<DelhiToMussoorie/>}/>
      <Route path='delhi-to-shimla-taxi-service' element={<DelhiToShimla/>}/>
      <Route path='delhi-to-manali-taxi-service' element={<DelhiToManali/>}/>






















    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
