import React, { useState } from 'react';
import Client from '../services/api';

const RecipeForm = ({ recipe }) => {
    const initialFormState = {
        title: '', 
        portionSize: '', 
        prepTime: { value: '', unit: '' }, 
        cookingTime: { value: '', unit: '' }, 
        ingredients: [], 
        fullName: '', 
        familyOrigin: '', 
        uniqueIngredients: [], 
        instructions: '', 
        photo: '' 
    };

    const [form, setForm] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newRecipe = {
                recipeType: recipe._id,
                title: form.title,
                portionSize: form.portionSize,
                prepTime: {
                    value: form.prepTimeValue,
                    unit: form.prepTimeUnit
                },
                cookingTime: {
                    value: form.cookingTimeValue,
                    unit: form.cookingTimeUnit
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
            <div className="formDiv">
                    <label htmlFor="recipeType">Dish Type:</label>
                    <input
                        type="text"
                        name="recipeType"
                        placeholder="Enter Dish Type"
                        onChange={handleChange}
                        value={form.recipeType}
                    />
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
                    <label htmlFor="prepTime.value">Preparation Time (in seconds):</label>
                    <input
                        type="number"
                        name="prepTime.value"
                        placeholder="Enter Preparation Time"
                        onChange={handleChange}
                        value={form.prepTime.value}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="prepTime.unit">Preparation Time Unit:</label>
                    <select
                        name="prepTime.unit"
                        onChange={handleChange}
                        value={form.prepTime.unit}
                    >
                        <option value="seconds">Seconds</option>
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                    </select>
                </div>

                <div className="formDiv">
                    <label htmlFor="cookingTime.value">Cooking Time (in seconds):</label>
                    <input
                        type="number"
                        name="cookingTime.value"
                        placeholder="Enter Cooking Time"
                        onChange={handleChange}
                        value={form.cookingTime.value}
                    />
                </div>

                <div className="formDiv">
                    <label htmlFor="cookingTime.unit">Cooking Time Unit:</label>
                    <select
                        name="cookingTime.unit"
                        onChange={handleChange}
                        value={form.cookingTime.unit}
                    >
                        <option value="seconds">Seconds</option>
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
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