import React from 'react';
import uuid from 'react-uuid';


const TodoInput = ({todoInput, setTodoInput, todoList, setTodoList, setTodoOption}) => {

    const getInputValue = (e)=>{
        setTodoInput(e.target.value);
    };

    const addTodo = (e)=>{
        e.preventDefault();
        setTodoList([...todoList, {id: uuid(), text:todoInput, completed: false}]);
        setTodoInput('');
    }

    const optionChange = (e)=>{
        setTodoOption(e.target.value);
    }

    return(
        <form className="todo-form">
            <input onChange={getInputValue} value={todoInput} type="text" className="todo-input" />
            <button onClick={addTodo} className="add-btn" type="submit">
            <i className="fas fa-plus"></i>
            </button>
            <div className="select">
                <select onChange={optionChange} name="todos" className="select-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
      </form>
    );
}

export default TodoInput;