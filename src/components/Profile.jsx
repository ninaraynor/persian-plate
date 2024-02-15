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
          <div key={recipe.id} className="recipe-view-card">
            <h3>{recipe.title}</h3>
            <div className="recipe-details">
                <p>Portion Size: {recipe.portionSize}</p>
                <p>Prep Time: {!!recipe.prepTime && recipe.prepTime.value} {!!recipe.prepTime && recipe.prepTime.unit}</p>
                <p>Cooking Time: {!!recipe.cookingTime && recipe.cookingTime.value} {!!recipe.cookingTime && recipe.cookingTime.unit}</p>
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                    ))}
                </ul>
                <p>Full Name: {recipe.fullName}</p>
                <p>Family Origin: {recipe.familyOrigin}</p>
                <h2>Unique Ingredients:</h2>
                <ul>
                    {recipe.uniqueIngredients.map((uniqueIngredient, index) => (
                        <li key={index}>{uniqueIngredient}</li>
                    ))}
                </ul>
                <p>Instructions: {recipe.instructions}</p>
                <p>Created At: {new Date(recipe.createdAt).toLocaleString()}</p>
            </div>
            <div className="recipe-image">
                <img src={recipe.photo} alt={recipe.title} />
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default Profile
