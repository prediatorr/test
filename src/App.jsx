//import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpasHotTubs from './components/SpasHotTubs';
import SwimSpas from './components/SwimSpas';
import FitnessSpas from './components/FitnessSpas';
import Assessories from './components/Assessories';
import Discover from './components/Discover';
import Contact from './components/Contact';
import './App.css'

function App() {

    return (
        <BrowserRouter>
            <Nav />
            <div className='main'>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/spashottubs' element={ <SpasHotTubs /> } />
                <Route path='/swimspas' element={ <SwimSpas /> } />
                <Route path='/fitnessspas' element={ <FitnessSpas /> } />
                <Route path='/assessories' element={ <Assessories /> } />
                <Route path='/discover' element={ <Discover /> } />
                <Route path='/contact' element={ <Contact /> } />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
