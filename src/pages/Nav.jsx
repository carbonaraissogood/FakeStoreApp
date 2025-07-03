import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>

      <nav>
        <ul className='navBar'>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/items">Items</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

          </ul>
      </nav>
    </>
  )
}

export default Nav
