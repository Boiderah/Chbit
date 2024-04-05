import './App.css'
import Sigin from './Pages/SignInPage/Sigin'
import SignUp from './Pages/SignupPage/Signup'
import Home from './Pages/HomePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buy from './Component/Buy';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Sigin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Home />} /> 
      <Route path="/buy" element={<Buy />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
