import React from 'react';

const TaskList = ({ tasks, removeTask, toggleTaskComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.text}>
          <span 
          className={task.completed ? 'complete' : null}
          onClick={() => toggleTaskComplete(task)}
          >
            {task.text}
          </span>
          <button onClick={(event) => removeTask(task)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
