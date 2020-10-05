import React from 'react';
import { Button } from 'react-bootstrap';
import AllTasks from '../../DBTasks/AllTasks';
import TasksCard from '../TasksCard/TasksCard';
import './Dash.css';

const Dash = () => {
    const tasks = AllTasks();
    return (
        <div>
            <div>
            <h2 style={{textAlign:'center',fontWeight:'bolder'}} >I grow By Helping People in Need</h2>
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