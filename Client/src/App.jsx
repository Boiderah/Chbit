import './App.css'
import Sigin from './Pages/SignInPage/Sigin'
import SignUp from './Pages/SignupPage/Signup'
// import SignUp from './Pages/Company/Company'
import Home from './Pages/HomePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buy from './Component/Buy';
import Navbar from './Component/Navbar';
import Landing from './Pages/LandingPage/Landing';
import Footer from './Component/Footer';
import Company from './Pages/Company/Company';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Sigin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Home />} /> 
      <Route path="/buy" element={<Buy />} /> 
      <Route path="/navbar" element={<Navbar />} /> 
      <Route path="/footer" element={<Footer />} /> 
      <Route path="/landing" element={<Landing />} /> 
      <Route path="/company" element={<Company />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
