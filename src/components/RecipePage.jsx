import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Recipe from './Recipe'
import Client from '../services/api'


const RecipePage = () => {
    const { dishId } = useParams();
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchRecipes = async () => {
            console.log('fetch recipes')
            try {
                const response = await Client.get(`/recipes/dishes/${dishId}`);
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchRecipes()
    }, [dishId])

    return (
        <div>
            <h1>Recipes for Dish</h1>
            {recipes && recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipePage