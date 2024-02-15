import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Recipe from './Recipe'
import { Link } from 'react-router-dom'


const RecipeDetails = () => {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [dish, setDish] = useState(null)
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
    //res.redirect

    return (
        <div className="recipe-details-container">
            {recipe && !deleted && (
                <>
                    <Recipe recipe={recipe} />
                    <button onClick={handleDelete}>Delete Recipe</button>
                </>
            )}
            {deleted && <p>Recipe deleted.</p>}
            <Link to="/dishes"><button className="dishes-button"> Back to Recipes</button></Link>
        </div>
    )
}

export default RecipeDetails
