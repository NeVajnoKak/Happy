import React from 'react'
import styles from './Login.module.css';
import Form from '../../../component/Auth/Form'



const Login = () => {
  return (
    <>
      <div className='align-items-center d-flex justify-content-center'>
        <div className={`${styles['login-form']}`}>
          <Form authForm={true}/>
        </div>
      </div>
    </>
  )
}

export default Login