import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importamos los componentes de interface
import Navbar from './components/Navbar'
import Main from './components/Main'
import Turnos from './pages/Turnos'
import Admin from './pages/Admin'


function App() {
  const [count, setCount] = useState(0)
  const [countdos, setCountDos] = useState(0)

  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Turnos" element={<Turnos/>}/>
            <Route path="/Admin" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>

  )
}

export default App
