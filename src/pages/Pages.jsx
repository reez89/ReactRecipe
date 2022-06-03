import Home from './Home'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cousine from './Cousine'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'


export default function Pages() {
    const location = useLocation();
    return (
        /* All'interno del tag Routes possiamo definire i path, e i componenti relativi a quel path, come in angular all'interno del Routes Model */
        /* Type ci permette di navigare verso altre pagine */
        <AnimatePresence exitBeforeEnter >
            <Routes location={location} key={location.pathname}> 
                <Route path='/' element={<Home />} />
                <Route path='/cousine/:type' element={<Cousine />} />
                <Route path='/searched/:search' element={<Searched />} />
                <Route path='/recipe/:id' element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

