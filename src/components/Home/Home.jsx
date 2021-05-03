import styles from './home.scss'

export const Home = () => {
  return (
    <div className='home'>
      <p className='open'>OPEN TODAY FOR GREAT FOOD</p>
      <p className='make'>You Can Make<br /> Your Own <span>Burger</span></p>
      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et pariatur tenetur, odit iste cupiditate iusto itaque laudantium, rerum libero sint praesentium repudiandae, a adipisci porro vero aliquid rem magni?</p>
      <button className='start'>GET STARTED</button>
    </div>
  )
}