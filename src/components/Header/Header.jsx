import { useState } from 'react'

import Search from '../../images/search.png'
import { Icon } from '../../atoms'
import { Nav } from '../'
import logo from '../../images/logo.png'

import './header.scss'

export const Header = () => {
  const [open, setOpen] = useState(true)
  const [searchData, setSearchData] = useState('')

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
    <header className='header'>

      <div className='logo'>
        <img src={logo} alt='logo' />
        <div>
          &nbsp;BURGER<span>IAZ</span>
        </div>
      </div>

      <div className='nav'>
        {open &&
          <Nav />
        }
      </div>
      <div className='input'>
        <input type='search' name='search' placeholder='Search' onChange={update} onSearch={search} value={searchData} />
        <img src={Search} alt='' onInput={search} />
      </div>
      <div className='icon' onClick={() => setOpen(!open)}>
        <Icon />
      </div>
    </header>

  )
}