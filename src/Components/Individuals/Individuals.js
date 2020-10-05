import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import IndividualTaskCards from '../IndividualsTaskCards/IndividualTaskCards';
import NavBar from '../NavBar/NavBar';
import './Individuals.css'

const Individuals = () => {

    const[tasks,setTasks] = useState([]);
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/onesTasks?email='+LoggedInUser.email)
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])

    return (
        <div>
            <NavBar></NavBar>
            <div className="individual-task-cards">
            {
                tasks.map(task=><IndividualTaskCards tasks={task}></IndividualTaskCards>)
            }
            </div>
            <h3>New task will be added soon. Click on your name on NavBar to see.</h3>
        </div>
    );
};

export default Individuals;