import React from 'react';
import './TasksCard.css'
const TasksCard = (props) => {
    const {color,_id,image,task} = props.tasks
    return (
        
        <div className="task-body">
          
          <div className="task-cards">
          <img  style={{borderBottom:`20px solid ${color}`}} className='card-image' src={image} alt="task"></img>
          <p className="task-name" style={{backgroundColor:`${color}`}}>{task}</p>
          </div>
          
        </div>
    
        
    )
};

export default TasksCard;