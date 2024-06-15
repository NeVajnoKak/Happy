import React from 'react'
import styles from './Register.module.css';
import Form from '../../../component/Auth/Form'



const Register = () => {
  return (
    <>
      <div className='align-items-center d-flex justify-content-center'>
        <div className={`${styles['register-form']}`}>
          <Form authForm={false}/>
        </div>
      </div>
    </>
  )
}

export default Register