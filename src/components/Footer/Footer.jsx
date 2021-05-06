import Tweeter from "../../images/tweeter.png";
import Fb from "../../images/fb.png";
import Insta from "../../images/insta.png";

import './Footer.scss'

export const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h3>About Us</h3>
        Cum rem aspernatur nobis quod quibusdam odit, laborum quam quaerat labore animi, similique eveniet non esse inventore!
      </div>
      <div className='footer'>
        <span>Don't Miss Our Promo On</span>
        <div className='icons'>
          <span>
            <a href="https://www.facebook.com/" target='_BLANK' rel='noopener noreferrer nofollow'>
              <img className='social' src={Fb} alt="Facebook" />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/" target='_BLANK' rel='noopener noreferrer nofollow'>
              <img className='social' src={Insta} alt="Instagram" />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/home" target='_BLANK' rel='noopener noreferrer nofollow'>
              <img className='social' src={Tweeter} alt="Tweeter" />
            </a>
          </span>
        </div>
      </div>
    </footer >
  )
}