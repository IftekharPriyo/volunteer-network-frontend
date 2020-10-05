import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DisplayVolunteerList from '../DisplayVolunteerList/DisplayVolunteerList';
import './VolunteerList.css'

const VolunteerList = () => {
    const[tasks,setTasks] = useState([])
        
        useEffect(()=>{
            fetch('https://lit-springs-45389.herokuapp.com/allTasks')
            .then(res=>res.json())
            .then(data=>setTasks(data))
        },[])

    return (
        <div>
        <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              tasks.map(tsk=><DisplayVolunteerList key={tsk._id} tsk={tsk}></DisplayVolunteerList>)
          }
        </tbody>
      </Table>
        </div>
    );
};

export default VolunteerList;