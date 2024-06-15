import React from 'react'
import flower from '../../../assets/img/flower.jpeg'


const Payment = () => {
    return (
        <>
            <div className="cart-items">
                <div className="cart-info-title mt-3">
                    Способ оплаты
                </div>
                <div className="row mt-4 mb-3">
                        <div className="card" style={{ width: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-2">Основной кошелек</h5>
                                <img src={flower} alt="" width={48} height={24} />
                            </div>
                        </div>
                        <div className="card" style={{ width: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-2">Наличными</h5>
                                <img src={flower} alt="" width={48} height={24} />
                            </div>
                        </div>
                        <div className="card" style={{ width: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-2">Paybox</h5>
                                <img src={flower} alt="" width={48} height={24} />
                            </div>
                        </div>
                        <div className="card" style={{ width: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-2">Kaspi QR</h5>
                                <img src={flower} alt="" width={48} height={24} />
                            </div>
                        </div>
                        <div className="card" style={{ width: '12rem' }}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-2">Kaspi Red</h5>
                                <img src={flower} alt="" width={48} height={24} />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Payment