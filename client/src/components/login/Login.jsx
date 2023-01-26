import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Login.css'

const Login = () => {
  return (     
    <Form className='loginFormStyle'>

      <h6 className='mb-5'>Please login to your account</h6>

      <Form.Group className="loginInputStyle mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>

      <Form.Group className="loginInputStyle mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Button className="mx-5 mt-4 mb-4 w-100 gradient-custom-2">Sign in</Button>
      
    </Form>
  )
}

export default Login