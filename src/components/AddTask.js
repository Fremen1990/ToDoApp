import React, { Component } from 'react'
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10)

    state = {
        text: '',
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckBox = (e) => {
        console.log("important")
        this.setState({
            checked: e.target.checked

        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        // console.log("add")

        const { text, checked, date } = this.state
        if (text.length > 2) {
            const add = this.props.add(text, date, checked)
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert("task name too short")
        }

    }

    render() {
        let maxDate = this.minDate.slice(0, 4) * 1 + 1// multiply x1 to convert to number +1 year
        // console.log(maxDate)
        maxDate = maxDate + "-12-31" // final 2021-12-31
        // console.log(maxDate)

        return (
            <div className="form">
                <input type="text" placeholder="add task" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckBox} />
                <label htmlFor="important">IMPORTANT </label>
                <br />
                <label htmlFor="date">Deadline</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;