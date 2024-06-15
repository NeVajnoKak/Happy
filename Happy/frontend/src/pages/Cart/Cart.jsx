import React, { useState } from 'react';
import './Cart.css';
import flower from '../../assets/img/flower.jpeg'
import Contact from '../../component/Cart/Contact/Contact';
import Deliver from '../../component/Cart/Deliver/Deliver';
import Payment from '../../component/Cart/Payment/Payment';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Nutra', price: 20000, quantity: 20, maxQuantity: 13, points: 200 },
    { id: 2, name: 'Cry', price: 20000, quantity: 10, maxQuantity: 13, points: 200 },
    { id: 3, name: 'Масло черного тмина', price: 0, quantity: 5, maxQuantity: 0, points: 0 },
    { id: 4, name: 'Nutra', price: 0, quantity: 4, maxQuantity: 4, points: 0 },
    { id: 5, name: 'Cry', price: 0, quantity: 4, maxQuantity: 4, points: 0 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPoints = items.reduce((acc, item) => acc + item.points * item.quantity, 0);

  return (
    <div className="cart">
      <div className='cart-title'>Корзина</div>
      <div className="row mt-3">
        <div className="col">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div className="row">
                    <div className="col-2">
                      <img src={flower} alt="" width={100} height={100} />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className='cart-item-title'>{item.name}</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="col"><p>Цена </p></div>
                          <div className="col"><div className='cart-item-price'>{item.price.toLocaleString()} ₸</div></div>

                        </div>
                        <div className="col">
                          <div className="col  d-flex justify-content-center">
                            <p>Количество (макс. {item.maxQuantity})
                            </p>
                          </div>

                          <div className="col cart-item-btn-back  d-flex justify-content-between bd-highlight mb-3">
                            <button className='cart-item-btn ms-3 bd-highlight text-center' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <span className='cart-button-text bd-highlight'>{item.quantity}</span>
                            <button className='cart-item-btn me-3 bd-highlight' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                          </div>
                        </div>


                        <div className="col">
                          <div className="col"><p>Баллов </p></div>
                          <div className="col cart-item-price">{item.points.toLocaleString()} ₸</div>

                        </div>
                        <div className="col">
                          <div className="col"> 
                          <p>Сумма </p>
                          </div>
                          <div className="col cart-item-price">{(item.price * item.quantity).toLocaleString()} ₸</div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

            <Contact/>
            <Deliver/>
            <Payment/>
        </div>
        <div className="col-3">
          <div className="cart-summary">
            <p className='cart-summary-title'>Итого: <span className='float-end cart-summary-title '>{total.toLocaleString()} ₸</span></p>
            <p className='cart-summary-text'>Товаров: <span className='float-end cart-summary-text'>{items.length}</span></p>
            <p className='cart-summary-text'>Баллов: <span className='float-end cart-summary-text'>{totalPoints.toLocaleString()} ₸</span></p>
            <button className='gold' disabled={items.some(item => item.quantity === 0)}>Заказать</button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Cart;
