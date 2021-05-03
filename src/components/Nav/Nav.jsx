import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../../atoms'
import Search from '../../images/search.png'

import styles from './nav.scss'


export const Nav = () => {
  const [open, setOpen] = useState(true)
  const [searchData, setSearchData] = useState('')
  const { pathname } = useLocation()

  console.log(pathname)

  const update = e => {
    if (e.key === 'Enter') {
      search()
    }
    setSearchData(e.target.value)
  }

  const search = (e) => {
    e.preventDefault()
    console.log(searchData)
    setSearchData('')
  }

  return (
    <>
      <nav className={open ? '' : 'closed'}>
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
        <span>
          <div className='input'>
            <input type='search' name='search' placeholder='Search' onChange={update} onSearch={search} value={searchData} />
            <img src={Search} alt='' onInput={search} />
          </div>
        </span>
      </nav>
      <div className='icon' onClick={() => setOpen(!open)}>
        <Icon />
      </div>
    </>
  )
}