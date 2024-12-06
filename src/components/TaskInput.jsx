import React, { Component } from "react";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAdd = () => {
    const { newTask } = this.state;
    if (newTask.trim() !== "") {
      this.props.addTask(newTask.trim());
      this.setState({ newTask: "" });
    }
  };

  render() {
    return (
      <div className="task-input">
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChange}
          placeholder="შეიყვანეთ ახალი დავალება"
        />
        <button onClick={this.handleAdd}>დამატება</button>
      </div>
    );
  }
}

export default TaskInput;
