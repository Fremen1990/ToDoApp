import React from 'react';



const Task = (props) => {

    const style = {
        color: 'red',
    }


    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - until <span>{date}</span>
                    <button onClick={() => props.change(id)}>Done</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {

        const finishTime = new Date(finishDate).toLocaleString()

        return (<div>
            <p>
                <strong>{text}</strong> <em>do until: {date}</em>
                <br />
                Confirmation   <span>{finishTime}</span>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>)

    }
}
export default Task;