import React, { useState } from 'react';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';
import authLogo from '../../assets/img/auth-logo.png';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Form = ({ authForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      localStorage.setItem('authToken', data.token);
      // console.log('username : ' , data.username)
      localStorage.setItem('username', data.username)
      localStorage.setItem('usertype', data.usertype)
      localStorage.setItem('isAuthenticated', true);
      navigate('/')
      window.location.reload(); 
      
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
        name: name,
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
  
      const data = response.data;
      // console.log('Registration successful:', data);
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isAuthenticated', true);
      navigate('/')
      window.location.reload();
    } catch (error) {
      setError(error.message);
      console.error('Registration error:', error);
    }
  };
  

  return (
    <>
    
      <div className="mt-5 d-flex justify-content-center">
        <img src={authLogo} alt="" />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        {authForm ? (
          <span className={styles['big-form-text']}>Вход в мой кабинет</span>
        ) : (
          <span className={styles['big-form-text']}>Регистрация в кабинете</span>
        )}
      </div>
      <div className='mt-2 d-flex justify-content-center'>
        {authForm ? (
          <>
            <span className={`${styles['small-form-text']} me-2`}>Еще не зарегистрированы?</span>
            <Link to={'/register'} className={`${styles['link-form']}`}>
              <span style={{ borderBottom: '1px solid black', fontSize: 16 }}>Регистрация</span>
            </Link>
          </>
        ) : (
          <>
            <span className={`${styles['small-form-text']} me-2`}>Уже зарегистрированы?</span>
            <Link to={'/login'} className={`${styles['link-form']}`}>
              <span style={{ borderBottom: '1px solid black', fontSize: 16 }}>Войти в мой кабинет</span>
            </Link>
          </>
        )}
      </div>

      <form className='form mt-5' onSubmit={authForm ? handleLogin : handleRegister}>
        <div className="d-flex justify-content-center">
          <div className="container">
            {authForm ? (
              <>
                <div className="row">
                  <div className="col align-self-center d-flex justify-content-end">
                    <input
                      className='form-input'
                      type="email"
                      placeholder='Электронная почта *'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col align-self-center d-flex justify-content-start">
                    <input
                      className='form-input'
                      type="password"
                      placeholder='Пароль *'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col mt-4 d-flex justify-content-center">
                  <button type='submit' className={`gold custom-btn ${styles['form-btn']}`}>Войти в CRM</button>
                </div>
              </>
            ) : (
              <>
                <div className="row mb-3">
                  <div className="col align-self-center d-flex justify-content-center">
                    <input
                      className='form-input w-50'
                      type="text"
                      placeholder='Имя *'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col align-self-center d-flex justify-content-center">
                    <input
                      className='form-input w-50'
                      type="email"
                      placeholder='Электронная почта *'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col align-self-center d-flex justify-content-end">
                    <input
                      className='form-input'
                      type="password"
                      placeholder='Пароль *'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col align-self-center d-flex justify-content-start">
                    <input
                      className='form-input'
                      type="password"
                      placeholder='Подтвердите пароль *'
                      required
                    />
                  </div>
                </div>
                <div className="col mt-4 d-flex justify-content-center">
                  <button type='submit' className={`gold custom-btn ${styles['form-btn']}`}>Зарегистрироваться</button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-5 mb-5 d-flex justify-content-center">
          <Link to={'/'} className={`${styles['link-form']} text-uppercase`}>
            <span style={{ borderBottom: '1px solid black', fontSize: 16 }}>Забыли пароль?</span>
          </Link>
        </div>
      </form>

      {error && (
        <div className="mt-3 d-flex justify-content-center">
          <span className="text-danger">{error}</span>
        </div>
      )}
    </>
  );
};

export default Form;
