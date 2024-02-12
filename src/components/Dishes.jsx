

const Dishes = ({ dishes }) => {
    return (
        <div className="dishes-container">
            <h1>Dishes</h1>
            <div className="dishes-grid">
            {dishes.map(dish => (
                <div key={dish.id} className="dish-card">
                <h2>{dish.title}</h2>
                <h3>{dish.description}</h3>
                <img src={dish.image} alt={dish.title}/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Dishes