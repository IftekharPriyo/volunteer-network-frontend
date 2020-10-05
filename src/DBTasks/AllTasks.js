import React from 'react';
import { useEffect, useState } from 'react';

const AllTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/taskLists')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return tasks
};

export default AllTasks;