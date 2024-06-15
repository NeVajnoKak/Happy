import React, { useState } from 'react';
import chevronUp from '../../../../assets/img/chevron-compact-up.svg';
import chevronDown from '../../../../assets/img/chevron-compact-down.svg';

const Card = ({ data }) => {
    const [openItems, setOpenItems] = useState({});

    const handleToggle = (index) => {
        setOpenItems(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <>
            {data.titles.map((title, index) => (
                <div key={index}>
                    <div
                        className="row border-bottom pb-3"
                        onClick={() => handleToggle(index)}
                        data-bs-toggle="collapse"
                        data-bs-target={`#home-collapse${index}`}
                        aria-expanded={openItems[index] || false}
                    >
                        <div className="col">
                            <p className="card-text pt-3">{title}</p>
                        </div>
                        <div className="col d-flex justify-content-end mt-auto">
                            <img
                                src={openItems[index] ? chevronUp : chevronDown}
                                alt=""
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>

                    <div className={`collapse mt-3 ${openItems[index] ? 'show' : ''}`} id={`home-collapse${index}`}>
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            {data.arrays[index].map((item, idx) => (
                                <li key={idx}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-custom checkbox"
                                            type="checkbox"
                                            value=""
                                            id={`${index}Check${idx}`}
                                        />
                                        <label className="form-check-label gold-text" htmlFor={`${index}Check${idx}`}>
                                            {item}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
