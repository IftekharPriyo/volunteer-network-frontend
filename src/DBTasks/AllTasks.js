import React from 'react';
import { useEffect, useState } from 'react';

const AllTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://lit-springs-45389.herokuapp.com/taskLists')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return tasks
};

export default AllTasks;