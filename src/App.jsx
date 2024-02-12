import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Dishes from './components/Dishes'


function App() {

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dishes' element={<Dishes />}/>
          <Route />
          <Route />
        </Routes>
      </main>
    </div>
  )
}

export default App
