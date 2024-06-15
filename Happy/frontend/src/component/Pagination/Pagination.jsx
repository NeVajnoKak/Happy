import React, { useState } from 'react';

const Pagination = () => {
    const [activePage, setActivePage] = useState(1);

    const pages = [1, 2, 3,4]; // You can dynamically generate this based on your data

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination-custom justify-content-center">
                <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
                    <a 
                        className="page-link" 
                        href="#"
                        aria-label="Previous"
                        onClick={() => handlePageClick(activePage - 1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pages.map(page => (
                    <li 
                        key={page} 
                        className={`page-item ${activePage === page ? 'active' : ''}`}
                    >
                        <a 
                            className="page-link" 
                            href="#"
                            onClick={() => handlePageClick(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${activePage === pages.length ? 'disabled' : ''}`}>
                    <a 
                        className="page-link" 
                        href="#"
                        aria-label="Next"
                        onClick={() => handlePageClick(activePage + 1)}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
