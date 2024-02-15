import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Recipe from './Recipe'


const RecipeDetails = () => {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [deleted, setDeleted] = useState(false)

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
    }, [recipeId, deleted])

    const handleDelete = async () => {
        try {
            await Client.delete(`/recipes/${recipeId}`)
            setDeleted(true)
            setTimeout(() => {
                history.push('/recipe-details')
            }, 1000) 
        } catch (error) {
            console.error('Error deleting recipe:', error)
        }
    }

    return (
        <div className="recipe-details-container">
            {recipe && !deleted && (
                <>
                    <Recipe recipe={recipe} />
                    <button onClick={handleDelete}>Delete Recipe</button>
                </>
            )}
            {deleted && <p>Recipe deleted.</p>}
        </div>
    )
}

export default RecipeDetails
