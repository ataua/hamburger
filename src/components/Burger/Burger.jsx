import Hamburger from '../../images/fillburger.png'
import './burger.scss'

export const Burger = () => {
  return (
    <div className='bun'>
      <div className="back">
        <p>BUR</p>
        <p>GER</p>
      </div>
      <img src={Hamburger} alt="A tasty hamburger" />
      <div className="bottom">
        Spicy Beef <span>Burger</span>
      </div>
    </div>
  )
}