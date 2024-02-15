import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Recipe from './Recipe'


const RecipeDetails = () => {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await Client.get(`/recipes/${recipeId}`)
                setRecipe(response.data)
            } catch (error) {
                console.error('Error fetching recipe:', error)
            }
        }
        fetchRecipe()
    }, [recipeId])

    return (
        <div className="recipe-details-container">
            {recipe && <Recipe recipe={recipe} />}
        </div>
    )
}

export default RecipeDetails
