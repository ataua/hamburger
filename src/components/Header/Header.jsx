import { Nav } from '../'
import logo from '../../images/logo.png'

import './header.scss'

export const Header = () => {

  return (
    <header className='header'>

      <img src={logo} alt='logo' />
      <div className='logo' >
        &nbsp;BURGER<span>IAZ</span>
      </div>
      <Nav />

    </header>
  )
}