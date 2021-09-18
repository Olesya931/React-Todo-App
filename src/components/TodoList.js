import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({todoList, setTodoList,sortedTodoList}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {sortedTodoList.map(todo => (
                   <TodoItem 
                   todo={todo}
                   todoList={todoList} 
                   setTodoList={setTodoList} 
                   key={todo.id} 
                   text={todo.text}/> 
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
