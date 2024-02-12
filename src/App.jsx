import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Dishes from './components/Dishes'
import Profile from './components/Profile'
import AddRecipe from './components/AddRecipe'
import About from './components/About'
import Client from './services/api.js'


function App() {

  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const getDishes = async () => {
      let res = await Client.get('/dishes')
      setDishes(res.data)
    }
    getDishes()
  }, [])

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dishes' element={<Dishes dishes={dishes}/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/addrecipe' element={<AddRecipe />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
