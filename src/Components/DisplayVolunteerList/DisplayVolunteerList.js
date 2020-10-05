import React from 'react';
import { useState } from 'react';
import trash from '../../logos/trash.png'
import './DisplayVolunteerList.css'

const DisplayVolunteerList = (props) => {
    const {_id,name,email,task,selectedDate} = props.tsk
    const[toggle,setToggle] = useState(false)
    const deleteThisTask = () =>{
        setToggle(true)
        fetch(`http://localhost:5000/delete/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(result=>{
        })
        
    }
    return (
        <tr className={
            toggle?"remove"
            :"table-row"
        } >
        <td>{name}</td>
        <td>{email}</td>
        <td>{selectedDate}</td>
        <td>{task}</td>
        <td><button className="trash-btn" onClick={deleteThisTask} ><img className="trash" src={trash} alt="trash"></img></button></td>
        </tr>
    );
};

export default DisplayVolunteerList;