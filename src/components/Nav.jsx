import { Link } from "react-router-dom"

const Nav = ( {user, handleLogOut} ) => { 
    let userOptions
    if (user) {
        userOptions = (
          <nav>
            <h3>Welcome {user.email}!</h3>
            <Link to="/feed">Feed</Link>
            <Link onClick={handleLogOut} to="/">
              Sign Out
            </Link>
          </nav>
        )
      }


return (
  <header>
    <Link to="/">
      <div>
        {user ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/dishes">Dishes</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/addrecipe">Add A Recipe</Link>
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