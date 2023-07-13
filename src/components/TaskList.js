import React from 'react';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-bottom: 20px;
`;

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ListContainer>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskCompletion={toggleTaskCompletion}
            />
          ))}
        </ul>
      )}
    </ListContainer>
  );
};

export default TaskList;