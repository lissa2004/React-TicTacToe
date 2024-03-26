import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Games from './pages/games/Games';
import Header from './components/Header/Header';
import {ModelContexProvider} from './contexts/ModelContext';

function Router() {
  return (
    <BrowserRouter>
    <ModelContexProvider>
    <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/games' element={<Games />} />
       </Routes>
    </ModelContexProvider>
    </BrowserRouter>
  )
}

export default Router