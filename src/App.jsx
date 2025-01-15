import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CoinPage from './pages/CoinPage/CoinPage'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/coin/:coinId' element={<CoinPage />} />
      </Routes>
    </div>
  )
}

export default App

// CG-K2Tpp11awwTczfF58v9hkEmw