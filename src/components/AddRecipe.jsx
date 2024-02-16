import { useState, useEffect } from 'react'
import Client from '../services/api'


const RecipeForm = ({ recipe, userId }) => {
    const initialFormState = {
        createdBy: userId,
        title: '', 
        portionSize: '', 
        prepTime: { value: '', unit: 'minutes' }, 
        cookingTime: { value: '', unit: 'minutes' }, 
        ingredients: [], 
        fullName: '', 
        familyOrigin: '', 
        uniqueIngredients: [], 
        instructions: '', 
        photo: '' 
    };

    const [form, setForm] = useState(initialFormState);
    const [dishes, setDishes] = useState([]);
    

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await Client.get('/dishes')
                setDishes(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDishes()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('prepTime') || name.includes('cookingTime')) {
            const [field, subfield] = name.split('.');
            setForm({
                ...form,
                [field]: { ...form[field], [subfield]: value }
            });
        } else if (name === 'uniqueIngredients') {
            const ingredientsArray = value.split(',').map(ingredient => ingredient.trim());
            setForm({ ...form, [name]: ingredientsArray });
        } else {
            setForm({ ...form, [name]: value });
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newRecipe = {
                createdBy: form.createdBy,
                recipeType: form.recipeType,
                title: form.title,
                portionSize: form.portionSize,
                prepTime: {
                    value: form.prepTime.value,
                    unit: form.prepTime.unit
                },
                cookingTime: {
                    value: form.cookingTime.value,
                    unit: form.cookingTime.unit
                },
                ingredients: form.ingredients,
                fullName: form.fullName,
                familyOrigin: form.familyOrigin,
                uniqueIngredients: form.uniqueIngredients,
                instructions: form.instructions,
                photo: form.photo
            }

            await Client.post('/recipes', newRecipe)
            setForm(initialFormState)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="recipeForm">
                <h2>Add A Recipe</h2>
                <div className="formDiv">
                    <label htmlFor="recipeType">Dish Type:</label>
                    <select
                        name="recipeType"
                        onChange={handleChange}
                        value={form.recipeType}
                    >
                        <option value="">Select a Dish</option>
                        {dishes.map(dish => (
                        <option key={dish._id} value={dish._id}>{dish.title}</option>
                        ))}
                    </select>
                 </div>

                <div className="formDiv">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        onChange={handleChange}
                        value={form.title}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="portionSize">Portion Size:</label>
                    <input
                        type="text"
                        name="portionSize"
                        placeholder="Enter Portion Size"
                        onChange={handleChange}
                        value={form.portionSize}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="prepTime.value">Preparation Time:</label>
                    <input
                        type="number"
                        name="prepTime.value"
                        placeholder="Enter Preparation Time"
                        onChange={handleChange}
                        value={form.prepTime.value}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="prepTime.unit">Preparation Unit:</label>
                    <select
                        name="prepTime.unit"
                        onChange={handleChange}
                        value={form.prepTime.unit}
                    >
                        <option value="seconds">Second(s)</option>
                        <option value="minutes">Minute(s)</option>
                        <option value="hours">Hour(s)</option>
                        <option value="days">Day(s)</option>
                    </select>
                </div>

                <div className="formDiv">
                    <label htmlFor="cookingTime.value">Cooking Time:</label>
                    <input
                        type="number"
                        name="cookingTime.value"
                        placeholder="Enter Cooking Time"
                        onChange={handleChange}
                        value={form.cookingTime.value}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="cookingTime.unit">Cooking Unit:</label>
                    <select
                        name="cookingTime.unit"
                        onChange={handleChange}
                        value={form.cookingTime.unit}
                    >
                        <option value="seconds">Second(s)</option>
                        <option value="minutes">Minute(s)</option>
                        <option value="hours">Hour(s)</option>
                        <option value="days">Day(s)</option>
                    </select>
                </div>

                <div className="formDiv">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter Your Full Name"
                        onChange={handleChange}
                        value={form.fullName}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="familyOrigin">Family Origin:</label>
                    <input
                        type="text"
                        name="familyOrigin"
                        placeholder="Enter Your Family Origin"
                        onChange={handleChange}
                        value={form.familyOrigin}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="uniqueIngredients">Unique Ingredients (comma separated):</label>
                    <input
                        type="text"
                        name="uniqueIngredients"
                        placeholder="Enter Unique Ingredients"
                        onChange={handleChange}
                        value={form.uniqueIngredients.join(',')}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="photo">Photo URL:</label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter Photo URL"
                        onChange={handleChange}
                        value={form.photo}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="instructions">Instructions:</label>
                    <textarea
                        name="instructions"
                        placeholder="Enter Instructions"
                        onChange={handleChange}
                        value={form.instructions}
                    ></textarea>
                </div>

                <button type="submit" className="formSubmit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default RecipeForm