import Tweeter from "../../images/tweeter.png";
import Fb from "../../images/fb.png";
import Insta from "../../images/insta.png";

import styles from './Footer.scss'

export const Footer = () => {
  return (
    <footer>
      Don't Miss Our Promo On
      <span>
        <a href="https://www.facebook.com/" rel='noopener noreferrer nofollow'>
          <img className='social' src={Fb} alt="Facebook" />
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/" rel='noopener noreferrer nofollow'>
          <img className='social' src={Insta} alt="Instagram" />
        </a>
      </span>
      <span>
        <a href="https://twitter.com/home" rel='noopener noreferrer nofollow'>
          <img className='social' src={Tweeter} alt="Tweeter" />
        </a>
      </span>
    </footer>
  )
}