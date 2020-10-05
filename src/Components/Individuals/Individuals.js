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
        fetch('https://lit-springs-45389.herokuapp.com/onesTasks?email='+LoggedInUser.email)
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
            <h3>New task will be added soon. Go to home-page and click on your name to see the update.</h3>
        </div>
    );
};

export default Individuals;