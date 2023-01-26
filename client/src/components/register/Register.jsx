import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import './Register.css'
import defaultPP from '../../assets/defaultPP.png'

const Register = () => {

  const [image, setImage] = useState(defaultPP)

  return (
    <Form className='registerFormStyle'>

    <h6 className='mb-4'>Sign Up For A New Account</h6>
    

    <Row>
      <Col md='12'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
      </Col>

      <Col md='12'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
      </Col>

      <Col md='6'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
      </Col>

      <Col md='6'>
        <Form.Group className="registerInputStyle mb-3">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
      </Col>

      <Col md='6'>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Text className='m-1'>Choose Profile Picture</Form.Text>
          <Form.Control type="file" onChange={(e) => {
            setImage(URL.createObjectURL(e.target.files[0]))
          }}/>
        </Form.Group>
      </Col>

      <Col className='imageColStyle' md='6'>
          <div className='imageContainer'>
            <Image className='imageStyle' rounded alt='pp' src={image} />
          </div>
      </Col>

    </Row>

    <Button className="mx-5 mt-4 mb-4 w-100 gradient-custom-2">Register</Button>
    
  </Form>
  )
}

export default Register