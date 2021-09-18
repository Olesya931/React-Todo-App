import React, {useState, useEffect} from 'react';
import './App.css';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoOption, setTodoOption] = useState('all');
  const [sortedTodoList, setSortedTodoList] = useState([]);

  useEffect (() =>{
    getSavedTodoList();
  },[])

  useEffect(()=>{
    sortTodoList();
    saveTodoList();
  }, [todoList, todoOption])

  const sortTodoList = ()=>{
    switch (todoOption){
      case 'completed':
        setSortedTodoList(todoList.filter(item=> item.completed === true))
        break;
      case 'uncompleted':
        setSortedTodoList(todoList.filter(item=> item.completed === false))
        break;
      default: 
        setSortedTodoList(todoList);
        break;
    }
  };

  const saveTodoList = ()=>{
      localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  const getSavedTodoList = ()=>{
    if (localStorage.getItem('todoList')===null){
      localStorage.setItem('todoList', JSON.stringify([]));
    } else{
      let savedTodoList = JSON.parse(localStorage.getItem('todoList'));
      setTodoList(savedTodoList);
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <h1>Todo List App <i className="fas fa-clipboard-list"></i></h1> 
      </header>   
      <TodoInput 
      todoInput={todoInput} 
      todoList={todoList} 
      setTodoList={setTodoList} 
      setTodoInput={setTodoInput}
      setTodoOption={setTodoOption}/>
      <TodoList 
      todoList={todoList} 
      setTodoList={setTodoList}
      sortedTodoList={sortedTodoList}/>
    </div>
  );
}

export default App;
