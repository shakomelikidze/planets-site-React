import './App.css'
import backgroundImage from '../assets/background-stars.svg';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Planet from './pages/Planet'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:planet' element={<Planet/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
