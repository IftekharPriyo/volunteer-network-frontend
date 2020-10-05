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
            <div className="event-task">
            {
                tasks.map(tsk=><IndividualTaskCards tsk={tsk}></IndividualTaskCards>)
            }
            </div>
        </div>
    );
};

export default Individuals;