import logo from '../../images/logo.png'
import { Icon } from '../../atoms'
import './header.scss'

export const Header = () => {
  return (
    <header className='header'>

      <img src={logo} alt='logo' />
      <div className='logo' >
        &nbsp;BURGER<span>IAZ</span>
      </div>

      <nav>
        <span>
          Home
        </span>
        <span>
          New Menu
        </span>
        <span>
          About Us
        </span>
        <span>
          Main Course
        </span>
        <span>
          search
        </span>
        <span>
          <Icon />
        </span>

      </nav>
    </header>
  )
}