

const Recipe = ({ recipe }) => {
    return (
        <div className="recipe-container">
            <h1>{recipe.title}</h1>
            <div className="recipe-details">
                <p>Portion Size: {recipe.portionSize}</p>
                <p>Prep Time: {recipe.prepTime.value} {recipe.prepTime.unit}</p>
                <p>Cooking Time: {recipe.cookingTime.value} {recipe.cookingTime.unit}</p>
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
    )
}

export default Recipe
