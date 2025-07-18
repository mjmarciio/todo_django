import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8000/api/tasks/${id}/`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error('Erro ao deletar:', err));
  };

  return (
    <div>
      <Link to="/create">Criar Tarefa</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.completed ? '✔️' : '❌'}
            <Link to={`/edit/${task.id}`}>Editar</Link>
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
