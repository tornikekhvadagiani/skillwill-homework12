import React from "react";

class TaskItem extends React.Component {
  render() {
    const { task, index, onTaskAction, actionLabel, onDelete } = this.props;
    return (
      <li>
        {task}{" "}
        <button onClick={() => onTaskAction(index)}>{actionLabel}</button>
        {onDelete && (
          <button onClick={() => onDelete(index)} style={{ marginLeft: "10px" }}>
            წაშლა
          </button>
        )}
      </li>
    );
  }
}

export default TaskItem;
