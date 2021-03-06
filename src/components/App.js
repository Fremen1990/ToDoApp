import React, { Component } from 'react';
import './App.css'
import AddTask from "./AddTask";
import TaskList from "./TaskList"
import Task from "./Task"

class App extends Component {

    counter = 7

    state = {
        tasks: [
            {
                id: 0,
                text: "zagrać wreszcie w wiedźmina 3",
                date: "2018-02-15",
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: "pograć na gitarze",
                date: "2018-05-15",
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: "kupa",
                date: "2018-09-15",
                important: true,
                active: false,
                finishDate: null,
            },
            {
                id: 3,
                text: "siku",
                date: "2018-09-15",
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 4,
                text: "moto",
                date: "2018-09-15",
                important: true,
                active: false,
                finishDate: null,
            },
            {
                id: 5,
                text: "siłka",
                date: "2018-09-15",
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 6,
                text: "taparapa",
                date: "2018-09-15",
                important: false,
                active: true,
                finishDate: null,
            },
        ]
    }

    deleteTask = (id) => {
        // // find index & splice
        // // console.log("deeelete" + id)
        // const tasks = [...this.state.tasks]
        // // console.log(tasks)
        // const index = tasks.findIndex(task => task.id)
        // tasks.splice(index, 1)
        // // console.log(tasks)
        // this.setState({
        //     tasks: tasks
        // })

        //....................................................//
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id)
        // console.log(tasks)
        this.setState({
            tasks
        })
    }

    changeTaskStatus = (id) => {
        console.log("status changed" + id)

        const tasks = Array.from(this.state.tasks);

        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false
                task.finishDate = new Date().getTime()
            }
        })
        this.setState({
            tasks
        })

    }

    addTask = (text, date, importnat) => {
        // console.log("object added")
        const task =
        {
            id: this.counter, // last id
            text: text, // text from input
            date: date, // date from input
            important: important, // checkbox data
            active: true, // active true 
            finishDate: null, // finish date null
        }
        this.counter++;
        console.log(task, this.counter)
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }))
        return true
    }

    render() {
        return (
            <div className="App">
                <h1>TO DO APP</h1>
                <AddTask add={this.addTask} />
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
            </div>
        )
    }
}
export default App;
