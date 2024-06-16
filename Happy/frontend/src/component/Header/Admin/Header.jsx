import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import styles from './Header.module.css'
const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [usertype, setUsertype] = useState(localStorage.getItem('usertype'));
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
    localStorage.setItem('username', username);
    localStorage.setItem('authToken', token);
    localStorage.setItem('usertype', usertype); 
  }, [isAuthenticated, username, token, usertype]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('authToken');
    localStorage.removeItem('usertype')

    setIsAuthenticated(false);
    setUsername(null);
    setToken(null);
    setUsertype(null);

    navigate('/login');
    window.location.reload();
  };
  
  
  return (
    <>
      <nav className={`${styles['navbar']} navbar-expand-lg p-0 pt-3 pb-2 `}>
        <div className="container">
          <div className="row " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="col">
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item w-50">
                  {/* <Link className="nav-link mx-lg-2 text-uppercase" href="#">Цветы</Link> */}
                  <input className='admin-search' type="text" placeholder='Найти пользователя' />
                </li>

              </ul>



            </div>
            <div className="col-4 d-flex justify-content-end">
                <div class={`dropdown dropstart' admin-btn `}>
                  <button class="btn sort-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {username}
                  </button>
                  <ul class="dropdown-menu">
                    <li><Link to={"/admin/clients"} class="dropdown-item" href="#">Настройки</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><button onClick={handleLogout} class="dropdown-item" href="#">Logout</button></li>
                  </ul>
                </div>
            </div>

            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}

export default Header