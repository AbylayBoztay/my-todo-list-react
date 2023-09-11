import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import { Container } from 'react-bootstrap';
import { Routes, Route, NavLink } from 'react-router-dom';
import SecondPage from './components/pages/SecondPage';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Todo List</NavLink>
            </li>
            <li>
              <NavLink to="/aboutApp">About App</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Container>
        <Header />
        <Routes>
          {/* Маршрут для главной страницы (TodoList) */}
          <Route path="/" element={<TodoPage todo={todo} setTodo={setTodo} />} />

          {/* Маршрут для SecondPage */}
          <Route path="/aboutApp" element={<SecondPage/>} />
        </Routes>
      </Container>
    </>
  );
}

// Компонент для главной страницы (TodoList)
function TodoPage({ todo, setTodo }) {
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

// Компонент для контента SecondPage
function SecondPageContent() {
  return (
    <div>
      {/* Здесь отображается контент для SecondPage */}
    </div>
  );
}

export default App;
