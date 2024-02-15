import { Link } from 'react-router-dom'

const Dishes = ({ dishes }) => {
    return (
        <div className="dishes-container">
            <h2>Dishes</h2>
            <div className="dishes-grid">
            {dishes.map(dish => (
                <div key={dish._id} className="dish-card">
                <h3>{dish.title}</h3>
                <p>{dish.description}</p>
                <img src={dish.image} alt={dish.title}/>
                <Link to={`/dishes/${dish._id}/recipes`}>View Recipes</Link>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Dishes