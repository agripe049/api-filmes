import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Filme from './pages/Filme/Filme'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className='app'>
      <BrowserRouter>
        <Header onSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/filme/:id" element={<Filme />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
