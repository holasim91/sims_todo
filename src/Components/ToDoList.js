import React from 'react'
import ToDoListItem from './ToDoListItem'
import './ToDoList.scss'

export default function ToDoList({todos}) {
    return (
        <div className='ToDoList'>
            {todos.map(todo => (<ToDoListItem todo={todo} key={todo.id}/>))}
        </div>
    )
}
