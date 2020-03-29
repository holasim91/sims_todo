import React from 'react'
import {MdAdd} from 'react-icons/md'
import './ToDoInsert.scss'
export default function ToDoInsert() {
    return (
        <div className="ToDoInsert">
            <input placeholder='할 일을 입력하센'/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </div>
    )
}
