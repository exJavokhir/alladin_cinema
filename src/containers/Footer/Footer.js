import { Link } from 'react-router-dom'
import Facebook from '../../assets/images/icons/facebook 1.png'
import Telegram from '../../assets/images/icons/telegram 1.png'
import Twitter from '../../assets/images/icons/twitter 1.png'
import Appstore from '../../assets/images/appstore.png'
import Googleplay from '../../assets/images/googleplay.png'

import './main.scss'


const Footer = ()=>{
    return(
        <div className="footer-inner">
            <div className="top">
                <div className="block-one">
                    <Link className="Logo" to="/">LOGO</Link>
                </div>
                <div className="block-two">
                    <nav className="nav">
                        <Link className="navbar-link" to="/news">News</Link>
                        <Link className="navbar-link" to="/category">Category</Link>
                        <Link className="navbar-link" to="/subscriber">Subscriber</Link>
                        <Link className="navbar-link" to="/mymovies">My Movies</Link>
                        <Link className="navbar-link" to="/children">For Children</Link>
                    </nav>
                </div>
                <div className="block-three">
                    <div className="social-icon">
                        <img src={Facebook} alt=""/>
                        <img src={Twitter} alt=""/>
                        <img src={Telegram} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="block-one">
                    <h3>© 2020 Alladdin</h3>
                </div>
                <div className="block-two">
                    <Link className="faq">Terms of use</Link>
                    <Link className="faq">FAQ</Link>
                    <Link className="faq">Contacts</Link>
                </div>
                <div className="block-three">
                    <Link className="app">
                        <img src={Appstore} alt=""/>
                    </Link>
                    <Link>
                        <img src={Googleplay} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer