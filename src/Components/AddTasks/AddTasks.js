import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Col, Form } from 'react-bootstrap';
import './AddTasks.css'
import upload from '../../logos/upload.png'

const AddTasks = () => {

    const [uploaded, setUploaded] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(false);
    const [task, setTask] = useState({});
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18'));


    const handleDateChange = (date) => {
        setSelectedDate(date);
        const taskToAdd = { ...task };
        taskToAdd["selectedDate"] = date;
        setTask(taskToAdd);
    };


    const handleBlur = (e) => {
        const taskToAdd = { ...task };
        taskToAdd[e.target.name] = e.target.value
        taskToAdd["color"] = 'black'
        setTask(taskToAdd);
    }


    const submit = () => {
        fetch('https://lit-springs-45389.herokuapp.com/addToCollection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
        setUploadStatus(true)
    }


    const uploadImage = () => {
        setUploaded(true);
        const taskToAdd = { ...task };
        taskToAdd["image"] = 'https://i.ibb.co/3BzYG48/extra-Volunteer.png';
        setTask(taskToAdd);
    }


    return (
        <div className="event-container" >
            <Form className="event-form">
                <Form.Row>
                    <Form.Group style={{ marginRight: '50px' }} as={Col} >
                        <Form.Control onBlur={handleBlur} type="text" name="task" placeholder="Enter title" />
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Col} >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>

                            <KeyboardDatePicker
                                style={{ fontWeight: 'bold', color: 'black' }}
                                margin="normal"
                                disableFuture
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />

                        </MuiPickersUtilsProvider>
                    </Form.Group>
                    <br></br>
                </Form.Row>



                <Form.Row>
                    <Form.Group as={Col} style={{ marginRight: '50px' }} >
                        <Form.Control onBlur={handleBlur} name="description" placeholder="Enter description" as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        {
                            uploaded ? (
                                <p>Image Uploaded!</p>
                            ) : (
                                    <div onClick={uploadImage} className='upload-image-btn' > <img src={upload} className="upload-logo" alt="upload"></img> Upload Image</div>
                                )
                        }
                    </Form.Group>
                </Form.Row>



            </Form>
            {
                uploadStatus ? (
                    <button className="add-event-btn" disabled>Submitted</button>
                ) :
                    (
                        <button onClick={submit} className="add-event-btn">Submit</button>
                    )
            }
        </div>
    );
};

export default AddTasks;