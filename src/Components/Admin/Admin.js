import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../../logos/logoMain.png'
import plus from '../../logos/plus.png'
import users from '../../logos/users.png'
import AddTasks from '../AddTasks/AddTasks';
import VolunteerList from '../VolunteerList/VolunteerList';
import './Admin.css'

const Admin = () => {
    const [registered,setRegistered] = useState(false)
    return (
        <div>
        <div class="header">
         <Link to='/'><img src={logoMain} alt='logo' className='logo'></img></Link>
         <h3 style={{marginLeft:'130px',fontSize:'60px'}}>{
             registered?'Volunteer Registration List':'Add Event'
         }</h3>
        </div>

        <div class="row">
        <div class="col-3 menu">
            <ul>
            <li className={
                registered?"toggleTrue"
                :"toggleFalse"
            } onClick={()=>{
                setRegistered(true)
            }}><img style={{marginRight:'10px'}} src={users} alt="users"></img>Volunteer Registration List</li>
            <li className={
                registered?"toggleFalse"
                :"toggleTrue"
            }  onClick={()=>{
                setRegistered(false)
            }} ><img style={{marginRight:'10px',height:'30px',width:'30px'}} src={plus} alt="add"></img>Add Event</li>
            </ul>
        </div>

        <div class="col-9">
            
            {
                registered?(
                    <VolunteerList></VolunteerList>
                ):(
                    <AddTasks></AddTasks>
                     
                )
            }
            
        </div>
        </div>
    </div>
    );
};

export default Admin;