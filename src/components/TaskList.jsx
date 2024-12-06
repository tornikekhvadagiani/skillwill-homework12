import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    const { tasks, onTaskAction, actionLabel, onDelete } = this.props;
    return (
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            onTaskAction={onTaskAction}
            actionLabel={actionLabel}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
