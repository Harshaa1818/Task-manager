import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  ${({ completed }) =>
    completed &&
    `
    background-color: #f0f0f0;
    color: #888;
  `}

  button {
    margin-left: 10px;
  }
`;

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  return (
    <ItemContainer completed={task.completed}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <p>Deadline: {task.deadline}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </ItemContainer>
  );
};

export default TaskItem;