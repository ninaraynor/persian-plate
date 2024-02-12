import { NavLink } from "react-router-dom"

const Nav = () => { 
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/dishes">Dishes</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/addrecipe">Add A Recipe</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    )
}

export default Nav