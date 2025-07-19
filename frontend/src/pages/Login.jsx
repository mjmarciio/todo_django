import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate('/tasks');
    } catch (err) {
      alert('Usuário ou senha inválidos!');
    }
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
      });
      alert('Conta criada com sucesso! Faça login.');
      setIsRegister(false);
      setUsername('');
      setPassword('');
    } catch (err) {
      alert('Erro ao criar conta. Tente outro nome de usuário.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={isRegister ? handleRegister : handleLogin} style={styles.form}>
        <h2 style={styles.title}>{isRegister ? 'Criar Conta' : 'Entrar'}</h2>
        <input
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          {isRegister ? 'Cadastrar' : 'Login'}
        </button>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          {isRegister ? (
            <>
              Já tem conta?{' '}
              <span
                style={{ color: '#667eea', cursor: 'pointer' }}
                onClick={() => setIsRegister(false)}
              >
                Entrar
              </span>
            </>
          ) : (
            <>
              Não tem conta?{' '}
              <span
                style={{ color: '#667eea', cursor: 'pointer' }}
                onClick={() => setIsRegister(true)}
              >
                Criar Conta
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    background: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
  },
  input: {
    padding: '12px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: '0.2s border-color',
  },
  button: {
    padding: '12px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    transition: '0.3s background',
  }
};

export default Login;
