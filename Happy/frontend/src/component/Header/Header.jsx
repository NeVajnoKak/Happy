import React, { useEffect, useState } from 'react'

import logo from '../../assets/img/logo.png'
import profile from '../../assets/img/profile.png'
import globus from '../../assets/img/globus.png'
import cart from '../../assets/img/cart.png'
import profileLogo from '../../assets/img/profile-logo.png'

import { Link, useNavigate } from 'react-router-dom'

import './Header.module.css'
import ProfileSlidebar from '../Slidebar/Profile/ProfileSlidebar'
import OffCanvas from '../OffCanvas/OffCanvas'

const Header = ({ isProfile }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
        localStorage.setItem('username', username);
        localStorage.setItem('authToken', token);
        // console.log(username)
    }, [isAuthenticated, username, token]);


    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        localStorage.removeItem('authToken');

        setIsAuthenticated(false);
        setUsername(null);
        setToken(null);

        navigate('/login');
    };

    const openOffCanvas = () => {
        document.querySelector('a[href="#offcanvasProfile"]').click();
    };
    return (
        <>

            <nav className="navbar navbar-expand-lg mt-2">
                <div className="container">
                    {isProfile == false ?
                        <Link to="/" className="navbar-brand me-auto" href="#"><img src={logo} alt="" width="193.59px" height="29px" /> </Link>
                        :
                        <>
                        <Link onClick={openOffCanvas} className="navbar-brand me-auto" href="#"><img src={profileLogo} alt="" /> </Link>
                        </>
                    }
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                            <li className="nav-item">

                                {isProfile == false ? 
                                <Link to="/" className="nav-link mx-lg-2 active text-uppercase" aria-current="page" href="#">Главная</Link>
                            :
                                <Link to="/" className="nav-link mx-lg-2 text-uppercase" aria-current="page" href="#">Главная</Link>
                            }
                            </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Цветы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Торты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Шарики</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Аниматоры</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2 text-uppercase" href="#">Артисты</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={profile} alt="" className="me-2" />

                    {isAuthenticated ? (
                        <div class={`dropdown dropstart' `}>
                            <button class="btn sort-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {username}
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link to={"/profile/order"} class="dropdown-item" href="#">Настройки</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><button onClick={handleLogout} class="dropdown-item" href="#">Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link to={'/login'} className="login-button me-3 text-uppercase">
                                Вход
                            </Link>
                            <span className="me-3">/</span>
                            <Link to={'/register'} className="login-button me-2 text-uppercase">
                                Регистрация
                            </Link>
                        </>
                    )}
                    {isProfile == false ?
                        <>
                            <Link to={'/cart'} className="cart-container ms-2 me-3">
                                <img src={cart} alt="Cart" className="cart-icon" />
                                <span className="cart-count">12</span>
                            </Link>
                            <span className="me-3">|</span>
                        </>
                        :
                        <>
                        </>
                    }


                    <div href="#" className="globus-text">
                        <div className="row">
                            <div className="col pt-1 pe-0">
                                <img src={globus} alt="" className="globus-icon" />
                            </div>
                            <div className="col ps-0">
                                <div class={`dropdown dropstart' `}>
                                    <button class="btn sort-btn dropdown-toggle text-uppercase" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rus
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Kz</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            {
                isProfile === false ?
                <></>
                :
                <OffCanvas triggerId="offcanvasProfile"></OffCanvas>
            }
        </>
    )
}

export default Header