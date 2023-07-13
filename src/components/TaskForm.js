import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '', deadline: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: uuidv4(), completed: false };
    addTask(newTask);
    setTask({ name: '', description: '', deadline: '' });
  };

  return (
    <FormContainer>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        ></textarea>

        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={task.deadline}
          onChange={(e) => setTask({ ...task, deadline: e.target.value })}
          required
        />

        <button type="submit">Add Task</button>
      </form>
    </FormContainer>
  );
};

export default TaskForm;