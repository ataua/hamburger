import { Link, useLocation } from 'react-router-dom'

import './nav.scss'

export const Nav = () => {
  const { pathname } = useLocation()

  return (
    <nav>

      <span className={pathname === '/' ? 'active' : ''}>
        <Link to='/'>
          Home
        </Link>
      </span>

      <span className={pathname === '/menu' ? 'active' : ''}>
        <Link to='/menu'>
          New Menu
        </Link>
      </span>

      <span className={pathname === '/about' ? 'active' : ''}>
        <Link to='/about'>
          About Us
        </Link>
      </span>

      <span className={pathname === '/main' ? 'active' : ''}>
        <Link to='/main'>
          Main Course
        </Link>
      </span>

    </nav>
  )
}