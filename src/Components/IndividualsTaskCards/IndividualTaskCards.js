import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './IndividualTaskCards.css'

const IndividualTaskCards = (props) => {

    const[toggle,setToggle] = useState(false)
    const{_id,name,email,selectedDate,task,image} = props.tasks;

    const deleteTask = () =>{
        setToggle(true)
        fetch(`https://lit-springs-45389.herokuapp.com/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(result=>{
            
        })
    }
    return (
        <div className={
            toggle?"remove":"event-task-body"
        }>
          <div className="event-task-cards">
          
          <Container>
          <Row>
          <Col sm={5}><img className='event-card-image' src={image} alt="task"></img></Col>
          <Col sm={7}>
          <h2>{task}</h2>
          <p>{selectedDate}</p>
          <Button variant="contained" color="secondary" onClick={deleteTask}>Cancel</Button>
          </Col>
          </Row>
          </Container>
          </div>
        </div>
    );
};

export default IndividualTaskCards;