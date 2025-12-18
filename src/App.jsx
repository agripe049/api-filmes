import './App.css'
import Filme from './pages/Filme/Filme'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/filme/:id" element={<Filme />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
