import { Link } from 'react-router-dom'
import Member from '../../assets/images/member.png'
import './main.scss'
import '../../assets/styles/Response/Header/header.scss'


import { 
    Reminder,
    Search,
    Logout
}from '../../assets/icons/icons'
import {
    Genie
} from '../../assets/icons/icons'


import { useState } from 'react'

const Header = () => {
    const [activeclass, setActive] = useState(false)

    return (
            <header className="header-wrapper">
                <div className="header-inner container">
                    <Link className="logo-holder" to="/">
                            <Genie/>
                            <span className="logo-name">aladdin</span>
                        </Link>
                    <div className="navbar">
                        <nav className="nav">
                            <Link className="navbar-link" to="/news">News</Link>
                            <Link className="navbar-link" to="/category">Category</Link>
                            <Link className="navbar-link" to="/tv">TV</Link>
                            <Link className="navbar-link" to="/mymovies">My Movies</Link>
                            <Link className="navbar-link" to="/children">For Children</Link>
                        </nav>
                    </div>
                    <div className="search-holder">
                        <Reminder/>
                        <div className="input-holder">
                            <Link to='/search'>
                                <Search/>
                            </Link>
                        </div>
                        <div onClick={()=> setActive(!activeclass)}  className={`member ${activeclass ? 'active' : ' '}`}>
                            <button className="member-logo">
                                <img src={Member} alt=""/>
                            </button>
                            <div className="active-login">
                                <h3 className="">iMustafa</h3>
                                <Link className="login-link">Account</Link>
                                <Link className="login-link">Subscriber</Link>
                                <Link className="login-link">Payment</Link>
                                <Link className="login-link">Favourites</Link>
                                <Link className="login-link">Story</Link>
                                <Link className="login-link">Session</Link>
                                <div className="classs">
                                    <button className="log-out">
                                        <Logout/>
                                        <span>Log out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header
