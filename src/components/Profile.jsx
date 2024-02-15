import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = ({ userId }) => {
  const [userRecipes, setUserRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        console.log(userId)
        const response = await axios.get(`/recipes/users/${userId}`)
        console.log(response)
        setUserRecipes(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user recipes:', error)
        setLoading(false)
      }
    }

    if (userId) {
      fetchUserRecipes()
    }
  }, [userId])

  if (!Array.isArray(userRecipes)) {
    console.error('userRecipes is not an array:', userRecipes)
    return <div>Error: Unable to fetch user recipes.</div>
  }

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <h2>My Recipes</h2>
      <div className="recipe-list">
        {userRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
