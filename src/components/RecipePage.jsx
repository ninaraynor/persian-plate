import { useParams } from 'react-router-dom'
import Recipe from './Recipe'
import { useState, useEffect } from 'react'


const RecipePage = () => {
    const { dishId } = useParams();
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`/api/dishes/${dishId}/recipes`);
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        
        fetchRecipes()
    }, [dishId])

    return (
        <div>
            <h1>Recipes for Dish {dishId}</h1>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipePage

