import React, { useState } from 'react';
import adminLogo from '../../../assets/img/admin-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const OffCanvas = ({ triggerId }) => {
    const [activeLink, setActiveLink] = useState('clients');
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
                <div className="offcanvas-header p-0 pb-2 pt-3 ms-4">
                    <img src={adminLogo} alt="" id={`${triggerId}Label`} />
                </div>
                <hr />
                <div className="offcanvas-body pe-0 ps-0 ms-3">
                    <div className='flex-column mb-auto'>
                    <div className={`mt-3 pt-2 under-border ${activeLink === 'clients' ? 'offcanvas-active-admin' : ''}`}>
                        <Link to={'/admin/clients'} className={`p-2 mb-2 offcanvas-btn-admin ${activeLink === 'clients' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('clients')}>Клиенты</Link>
                    </div>
                    <div className={`mt-3 pt-2 under-border ${activeLink === 'stores' ? 'offcanvas-active-admin' : ''}`}>
                        <Link to={'/admin/stores'} className={`p-2 mb-2  offcanvas-btn-admin ${activeLink === 'stores' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('stores')}>Магазины</Link>
                    </div>
                    <div className={`mt-3 pt-2 under-border ${activeLink === 'orders' ? 'offcanvas-active-admin' : ''}`}>
                        <Link className={`p-2 mb-2 offcanvas-btn-admin ${activeLink === 'orders' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('orders')}>Заказы</Link>
                    </div>
                    <div className={`mt-3 pt-2 under-border ${activeLink === 'animators' ? 'offcanvas-active-admin' : ''}`}>
                        <Link className={`p-2 mb-2 offcanvas-btn-admin ${activeLink === 'animators' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('animators')}>Аниматоры/Артисты</Link>
                    </div>
                    <div className={`mt-3 pt-2 under-border ${activeLink === 'transaction' ? 'offcanvas-active-admin' : ''}`}>
                        <Link className={`p-2 mb-2  offcanvas-btn-admin ${activeLink === 'transaction' ? 'offcanvas-active-btn' : ''}`} onClick={() => handleSetActive('transaction')}>Транзакции</Link>
                    </div>
                    </div>
                    
                    <div className='mt-3'>
                        <div className=''>
                            <div className={`mt-auto  ${activeLink === 'logout' ? 'offcanvas-active' : ''}`}>
                                <button className={`p-2 mb-2 offcanvas-logout ${activeLink === 'logout' ? 'offcanvas-active-btn' : ''}`} onClick={handleLogout} >Выйти</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default OffCanvas;
