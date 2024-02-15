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
import RecipePage from './components/RecipePage'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import { CheckSession } from './services/Auth.js'
import RecipeDetails from './components/RecipeDetails'
import Footer from './components/Footer'


function App() {
  const [user, setUser] = useState(null)
  const [dishes, setDishes] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const getDishes = async () => {
      let res = await Client.get('/dishes')
      setDishes(res.data)
    }
    getDishes()
  }, [])

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear()
  }

  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dishes' element={<Dishes dishes={dishes} />} />
          <Route path="/profile" element={<Profile userId={user?.id} />} />
          <Route path='/addrecipe' element={<AddRecipe userId={user?.id}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/dishes/:dishId/recipes' element={<RecipePage />} />
          <Route path='/signin' element={<SignIn setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
          <Route path="/recipes" element={RecipePage} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
