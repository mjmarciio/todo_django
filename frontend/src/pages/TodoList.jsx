import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styles from './TodoList.module.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchTasks();
  }, [filter, page]);

  const fetchTasks = async () => {
    try {
      const res = await api.get(`tasks/?is_completed=${filter}&page=${page}&page_size=5`);
      setTasks(res.data.results || res.data);
      setCount(res.data.count || (res.data.length || 0));
    } catch (err) {
      alert('Erro ao buscar tarefas');
    }
  };

  const createTask = async () => {
    await api.post('tasks/', { title });
    setTitle('');
    setPage(1); // Volta para primeira página após criar
    fetchTasks();
  };

  const toggleDone = async task => {
    await api.patch(`tasks/${task.id}/`, { is_completed: !task.is_completed });
    fetchTasks();
  };

  const totalPages = Math.ceil(count / 5);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Minhas Tarefas</h2>

      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          placeholder="Nova tarefa..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className={styles.button} onClick={createTask}>Criar</button>
      </div>

      <div className={styles.filter}>
        <label>Filtrar: </label>
        <select className={styles.select} onChange={e => { setFilter(e.target.value); setPage(1); }}>
          <option value="">Todas</option>
          <option value="true">Concluídas</option>
          <option value="false">Pendentes</option>
        </select>
      </div>

      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li
            key={task.id}
            className={`${styles.taskItem} ${task.is_completed ? styles.completed : ''}`}
          >
            {task.title}
            <button className={styles.button} onClick={() => toggleDone(task)}>
              {task.is_completed ? 'Desmarcar' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button
          className={styles.button}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button
          className={styles.button}
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default TodoList;
