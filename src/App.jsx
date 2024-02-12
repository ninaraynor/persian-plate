import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Dishes from './components/Dishes'
import Profile from './components/Profile'
import AddRecipe from './components/AddRecipe'
import About from './components/About'


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
          <Route path='/profile' element={<Profile />}/>
          <Route path='/addrecipe' element={<AddRecipe />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
