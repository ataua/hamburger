import { useState } from 'react'
import { Burger } from '../'

import './home.scss'

export const Home = () => {
  const [started, setStarted] = useState(true)

  const handleStarted = () => setStarted(!started)

  return (
    <div className='home'>
      <div className='text'>
        <p className='open'>OPEN TODAY FOR GREAT FOOD</p>
        <p className='make'>You Can Make<br /> Your Own <span>Burger</span></p>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et pariatur tenetur, odit iste cupiditate iusto itaque laudantium, rerum libero sint praesentium repudiandae, a adipisci porro vero aliquid rem magni?</p>
        <button className='start' onClick={handleStarted}>GET STARTED</button>
      </div>
      {started && <Burger />}
    </div>
  )
}