import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import AddRecipe from './AddRecipe'

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({})

  const fetchRecipe = async () => {
    try {
      const response = await Client.get(`/recipes/${recipeId}`)
      setRecipe(response.data)
    } catch (error) {
      console.error('Error fetching recipe:', error)
    }
  }

  useEffect(() => {
    fetchRecipe()
  }, [recipeId])

  return (
    <div className="detail">
      <h2>{recipe.title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
      <p>Instructions:</p>
      <ol>
        {recipe.instructions ? (
          recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))
        ) : (
          <li>No instructions available</li>
        )}
      </ol>
    </div>
  )
}

export default RecipeDetails
