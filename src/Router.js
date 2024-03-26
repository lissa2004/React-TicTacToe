import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Games from './pages/games/Games'
import Header from './components/Header/Header'

function Router() {
  return (
    <BrowserRouter>
    <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/games' element={<Games />} />
       </Routes>
    </BrowserRouter>
  )
}

export default Router