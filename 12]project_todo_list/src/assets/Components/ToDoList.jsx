import React, { useRef, useState } from 'react';

export default function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const inputRef = useRef();

    const InputChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const AddTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue('');
        setTimeout(() => {
            inputRef.current.focus();
        }, 500);
    };
  
    return (
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={InputChange}
                    ref={inputRef}
                    className="todo-input"
                    placeholder="Add a new task"
                />
                <button onClick={AddTodo} className="add-button">Add Todo</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">{todo}</li>
                ))}
            </ul>
        </div>
    );
}
