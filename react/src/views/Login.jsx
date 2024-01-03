import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

const Login = () => {
  const emailRef = createRef()
  const passwordRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [message, setMessage] = useState(null)


  const onSubmit= (e) => {
    e.preventDefault();
    
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    setMessage(null);
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">
            Login Into Your Account
          </h1>
          {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <button className='btn btn-block'>Login</button>

          <p className="message">
            Not Registered? <Link to="/signup"> Create an Account </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
