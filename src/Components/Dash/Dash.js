import React from 'react';
import { Button } from 'react-bootstrap';
import AllTasks from '../../DBTasks/AllTasks';
import NavBar from '../NavBar/NavBar';
import TasksCard from '../TasksCard/TasksCard';
import './Dash.css';
import background from '../../logos/background.png'

const Dash = () => {
    const tasks = AllTasks();
    return (
        <div style={{background:`linear-gradient(to bottom,
            rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
            url(${background}) `, height:'700'}}>
            <NavBar></NavBar>
            <div>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}} >I GROW BY HELPING PEOPLE IN NEED</h2>
            <div class="box">
            <input className="search-bar" type="search" id="search" placeholder="Search..." />
            <button className="search-btn">Search</button>
            </div>
            <div className="taskLists">
            {
                tasks.map(tasks=><TasksCard tasks={tasks}></TasksCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default Dash;