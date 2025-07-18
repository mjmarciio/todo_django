import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f5f5f5',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#999' : '#000'
      }}
    >
      <div onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.title}
      </div>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          padding: '5px 10px',
          cursor: 'pointer'
        }}
      >
        Deletar
      </button>
    </div>
  );
};

export default TaskItem;
