import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Login.css'
import { loginUser } from '../../services/Login';

const Login = () => {

  const [userLoggingIn, setUserLoggingIn] = useState({
    email: "",
    password: ""
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    setFormErrors(validate(userLoggingIn))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    } 
    if (!values.password) {
      errors.password = "Password is required!";
    } 
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      loginUser(userLoggingIn).then((result)=>{
        console.log(result.data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (     
    <Form className='loginFormStyle'>

      <h6 className='mb-5'>Please login to your account</h6>

      <Form.Group className="loginInputStyle mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => {
            setUserLoggingIn({...userLoggingIn, email: e.target.value})
          }} />
          <p style={{color: 'red', margin: '2px'}}>{formErrors.email}</p>
      </Form.Group>

      <Form.Group className="loginInputStyle mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Enter Password" onChange={(e) => {
            setUserLoggingIn({...userLoggingIn, password: e.target.value})
          }}/>
          <p style={{color: 'red', margin: '2px'}}>{formErrors.password}</p>
      </Form.Group>

      <Button className="mx-5 mt-4 mb-4 w-100 gradient-custom-2" onClick={handleLogin}>Sign in</Button>
      
    </Form>
  )
}

export default Login