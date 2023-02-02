import React , {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FileBase64 from 'react-file-base64';
import Alert from 'react-bootstrap/Alert';
import PersonIcon from '@mui/icons-material/Person';

import './Register.css'
import { registerUser } from '../../services/Register';

const Register = () => {

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4UlEQVR4nO3XSW/TQBgG4OkB+BOQpUmT1onjOOGIhOAEZxD8HZYziAoE4tosLemWZo/ttDcQEjdatXBs4jh2PJPQ5AIq+tAkgHpoqyb1dvArzdHS81kzntcIuXHjxs3JJEXC8lJvMS6QXU4gQ66Kh2xF341Wuq9iRRxFTk2wAtd4qfeWl8jvuEiAEwhwNQyxKga2okO0rANT0o4XtrQ3TA6uIsfhG2Sbl3pwFj5S6gJT6MLClgbzm2qDye06Z4hEo/fuwvi8BuFNFULrndfIOXv+7G1zOl6F0JpyHFhVInb70ejATozvwNxqBwI55aXdfsQJZG8afDCnQOBD+6vdfsTVyWA6vAL+rHxktx9xNXw0DX52uQ2+rPzDbj9iq3hvGrw/2wZvpmX/FqI37DR4X0YGT1p+Ybcf0XpAb9hJ8d5U69iTajPICaH1YCJ8WoYbqdYickpotwnnNemieE+qKSbff7mCnBTabWg9oDfseduGvnnH4U+G1gN6w9JLyp+VB76MPKBfG3pgHbPn3bgxIwAzie1+khfws3gd73ACOeBqeMhW8TBWwftsRd9hy92nbEFLIMfBhf4jXiLfeJFAnDZTuuoYYv9KXlX/35WiJR2YonbAFNWH9Flb7clGP8CL5DMvEbgonlaOSHFcO5iC9im0pfjtwYvkVkIi6iXwo+oRzmt6aF25ay1e6t3hRfLrsvj5/OgHH0Kb6s/5De22JfhYvedPSEQzCh+ma0OFuTVVD+TUoLl6gJlL7vlT8SHan9Y7MLemfDT1YPNi/7F5+M64AK60H5j39if4VE6Fz40K4L4pfl7o3zQbH/zbYIPZFm/4AHEBP7cCH1hRwL8sPzF+gHE9MB0/S/8fluWG4QPE6vi7FfjZ8Q/QgeEDcDU8sAgP3nRrYPgAVuF9GXm0jB/AQrw3bcIAVuK9qZbxA0TL3aZVeM9S89DwAdgyvh8pdptW4K8vHd4zfAA3btwgR+YPVDJLQrWoQIYAAAAASUVORK5CYII="
  });
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [registerResult, setRegisterResult] = useState("")

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match!"
    }
    if (values.image.length >= 2500) {
      errors.image = "Choose Smaller Image!"
    }
    return errors;
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setFormErrors(validate(newUser))
    setIsSubmit(true)
  }

   useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      registerUser(newUser).then((result)=>{
        setRegisterResult(result.data)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <Form className='registerFormStyle'>
    { registerResult && <Alert variant='warning' style={{width: '100%'}}>{registerResult}</Alert> }
    <h6 className='mb-4'>Sign Up For A New Account</h6>
    
    <Row>
      <Col md='12'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="text" placeholder="Enter Username" onChange={(e) => {
            setNewUser({...newUser, username: e.target.value})
          }} />
        </Form.Group>
        <p style={{color: 'red', margin: '2px'}}>{formErrors.username}</p>
      </Col>

      <Col md='12'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="email" placeholder="Enter Email" onChange={(e) => {
            setNewUser({...newUser, email: e.target.value})
          }} />
        </Form.Group>
        <p style={{color: 'red', margin: '2px'}}>{formErrors.email}</p>
      </Col>

      <Col md='6'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="password" placeholder="Enter Password" onChange={(e) => {
            setNewUser({...newUser, password: e.target.value})
          }}/>
        </Form.Group>
        <p style={{color: 'red', margin: '2px'}}>{formErrors.password}</p>
      </Col>

      <Col md='6'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => {
            setNewUser({...newUser, confirmPassword: e.target.value})
          }} />
        </Form.Group>
        <p style={{color: 'red', margin: '2px'}}>{formErrors.confirmPassword}</p>
      </Col>

      <Col md='6'>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Text className='m-1'>Choose Profile Picture (JPG)</Form.Text>
          <FileBase64 type="file" multiple={false} onDone={
            file => setNewUser({...newUser, image: file.base64})
          }/>
        </Form.Group>
        <p style={{color: 'red', margin: '2px'}}>{formErrors.image}</p>
      </Col>

      <Col className='imageColStyle' md='6'>
          <div className='imageContainer'>
            {newUser.image ? <Image className='imageStyle' rounded alt='pp' src={newUser.image} /> : <PersonIcon style={{width: '60px', height: '60px'}}/>}
          </div>
          
      </Col>

    </Row>

    <Button className="mx-5 mt-4 mb-4 w-100 gradient-custom-2" onClick={handleRegister}>Register</Button>

  </Form>
  )
}

export default Register