import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./UserPage.css"
import { getUserQuotes } from '../../services/GetUserQuotes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {

    const [quotes, setQuotes] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        getUserQuotes().then((result)=>{
            if(result.data === 'Forbidden'){
                nav('/')
                alert("YOU CANT ACCESS USER PAGE")
            } else {
                setQuotes(result.data)
            }
        })
    })

  return (
    <div>
        <h4 className='h4Style'>Welcome, You are Logged in as a User</h4>
        <Row >
        {quotes.map((item, i)=> (
            <Col className='colStyle' xs={6} md={4} lg={3} key={i}>
                <Card
                style={{ width: '18rem' }}
                className="cardStyle mb-2"
                >
                <Card.Body>
                <h3> Quote {i} </h3>
                <p>
                    {item.quote}
                </p>
                </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </div>
  )
}

export default UserPage