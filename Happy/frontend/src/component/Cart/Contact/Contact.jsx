import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <div className="cart-items">
                <div className='cart-info-title mt-3'>Контактные данные</div>
                <form className='contact-text mt-4'>
                    <div className="row">
                        <div className="col-3">
                            <div className="col">
                                <label for="surname">Фамилия</label>
                            </div>
                            <div className="col">
                                <input type="text" id='surname' placeholder='Введите фамилию' />

                            </div>
                        </div>
                        <div className="col">
                            <div className="col contact-text">
                                <label for="name">Имя</label>
                            </div>
                            <div className="col">
                                <input type="text" id='name' placeholder='Введите имя' />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mb-3">
                        <div className="col-3">
                            <div className="col">
                                <label for="phone" >Номер телефона</label>
                            </div>
                            <div className="col">
                                <input type="text" id='phone' placeholder='Введите номер телефона' />
                            </div>
                        </div>
                        <div className="col">
                            <div className="col">
                                <label for="email">Эл. почта</label>
                            </div>
                            <div className="col">
                                <input type="email" id='email' placeholder='Введите почту' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Contact