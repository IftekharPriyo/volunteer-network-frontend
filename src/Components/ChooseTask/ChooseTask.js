import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import './ChooseTask.css'
import AllTasks from '../../DBTasks/AllTasks';
import { UserContext } from '../../App';
import logoMain from '../../logos/logoMain.png'

const ChooseTask = () => {
    const [user, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const tasks = AllTasks();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18'));
    const [when, setWhen] = useState('December 12');
    const selectedTask = tasks.filter(task=>task._id===id);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const task = selectedTask[0]?.task;
    const image = selectedTask[0]?.image;
    const description = selectedTask[0]?.description;
    const taskSummary = {...user,selectedDate,task,description,image};
    const submit =()=>{
        fetch('https://lit-springs-45389.herokuapp.com/addTask',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(taskSummary)
        })
    }
    return (
        <div className="container">
        <Link to='/'><img className='logo center' src={logoMain} alt="logo"></img></Link>
        <div className="confirm-task-form">
                <div className="login-page-inner">
                    <h3 className='login-page-title'>Register as a Volunteer</h3>
                    <form>
                            <>
                                <TextField required  autoComplete="off" style={{ marginTop: '40px' }} name='first' id="standard-basic" value={user?.name}/>
                                <TextField required autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={user?.email}/>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                <KeyboardDatePicker 
                                    style={{ fontWeight: 'bold', color: 'black',width: '460px',marginTop: '40px'}}
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                    }}
                                />
                                </Grid>
                                </MuiPickersUtilsProvider>
                                <TextField
                                multiline
                                required autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={description}/>
                                <TextField required autoComplete="off" style={{ marginTop: '33px' }} name='second' id="standard-basic" value={selectedTask[0]?.task}/>

                            </>
                        
                       
                    </form>
                    <Link to='/individuals'><button onClick={submit} className="submit-btn" >Registration</button></Link>
                </div>
        </div>
        </div>
    );
};

export default ChooseTask;