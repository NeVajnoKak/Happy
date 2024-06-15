import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import styles from './Header.module.css'
const Header = () => {
  return (
    <>
      <nav className={`${styles['navbar']} navbar-expand-lg p-0 pt-3 pb-2 `}>
        <div className="container">
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1">
                <li className="nav-item w-50">
                  {/* <Link className="nav-link mx-lg-2 text-uppercase" href="#">Цветы</Link> */}
                  <input className='admin-search' type="text" placeholder='Найти пользователя'/>
                </li>
              </ul>
            </div>





          <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> 
      <hr />
    </>
  )
}

export default Header