import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { Link } from 'react-router-dom'


const RecipePage = () => {
    const { dishId } = useParams()
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const fetchRecipes = async () => {
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
        <div className="recipes-container">
            <h1>Recipes</h1>
            <div className="recipes-grid">
                {recipes && recipes.map(recipe => (
                    <div className='recipe-card' key={recipe._id}>
                        <h4>{recipe.title}</h4>
                        <div className="recipe-page-details">
                        <p>Family Origin: {recipe.familyOrigin}</p>
                        <p>Unique Ingredients:</p>
                        <div className="recipe-image">
                            <img src={recipe.photo} alt={recipe.title} />
                        </div>
                        <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                    </div>
                    </div>
                ))}
            </div>
            <Link to="/dishes"><button className="dishes-button"> Back to Dishes</button></Link>
        </div>
        
    );
};

export default RecipePage