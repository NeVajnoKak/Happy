import React, { useState } from 'react';

const Price = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10000);

    const handleMinChange = (event) => {
        const value = Number(event.target.value);
        if (value < maxValue) {
            setMinValue(value);
        }
    };

    const handleMaxChange = (event) => {
        const value = Number(event.target.value);
        if (value > minValue) {
            setMaxValue(value);
        }
    };

    return (
        <div className="card mt-5" style={{ width: "22rem" }}>
            <div className="card-body">
                <div className="pb-3">
                    <div className='filter-text mb-3 ms-1'>Цена</div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <input 
                                type="number" 
                                className='price-number pl-1' 
                                placeholder='0' 
                                value={minValue}
                                onChange={handleMinChange}
                            />
                        </div>
                        <div className="col-1 d-flex justify-content-center mt-1 h5">-</div>
                        <div className="col-4">
                            <input 
                                type="number" 
                                className='price-number pl-5' 
                                placeholder='1 500 000' 
                                value={maxValue}
                                onChange={handleMaxChange}
                            />
                        </div>
                        <div className='col-3 d-flex justify-content-center'>
                            <button className='text-uppercase custom-btn gold price-btn'>Ок</button>
                        </div>
                    </div>
                    <div className="range-input mt-3">
                        <input 
                            type="range" 
                            className="min-range" 
                            min="0" 
                            max="10000" 
                            value={minValue} 
                            step="1"
                            onChange={handleMinChange}
                        />
                        <input 
                            type="range" 
                            className="max-range" 
                            min="0" 
                            max="10000" 
                            value={maxValue} 
                            step="1"
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
