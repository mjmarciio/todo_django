# Todo Django

Este projeto é uma aplicação de lista de tarefas (To-Do List) construída com Django no backend e React no frontend. O sistema permite cadastro, login, criação, visualização, filtro, marcação de tarefas como concluídas e paginação.

---

## Tecnologias Utilizadas

- **Backend:** Django, Django REST Framework, django-filter
- **Frontend:** React, Axios, React Router DOM, CSS Modules
- **Banco de Dados:** SQLite (padrão do Django)
- **Autenticação:** JWT (Django REST Framework Simple JWT)

---

## Estrutura do Projeto

```
todo_django/
├── apps/
│   └── api/
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
├── core/
│   └── urls.py
├── frontend/
│   └── src/
│       ├── api/
│       │   └── axios.js
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.js
│       │   ├── TodoList.jsx
│       │   └── TodoList.module.css
│       ├── App.js
│       └── PrivateRoute.js
├── manage.py
└── README.md
```

---

## Funcionalidades

- **Cadastro de usuário:** Crie uma conta com usuário e senha.
- **Login:** Autentique-se para acessar suas tarefas.
- **Adicionar tarefa:** Crie novas tarefas informando apenas o título.
- **Listar tarefas:** Visualize suas tarefas com paginação (5 por página).
- **Filtrar tarefas:** Filtre por todas, concluídas ou pendentes.
- **Marcar como concluída:** Altere o status de conclusão de cada tarefa.
- **Paginação:** Navegue entre páginas de tarefas.
- **Proteção de rotas:** Apenas usuários autenticados acessam a página de tarefas.

---

## Como Executar

### Backend (Django)

1. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Aplique as migrações:**
   ```bash
   python manage.py migrate
   ```

3. **Crie um superusuário (opcional):**
   ```bash
   python manage.py createsuperuser
   ```

4. **Execute o servidor:**
   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. **Acesse a pasta do frontend:**
   ```bash
   cd frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

---

## Configuração da API

- O frontend espera que a API esteja disponível em `http://localhost:8000/`.
- Configure o arquivo `frontend/src/api/axios.js` para apontar para o endereço correto da API, se necessário.

---

## Endpoints Principais

- `POST /api/register/` — Cadastro de usuário
- `POST /api/token/` — Login (JWT)
- `GET /api/tasks/` — Lista tarefas (com paginação e filtro)
- `POST /api/tasks/` — Cria nova tarefa
- `PATCH /api/tasks/<id>/` — Atualiza status de conclusão

---

## Fluxo de Navegação

- Ao acessar a aplicação, o usuário é redirecionado para a tela de login.
- Após login, é redirecionado para `/tasks`.
- Se não estiver autenticado, não pode acessar `/tasks`.
- Cadastro e login são realizados na mesma tela ou em telas separadas, conforme configuração.

---

## Personalização

- **Estilos:** Editar `TodoList.module.css` para personalizar o visual.
- **Modelos:** Adicione campos em `apps/api/models.py` conforme necessidade.

---

## Licença

Este projeto é livre para uso educacional e pessoal.

---

## Autor

Márcio Junior
