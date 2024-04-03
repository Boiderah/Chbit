import './App.css'
import Sigin from './Pages/SignInPage/Sigin'
import SignUp from './Pages/SignupPage/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
