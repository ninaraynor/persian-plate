

const Recipe = ({ recipe }) => {
    return (
        <div className="recipe-container">
            <h3>{recipe.title}</h3>
            <div className="recipe-details">
                <p>Portion Size: {recipe.portionSize}</p>
                <p>Prep Time: {!!recipe.prepTime && recipe.prepTime.value} {!!recipe.prepTime && recipe.prepTime.unit}</p>
                <p>Cooking Time: {!!recipe.cookingTime && recipe.cookingTime.value} {!!recipe.cookingTime && recipe.cookingTime.unit}</p>
                <p>Ingredients:</p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                    ))}
                </ul>
                <p>Full Name: {recipe.fullName}</p>
                <p>Family Origin: {recipe.familyOrigin}</p>
                <p>Unique Ingredients:</p>
                <ul>
                    {recipe.uniqueIngredients.map((uniqueIngredient, index) => (
                        <li key={index}>{uniqueIngredient}</li>
                    ))}
                </ul>
                <p>Instructions: {recipe.instructions}</p>
                <p>Created At: {new Date(recipe.createdAt).toLocaleString()}</p>
            <div className="recipe-image">
                <img src={recipe.photo} alt={recipe.title} />
            </div>
        </div>
    </div>
    )
}

export default Recipe
