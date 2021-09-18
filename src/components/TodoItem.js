import React from "react";

const TodoItem = ({text,todoList, setTodoList,todo}) => {

    const deleteTodo = () =>{
        setTodoList(todoList.filter((item) => item.id !== todo.id))
    };

    const completeTodo = () =>{
        setTodoList(todoList.map((item) => {
            if (item.id===todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    return(
        <div className="todo">            
            <button onClick={completeTodo} className="complete-btn">
                <i className="fas fa-check"> </i>
            </button> 
            <li className={`todo-item ${todo.completed? "completed" : ""}`}>{text}</li>
  
            <button onClick={deleteTodo} className="delete-btn">
                <i className="fas fa-trash"> </i>
            </button> 
        </div>
    );
}

export default TodoItem;