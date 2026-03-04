
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import LoginPage from './Pages/LoginPage'
import LandingPage from './Pages/LandingPage'





function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/Login" element={<LoginPage/>} />
    </Routes>
    
    </BrowserRouter>


  </>
  )
}

export default App
