import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task =>
        task.active)

    const done = props.tasks.filter(task => !task.active)

    console.log(active, done)

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <>
            <div className="active">
                <h2>Task List</h2>
                {activeTasks.length > 0 ? activeTasks : <p>No tasks to do!</p>}
            </div>
            <hr />
            <div className="done">
                <h3>Done <em>({done.length})</em></h3>
                {done.length > 3 && <span style={{ fontSize: 16 }}>There are only 3 last tasks diplayed</span>}
                {doneTasks.slice(0, 3)}
            </div>
        </>
    )
}

export default TaskList;