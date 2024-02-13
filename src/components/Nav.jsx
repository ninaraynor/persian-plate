import { Link } from "react-router-dom"

const Nav = ( {user, handleLogOut} ) => { 
  return (
    <header>
      <Link to="/">
        <div>
          {user ? (
            <div>
              <Link to="/">Home</Link>
              <Link to="/dishes">Dishes</Link>
              <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/addrecipe">Add A Recipe</Link>
              <Link onClick={handleLogOut} to="/">Sign Out</Link>
            </div>
          ) : (
            <div>
              <Link to="/">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/signin">Sign In</Link>
              <Link to="/dishes">Dishes</Link>
              <Link to="/about">About</Link>
            </div>
          )}
        </div>
      </Link>
    </header>

    )
  }
    
export default Nav