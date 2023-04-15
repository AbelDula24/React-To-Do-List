import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
        
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}

/*
import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState('normal')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      addTodo({ task: value, priority })
      setValue('')
      setPriority('normal')
    }
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <select value={priority} onChange={handlePriorityChange} className="priority-select">
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  )
}
*/
