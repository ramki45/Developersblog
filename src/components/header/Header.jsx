import './header.css'
import myImg from '../images/greg.jpg';

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitle'>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={myImg} alt='background'></img>
    </div>
  )
}
