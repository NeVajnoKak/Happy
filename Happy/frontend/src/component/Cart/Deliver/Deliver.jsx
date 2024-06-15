import React from 'react'

const Deliver = () => {
    return (
        <>
            <div className="cart-items">
                <div className="cart-info-title mt-3">
                    Способ доставки
                </div>
                <div className="row mt-4 mb-3">
                    <div className="col-3">
                    <div className="card" style={{width: '16rem'}}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Курьером</h5>
                                <p className="card-text mt-3">Служба доставки привезет вам товары</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Самовывоз</h5>
                                <p className="card-text mt-3">Вы сами заберете товар со склада</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deliver