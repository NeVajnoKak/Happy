import React, { useState } from 'react';
import profileLogo from '../../assets/img/profile-logo.png';
import './OffCanvas.css';
import { Link, useNavigate } from 'react-router-dom';

const OffCanvas = ({ triggerId }) => {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();
    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
        localStorage.removeItem('authToken');


        navigate('/login');
    };
    return (
        <>
            <a
                className="btn btn-primary d-none"
                data-bs-toggle="offcanvas"
                href={`#${triggerId}`}
                role="button"
                aria-controls={triggerId}
            >
                ProfileLogo
            </a>
            
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" role="dialog" aria-modal="true" tabIndex="-1" id={triggerId} aria-labelledby={`${triggerId}Label`}>
                <div className="offcanvas-header d-flex justify-content-center">
                    <img src={profileLogo} alt="" id={`${triggerId}Label`} />
                </div>
                <hr/>
                <div className="offcanvas-body pe-0 ps-0">
                    <div className={`d-flex justify-content-center ${activeLink === 'current-orders' ? 'offcanvas-active' : ''}`}>
                        <Link to={'/profile/order'} className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'current-orders' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('current-orders')}>Текущие заказы</Link>
                    </div>
                    <hr/>
                    <div className={`d-flex justify-content-center ${activeLink === 'order-history' ? 'offcanvas-active' : ''}`}>
                        <Link to={'/profile/history'} className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'order-history' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('order-history')}>История заказов</Link>
                    </div>
                    <hr/>
                    <div className={`d-flex justify-content-center ${activeLink === 'favorites' ? 'offcanvas-active' : ''}`}>
                        <Link className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'favorites' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('favorites')}>Избранное</Link>
                    </div>
                    <hr/>
                    <div className={`d-flex justify-content-center ${activeLink === 'my-data' ? 'offcanvas-active' : ''}`}>
                        <Link className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'my-data' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('my-data')}>Мои данные</Link>
                    </div>
                    <hr/>
                    <div className={`d-flex justify-content-center ${activeLink === 'delivery-addresses' ? 'offcanvas-active' : ''}`}>
                        <Link className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'delivery-addresses' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('delivery-addresses')}>Адреса доставки</Link>
                    </div>
                    <hr/>
                    <div className={`d-flex justify-content-center ${activeLink === 'my-notifications' ? 'offcanvas-active' : ''}`}>
                        <Link className={`p-4 offcanvas-btn text-uppercase ${activeLink === 'my-notifications' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('my-notifications')}>Мои уведомления</Link>
                    </div>
                    <div className='mt-auto'>
                    <hr></hr>
                    <div className={`mt-auto d-flex justify-content-center ${activeLink === 'logout' ? 'offcanvas-active' : ''}`}>
                        <button className={`p-4 offcanvas-logout text-uppercase ${activeLink === 'logout' ? 'offcanvas-active-btn' : ''}`} onClick={handleLogout} >Выйти</button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default OffCanvas;
