import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import SystemImage from '../../assets/SystemImage.png'
import { Outlet } from 'react-router-dom';

const NavbarOne = ({currentUser}) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            
            <Navbar.Brand>
              <img
                alt=""
                src={SystemImage}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' '}
              {currentUser ? "Welcome " + currentUser.username : "LOGIN SYSTEM"}
            </Navbar.Brand>

            {currentUser && <Button variant="outline-light">Logout</Button>}
            
          </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default NavbarOne