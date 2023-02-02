import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './AdminPage.css'
import { useNavigate } from 'react-router-dom';
import { getAdminQuotes } from '../../services/GetAdminQuotes';
import { addQuote } from '../../services/AddQuote';
import { deleteQuote } from '../../services/DeleteQuote';
import { editQuote } from '../../services/EditQuote';


const AdminPage = () => {

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({
        _id: "",
        quote: ""
    });
    const [newEdit, setNewEdit] = useState({
        quote: ""
    })

    const handleSubmitEdit = (_id) => {
        editQuote(_id, newEdit);
    }
    
    const nav = useNavigate();
    const [quotes, setQuotes] = useState([]);
    const [newQuote, setNewQuote] = useState({
        quote: ''
    });

    const handleAddQuote = (e) => {
        e.preventDefault();
        addQuote(newQuote).then((result) => {
            console.log(result)
        })
    }

    const handleDeleteQuote = (_id) => {
        deleteQuote(_id)
    }


    useEffect(()=>{
        getAdminQuotes().then((result) => {
            if(result.data === 'Forbidden'){
                nav('/')
                alert("YOU CANT ACCESS ADMIN PAGE")
            } else {
                setQuotes(result.data)
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [quotes])


  return (
    <div>
        <h4 className='h4Style2'>Welcome, You are Logged in as an Admin</h4>

        <div className='quoteInputDiv'>
                <Form.Group className="formGrpStyle mb-2">
                    <Form.Control as="textarea" placeholder='Add Quote' rows={2}
                        onChange={(e) => {
                            setNewQuote({...newQuote, quote: e.target.value})
                        }}
                    />
                </Form.Group>
                <Button className='addQuoteBtn' variant="primary"
                    onClick={handleAddQuote}                
                >ADD</Button>
        </div>

        <div className='tableDivStyle'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Quote</th>
                    <th className='actionTdStyle'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((item,i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td className='quoteTdStyle'>{item.quote}</td>
                            <td className='actionTdStyle'>
                                <Button className='adminBtnStyle' variant="warning" onClick={() => {
                                    setShow(true);
                                    setModalData(item);
                                }}>EDIT</Button>
                                <Button className='adminBtnStyle' variant="danger"
                                    onClick={() => {
                                        handleDeleteQuote(item._id)
                                    }}
                                >DELETE</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={()=>{setShow(false)}}>
                                <Modal.Header closeButton>
                                <Modal.Title>Edit Quote {modalData._id} </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Control placeholder={modalData.quote}
                                        onChange={(e)=>{
                                            setNewEdit({...newEdit, quote: e.target.value})
                                        }}
                                    ></Form.Control>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="primary" onClick={() => {
                                    handleSubmitEdit(modalData._id)
                                }}>Save Changes
                                </Button>
                                </Modal.Footer>
            </Modal>
        </div>
    </div>
  )
}

export default AdminPage